'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Clock from './Clock'
import MembersIcon from './Images/MembersIcon'
import ShareCircleModal from './ShareCircleModal'
import TableImage from './Images/TableImage'
import MicOpenIcon from './Images/MicOpenIcon'
import MicClosedIcon from './Images/MicClosedIcon'
import EndCallIcon from './Images/EndCallIcon'
import LeaveIcon from './Images/LeaveIcon'
import {
  Avatar,
  StreamVideoParticipant,
  useCall,
  useCallStateHooks,
  useStreamVideoClient,
} from '@stream-io/video-react-sdk'
import WifiIndicator from './WifiIndicator'
import clsx from 'clsx'
import { Graph, GraphNode } from '@/utils/graph'
import Tooltip from './Tooltip'
import Image from 'next/image'

export interface User {
  id: string
  name: string
  image: string
}

export default function CircleUI({ circleCode }: { circleCode: string }) {
  const router = useRouter()
  const call = useCall()
  const client = useStreamVideoClient()
  const { useMicrophoneState, useParticipants, useDominantSpeaker } = useCallStateHooks()
  const participants = useParticipants()
  const currentDominantSpeaker = useDominantSpeaker()
  const [oldDominantSpeaker, setOldDominantSpeaker] = useState<StreamVideoParticipant | undefined>(
    currentDominantSpeaker
  )

  const { microphone, isMute } = useMicrophoneState()

  const [topic, setTopic] = useState(
    'Do you think the nature of reality is inherently objective or subjective, and how does our perception of it influence our understanding?'
  )

  const [isParticipantsModalOpen, setIsParticipantsModalOpen] = useState(false)
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const isManager = useMemo(() => {
    return call?.isCreatedByMe
  }, [call])

  const [capturingData, setCatureData] = useState(false)
  const graph = useMemo(() => {
    return new Graph()
  }, [])

  useEffect(() => {
    participants.forEach((participant) => {
      const user: User = {
        id: participant.userId,
        name: participant.name,
        image: participant.image,
      }
      graph.addPersonIfDoesNotExist(new GraphNode(user.id, user.name, user.image))
    })
  }, [graph, participants])

  useEffect(() => {
    if (!capturingData) {
      return
    }

    if (
      oldDominantSpeaker &&
      currentDominantSpeaker &&
      oldDominantSpeaker.userId !== currentDominantSpeaker.userId
    ) {
      const oldNode = graph.getNode(oldDominantSpeaker.userId)
      const newNode = graph.getNode(currentDominantSpeaker.userId)
      if (!oldNode || !newNode) {
        console.error('Node corresponding to a dominant speaker was not found')
        return
      }
      graph.addEdge(oldNode, newNode)
    }

    setOldDominantSpeaker(currentDominantSpeaker)
  }, [capturingData, currentDominantSpeaker, graph, oldDominantSpeaker])

  console.log(graph.getStringRepresentation())

  return (
    <>
      <div className="flex w-full h-full flex-col relative">
        {/* Clock | Code | Members | Link */}
        <div className="relative w-full flex flex-row items-center justify-between h-fit text-sm sm:text-lg md:text-xl text-text">
          <div className="flex flex-row space-x-1 sm:space-x-4 items-center justify-center">
            <Clock />
            <div className="w-[3px] h-4 sm:h-6 bg-text"></div>
            <p>{circleCode}</p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-4">
            <Tooltip message="Show Participants">
              <MembersIcon onClick={() => setIsParticipantsModalOpen(true)} />
            </Tooltip>
            <Tooltip message="Share Circle">
              <ShareCircleModal isOpen={isShareModalOpen} setIsOpen={setIsShareModalOpen} />
            </Tooltip>
            {isManager ? (
              <>
                <Tooltip message={capturingData ? 'Stop Analytics' : 'Start Analytics'}>
                  <button
                    className=""
                    onClick={() => {
                      setCatureData(!capturingData)
                      setOldDominantSpeaker(undefined)
                    }}
                  >
                    {capturingData ? (
                      <Image
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-glyphs/30/F22952/record.png"
                        className="cursor-pointer w-4 md:w-6"
                        alt="record"
                      />
                    ) : (
                      <Image
                        width="30"
                        height="30"
                        src="https://img.icons8.com/ios-glyphs/30/262626/record.png"
                        className="cursor-pointer w-4 md:w-6"
                        alt="record"
                      />
                    )}
                  </button>
                </Tooltip>
                <Tooltip message="View Data">
                  <Image
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/262626/line-chart.png"
                    className="cursor-pointer w-4 md:w-6"
                    alt="line-chart"
                  />
                </Tooltip>
              </>
            ) : null}
          </div>
        </div>

        <p className="font-semibold text-text text-center pt-4 text-xs sm:text-lg md:text-xl">
          {topic}
        </p>

        <div className="w-full flex items-center justify-center">
          <TableImage participants={participants} />
        </div>

        {/* Management Buttons */}
        <div className="w-full flex flex-row space-x-4 items-center justify-center">
          <button
            className="btn btn-secondary hover:bg-text hover:text-white text-xs sm:text-base text-nowrap rounded-sm flex flex-row space-x-2 items-center justify-center"
            onClick={() => {
              microphone.toggle()
            }}
          >
            {isMute ? (
              <>
                <MicClosedIcon />
                <p>Unmute</p>
              </>
            ) : (
              <>
                <MicOpenIcon />
                <p>Mute</p>
              </>
            )}
          </button>
          <button
            className="btn btn-secondary text-xs sm:text-base text-nowrap rounded-sm flex flex-row space-x-2 items-center justify-center"
            onClick={() => {
              if (isManager) {
                call?.endCall()
                client?.disconnectUser()
                router.push('/')
              } else {
                call?.leave()
                client?.disconnectUser()
                router.push('/')
              }
            }}
          >
            {isManager ? (
              <>
                <EndCallIcon />
                <p>EndCall</p>
              </>
            ) : (
              <>
                <LeaveIcon />
                <p>Leave</p>
              </>
            )}
          </button>
        </div>
      </div>
      {isParticipantsModalOpen ? (
        <div className="transition-all duration-300 ease-in-out absolute top-0 right-0 min-w-64 w-fit h-full py-8 px-4">
          <div className="shadow-xl bg-text border-2 border-background text-white rounded-md w-full h-full p-4 text-sm flex flex-col space-y-2 overflow-y-auto overflow-x-hidden">
            <div className="text-lg flex flex-row justify-between w-full">
              <p>Participants</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer text-background"
                onClick={() => setIsParticipantsModalOpen(false)}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>

            {participants && participants.length > 0 ? (
              participants.map((participant) => (
                <div
                  key={participant.name}
                  className="w-full flex flex-row items-center justify-between space-x-2"
                >
                  <div
                    className={clsx(
                      'flex flex-row items-center justify-between space-x-4 flex-wrap p-2 rounded-md w-full',
                      participant.isLocalParticipant ? 'bg-background bg-opacity-10' : '',
                      participant.isSpeaking ? 'border-2 border-[#0D9488]' : ''
                    )}
                  >
                    <Avatar imageSrc={participant.image} className="w-8 rounded-full" />
                    <p>{participant.name}</p>
                    <div className="flex flex-row items-center justify-end space-x-2">
                      <p>{participant.audioLevel.toFixed(2)}</p>
                      <p>{participant.isDominantSpeaker ? 'D' : 'N'}</p>
                      <WifiIndicator connectionQuality={participant.connectionQuality} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <p>Loading Participants...</p>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}
