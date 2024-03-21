import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { currentUser, useClerk } from '@clerk/nextjs'

// Import a component without SSR
const Circle = dynamic(() => import('@/components/Circle'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Socratic Circle | Socrat',
  description:
    'Join a socratic circle to engage in philosophical discussions | Online Socartic Circles',
}

export default async function Page({ params }: { params: { code: string } }) {
  const { code } = params

  return (
    <div className="w-full h-screen flex flex-col space-y-2">
      <NavBar showCreateCircle={false} />
      {code !== undefined && <Circle code={code} />}
    </div>
  )
}
