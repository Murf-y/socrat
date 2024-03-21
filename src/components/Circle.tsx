'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Clock from './Clock'
import MembersIcon from './Images/MembersIcon'
import ShareCircleModal from './ShareCircleModal'
import TableImage from './Images/TableImage'
import MicOpenIcon from './Images/MicOpenIcon'
import MicClosedIcon from './Images/MicClosedIcon'
import EndCallIcon from './Images/EndCallIcon'
import LeaveIcon from './Images/LeaveIcon'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'

interface CircleProps {
  code: string
}

function LoadingUI() {
  return (
    <div className="flex w-full h-full items-center text-xl justify-center">
      <div role="status" className="text-text pl-6 relative">
        <svg
          aria-hidden="true"
          className="w-10 h-10 sm:w-64 sm:h-64 text-lightgray animate-spin fill-text"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <p className="absolute -left-1/2 -top-3/4 sm:left-1/4 sm:top-[45%] w-full text-nowrap">
          Joining the Circle
        </p>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
function Circle({ code }: CircleProps) {
  const router = useRouter()
  const currentUser = useUser()

  const [topic, setTopic] = useState(
    'Do you think the nature of reality is inherently objective or subjective, and how does our perception of it influence our understanding?'
  )
  const [isManager, setIsManager] = useState(false)
  const [isMicOn, setIsMicOn] = useState(false)
  const [usersImages, setUsersImages] = useState<string[]>([currentUser.user?.imageUrl ?? ''])

  return (
    <div className="flex w-full h-full flex-col flex-1 relative px-8 sm:px-16 md:px-20 bg-background">
      {/* Clock | Code | Members | Link */}
      <div className="relative w-full flex flex-row items-center justify-between h-fit text-sm sm:text-lg md:text-xl text-text">
        <div className="flex flex-row space-x-1 sm:space-x-4 items-center justify-center">
          <Clock />
          <div className="w-[3px] h-4 sm:h-6 bg-text"></div>
          <p>{code}</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
          <MembersIcon />
          <ShareCircleModal />
        </div>
      </div>

      <p className="font-semibold text-text text-center pt-4 sm:pt-8 text-xs sm:text-lg md:text-xl">
        {topic}
      </p>

      <div className="w-full flex items-center justify-center">
        <TableImage usersImages={usersImages} />
      </div>

      {/* Management Buttons */}
      <div className="w-full flex flex-row space-x-4 items-center justify-center">
        <button
          className="btn btn-secondary hover:bg-text hover:text-white text-xs sm:text-base text-nowrap rounded-full flex flex-row space-x-2 items-center justify-center"
          onClick={() => {
            setIsMicOn(!isMicOn)
          }}
        >
          {isMicOn ? (
            <>
              <MicOpenIcon />
              <p>Mute</p>
            </>
          ) : (
            <>
              <MicClosedIcon />
              <p>Unmute</p>
            </>
          )}
        </button>
        <button
          className="btn btn-secondary text-xs sm:text-base text-nowrap rounded-full flex flex-row space-x-2 items-center justify-center"
          onClick={() => {
            router.push('/')
          }}
        >
          {isManager ? (
            <>
              <EndCallIcon />
              <p>End</p>
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
  )
}

export default Circle
