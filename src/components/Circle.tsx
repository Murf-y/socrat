'use client'

import React, { useState } from 'react'
import Clock from './Clock'
import MembersIcon from './Images/MembersIcon'
import ShareCircleModal from './ShareCircleModal'
import Table from './Images/Table'
import MicOpenIcon from './Images/MicOpenIcon'
import MicClosedIcon from './Images/MicClosedIcon'
import EndCallIcon from './Images/EndCallIcon'
import LeaveIcon from './Images/LeaveIcon'

function Circle({ params }: { params: { code: string } }) {
  const [topic, setTopic] = useState(
    'Do you think the nature of reality is inherently objective or subjective, and how does our perception of it influence our understanding?'
  )

  const [isManager, setIsManager] = useState(false)
  const [isMicOn, setIsMicOn] = useState(false)

  return (
    <div className="flex w-full flex-col flex-1 relative">
      <div className="relative w-full flex flex-row items-center justify-between h-fit pt-4 px-4 sm:px-8 md:px-12 text-sm sm:text-lg md:text-xl font-bold text-text">
        <div className="flex flex-row space-x-1 sm:space-x-4 items-center justify-center">
          <Clock />
          <div className="w-[3px] h-4 sm:h-6 bg-text"></div>
          <p>{params.code!}</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2">
          <MembersIcon />
          <ShareCircleModal />
        </div>
      </div>

      <p className="font-semibold text-text text-center mt-8 px-4 sm:px-8 md:px-12 text-xs sm:text-lg md:text-xl ">
        {topic}
      </p>

      <div className="w-full flex items-center justify-center">
        <Table />
      </div>

      <div className="w-full flex flex-row space-x-4 items-center justify-center">
        <button className="btn btn-secondary text-xs sm:text-base text-nowrap rounded-full flex flex-row space-x-2 items-center justify-center">
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
        <button className="btn btn-secondary text-xs sm:text-base text-nowrap rounded-full flex flex-row space-x-2 items-center justify-center">
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
      {/* <Call appId={process.env.PUBLIC_AGORA_APP_ID!} channelName={params.code}></Call> */}
    </div>
  )
}

export default Circle
