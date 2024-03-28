'use client'
import { generateTokenAction } from '@/app/circle/[code]/action'
import CircleUI from './CircleUI'
import { Call, StreamCall, StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk'
import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'

const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY ?? ''

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

function Circle({ circleCode }: { circleCode: string }) {
  const user = useUser()
  const [client, setClient] = useState<StreamVideoClient | null>(null)
  const [call, setCall] = useState<Call | null>(null)

  useEffect(() => {
    if (!user.user || !apiKey) return
    const userId = user.user.id

    const currentClient = new StreamVideoClient({
      apiKey,
      user: {
        id: userId,
        image: user.user.imageUrl,
        name: user.user.fullName ?? 'Anonymous',
      },
      tokenProvider: () => generateTokenAction(userId),
    })

    const currentCall = currentClient.call('circle', circleCode)
    currentCall
      .join({
        create: true,
        members_limit: 8,
      })
      .catch((err) => {
        console.error(`Failed to join the call`, err)
      })

    setCall(currentCall)
    setClient(currentClient)

    return () => {
      currentClient.disconnectUser()
      currentCall.leave().catch((err) => {
        console.error(`Failed to leave the call`, err)
      })
      setClient(null)
      setCall(null)
    }
  }, [circleCode, user.user])

  if (client == null || call == null) return <LoadingUI />

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <div className="flex w-full h-full flex-col flex-1 relative pt-2 px-8 sm:px-16 md:px-20 bg-background">
          <CircleUI circleCode={circleCode} />
        </div>
      </StreamCall>
    </StreamVideo>
  )
}

export default Circle
