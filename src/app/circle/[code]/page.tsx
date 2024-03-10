import Call from '@/components/Call'
import Clock from '@/components/Clock'
import NavBar from '@/components/NavBar'
import ShareCircleModal from '@/components/ShareCircleModal'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Socratic Circle | Socrat',
  description:
    'Join a socratic circle to engage in philosophical discussions | Online Socartic Circles',
}

export default function Page({ params }: { params: { code: string } }) {
  return (
    <div className="w-full h-screen flex flex-col">
      <NavBar />
      <div className="flex w-full flex-1 relative">
        <div className="flex flex-row items-center justify-center h-fit space-x-2 sm:space-x-4 absolute z-10 mt-2 ml-4 sm:ml-8 md:ml-12 text-sm sm:text-lg mdtext-xl :text-2xl font-bold text-text">
          <Clock />
          <div className="w-[3px] h-6 bg-text"></div>
          <p>{params.code!}</p>
        </div>
        <ShareCircleModal />
        {/* <Call appId={process.env.PUBLIC_AGORA_APP_ID!} channelName={params.code}></Call> */}
      </div>
    </div>
  )
}
