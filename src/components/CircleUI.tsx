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
  CallingState,
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
import { LoadingUI } from './Circle'
import GraphCanvas from './CircleAnalytics'
import { getRandomPhilosophyTopic } from '@/utils/getRandomPhilosophyTopic'

export interface User {
  id: string
  name: string
  image: string
}

export default function CircleUI({ circleCode }: { circleCode: string }) {
  const router = useRouter()
  const call = useCall()
  const client = useStreamVideoClient()
  const { useMicrophoneState, useParticipants, useDominantSpeaker, useCallCallingState } =
    useCallStateHooks()
  const participants = useParticipants()
  const currentDominantSpeaker = useDominantSpeaker()
  const callingState = useCallCallingState()
  const [oldDominantSpeaker, setOldDominantSpeaker] = useState<StreamVideoParticipant | undefined>(
    currentDominantSpeaker
  )

  const { microphone, isMute } = useMicrophoneState()

  const [topic, setTopic] = useState(getRandomPhilosophyTopic(circleCode))

  const [isParticipantsModalOpen, setIsParticipantsModalOpen] = useState(false)
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState(false)
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)

  const isManager = useMemo(() => {
    return call?.isCreatedByMe
  }, [call?.isCreatedByMe])

  console.log('isManager', isManager)

  const [capturingData, setCatureData] = useState(isManager)
  const graph = useMemo(() => {
    return new Graph()
  }, [])

  const [participantAnalysticsDisclosure, setParticipantAnalysticsDisclosure] = useState<boolean[]>(
    Array(graph.nodes.size).fill(false)
  )

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

  if (callingState !== CallingState.JOINED) {
    return (
      <div className="flex w-full h-full flex-col relative">
        <LoadingUI />
      </div>
    )
  }

  const analysticsFunctions = {
    'Total participation': (graph: Graph, id: string) => {
      const node = graph.getNode(id)
      if (!node) {
        return
      }
      let totalParticipation = 0
      node.edges.forEach((value: number, key: string) => {
        totalParticipation += value
      })

      return totalParticipation
    },
    Participation: (graph: Graph, id: string) => {
      const node = graph.getNode(id)
      if (!node) {
        return
      }
      let totalParticipation = 0
      node.edges.forEach((value: number, key: string) => {
        totalParticipation += value
      })

      const totalEdges = graph.edgesCount
      return totalEdges === 0 ? '0%' : ((totalParticipation / totalEdges) * 100).toFixed(2) + '%'
    },
    'Loves talking to:': (graph: Graph, id: string) => {
      const node = graph.getNode(id)
      if (!node) {
        return
      }
      let maxWeight = 0
      let maxWeightNode: GraphNode | undefined = undefined
      node.edges.forEach((value: number, key: string) => {
        if (value > maxWeight) {
          maxWeight = value
          maxWeightNode = graph.getNode(key)
        }
      })
      if (!maxWeightNode) {
        return 'No one 👀'
      }

      return (maxWeightNode as GraphNode).name
    },
  }

  return (
    <>
      <div className="flex w-full h-full flex-col relative">
        {/* Clock | Code | Members | Link */}
        <div className="relative w-full flex flex-row items-center justify-between h-fit text-xs sm:text-lg md:text-xl text-text">
          <div className="flex flex-row space-x-1 sm:space-x-4 items-center justify-center">
            <Clock />
            <div className="w-[2px] sm:w-[3px] h-4 sm:h-6 bg-text"></div>
            <p>{circleCode}</p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2 sm:space-x-4">
            <Tooltip message="Show Participants">
              <MembersIcon onClick={() => setIsParticipantsModalOpen(true)} />
            </Tooltip>

            <ShareCircleModal isOpen={isShareModalOpen} setIsOpen={setIsShareModalOpen} />

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
                <Tooltip message="View Analytics">
                  <button
                    onClick={() => {
                      setIsAnalyticsModalOpen(true)
                    }}
                  >
                    <Image
                      width="30"
                      height="30"
                      src="https://img.icons8.com/ios-glyphs/30/262626/line-chart.png"
                      className="cursor-pointer w-4 md:w-6"
                      alt="line-chart"
                    />
                  </button>
                </Tooltip>
              </>
            ) : null}
          </div>
        </div>

        <p className="font-semibold text-text text-center pt-6 text-xs sm:text-lg md:text-xl">
          {topic}
        </p>

        <div className="w-full flex items-center justify-center my-8">
          <TableImage participants={participants} />
        </div>

        {/* Management Buttons */}
        <div className="w-full min-h-fit flex flex-row space-x-4 items-center justify-center">
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
        <div className="transition-all duration-300 ease-in-out absolute top-0 right-0 min-w-40 sm:min-w-64 w-fit h-full py-8 px-2 sm:px-4">
          <div className="text-xs sm:text-lg shadow-xl bg-text border-2 border-background text-white rounded-md w-full min-w-40 sm:min-w-64 h-full p-4 flex flex-col space-y-2 overflow-y-auto overflow-x-hidden">
            <div className="flex flex-row justify-between items-center w-full">
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
                    <Avatar
                      imageSrc={participant.image}
                      className="w-6 sm:w-8"
                      style={{
                        borderRadius: '20%',
                      }}
                    />
                    <p>{participant.name}</p>
                    <div className="flex flex-row items-center justify-end space-x-2">
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
      {isAnalyticsModalOpen ? (
        <div className="transition-all duration-300 ease-in-out absolute top-0 left-0 w-full h-full py-4 px-4 sm:py-6 sm:px-4 bg-text/75">
          <div className="shadow-xl bg-background border-2 border-background text-text rounded-md w-full h-full px-2 sm:px-4 py-1 sm:py-2 text-sm flex flex-col space-y-4 overflow-y-auto overflow-x-hidden">
            {graph.nodes.size <= 1 ? (
              <div className="w-full h-full flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <div className="text-lg sm:text-xl md:text-2xl">Analytics</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer text-text"
                    onClick={() => setIsAnalyticsModalOpen(false)}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="flex-1 items-center justify-center flex flex-col">
                  <Image
                    src="/not-found.png"
                    alt="404"
                    width={400}
                    height={400}
                    className="rounded-full"
                  />
                  <p>No participants to show analytics for</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-row justify-between items-center">
                  <div className="text-lg sm:text-xl md:text-2xl">Analytics</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer text-text"
                    onClick={() => setIsAnalyticsModalOpen(false)}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-start w-full h-full space-x-0 space-y-4 sm:space-y-0 sm:space-x-12">
                  <div className="w-full px-4 bg-zinc-200 border-2 border-text rounded-md flex items-center justify-center">
                    <GraphCanvas graph={graph} width={650} height={680} />
                  </div>

                  <div className="w-[3px] h-full bg-text/70 rounded-md"></div>

                  <div className="flex flex-col space-y-4">
                    <div className="text-lg sm:text-xl">Rankings</div>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 h-fit">
                      {Array.from(graph.nodes.keys()).map((id, index) => {
                        const node = graph.getNode(id)
                        if (!node) {
                          return null
                        }
                        return (
                          <div
                            key={node.name}
                            className="flex flex-col space-y-2 px-4 py-2 bg-zinc-200 rounded-md w-fit h-fit items-start transition-all duration-300 ease-in-out cursor-pointer hover:bg-text hover:text-white shadow-md"
                            onClick={() => {
                              const newDisclosure = [...participantAnalysticsDisclosure]
                              newDisclosure[index] = !newDisclosure[index]
                              setParticipantAnalysticsDisclosure(newDisclosure)
                            }}
                          >
                            <div className="flex flex-row items-center justify-between space-x-2 w-full h-full">
                              <div className="flex flex-row items-center space-x-4">
                                <Avatar
                                  imageSrc={node.image}
                                  className="w-8"
                                  style={{
                                    borderRadius: '20%',
                                  }}
                                />
                                <p>{node.name}</p>
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                {participantAnalysticsDisclosure[index] ? (
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                  />
                                ) : (
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                  />
                                )}
                              </svg>
                            </div>
                            {participantAnalysticsDisclosure[index] && (
                              <div className="flex flex-col space-y-2 w-full">
                                {Object.entries(analysticsFunctions).map(([key, value]) => (
                                  <div
                                    key={key}
                                    className="flex flex-row justify-between items-center space-x-4"
                                  >
                                    <p>{key}</p>
                                    <p>{value(graph, node.id)}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  )
}
