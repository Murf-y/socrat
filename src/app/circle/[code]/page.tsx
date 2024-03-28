import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import Circle from '@/components/Circle'

export const metadata: Metadata = {
  title: 'Socratic Circle | Socrat',
  description:
    'Join a socratic circle to engage in philosophical discussions | Online Socartic Circles',
}

export default async function Page({ params }: { params: { code: string } }) {
  const { code } = params

  return (
    <div className="w-full h-screen flex flex-col space-y-0">
      <NavBar showCreateCircle={false} />
      {code !== undefined && <Circle circleCode={code} />}
    </div>
  )
}
