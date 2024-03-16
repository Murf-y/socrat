import Circle from '@/components/Circle'
import NavBar from '@/components/NavBar'
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
      <Circle params={params} />
    </div>
  )
}
