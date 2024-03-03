import Link from 'next/link'
import Image from 'next/image'
import NavBar from '@/components/NavBar'

export default function NotFound() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full h-full mt-[15vh] space-y-8">
        <Image src="/not-found.png" alt="404" width={400} height={400} className="rounded-full" />
        <div className="text-4xl font-semibold">I doubt the existence of this page.</div>
        <Link href="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </>
  )
}
