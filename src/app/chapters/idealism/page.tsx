import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import React from 'react'
import Footer from '@/components/Footer'
import { SparklesCore } from '@/components/Sparkles'

export const metadata: Metadata = {
  title: 'Chapters | Socrat',
  description:
    'Learn about the philosophy of mind | Descarte dualism, parallelism, occasionalism, idealism, behaviorism, functionalism, and more',
}

function Page() {
  return (
    <>
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#262626"
        />
      </div>
      <NavBar />
      <div className="overflow-hidden w-full h-full flex flex-col space-y-12">
        <div className="mt-6 sm:mt-12 px-8 sm:px-16 md:px-20 flex flex-col w-full space-y-8 sm:space-y-12">
          <h1 className="font-bold text-lg sm:text-xl md:text-3xl text-text">Idealism</h1>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Risus sem ac sed mi vel nec massa pretium. Nunc
            arcu aliquam pretium pellentesque tempor enim adipiscing. Aenean imperdiet rutrum justo
            et rhoncus. Proin sociis felis ut nunc eu urna. Lorem ipsum dolor sit amet consectetur.
            Risus sem ac sed mi vel nec massa pretium. Nunc arcu aliquam pretium pellentesque tempor
            enim adipiscing. Aenean imperdiet rutrum justo et rhoncus. Proin sociis felis ut nunc eu
            urna. Lorem ipsum dolor sit amet consectetur. Risus sem ac sed mi vel nec massa pretium.
            Nunc arcu aliquam pretium pellentesque tempor enim adipiscing. Aenean imperdiet rutrum
            justo et rhoncus. Proin sociis felis ut nunc eu urna.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Risus sem ac sed mi vel nec massa pretium. Nunc
            arcu aliquam pretium pellentesque tempor enim adipiscing. Aenean imperdiet rutrum justo
            et rhoncus. Proin sociis felis ut nunc eu urna. Lorem ipsum dolor sit amet consectetur.
            Risus sem ac sed mi vel nec massa pretium. Nunc arcu aliquam pretium pellentesque tempor
            enim adipiscing. Aenean imperdiet rutrum justo et rhoncus. Proin sociis felis ut nunc eu
            urna. Lorem ipsum dolor sit amet consectetur. Risus sem ac sed mi vel nec massa pretium.
            Nunc arcu aliquam pretium pellentesque tempor enim adipiscing. Aenean imperdiet rutrum
            justo et rhoncus. Proin sociis felis ut nunc eu urna.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Risus sem ac sed mi vel nec massa pretium. Nunc
            arcu aliquam pretium pellentesque tempor enim adipiscing. Aenean imperdiet rutrum justo
            et rhoncus. Proin sociis felis ut nunc eu urna. Lorem ipsum dolor sit amet consectetur.
            Risus sem ac sed mi vel nec massa pretium. Nunc arcu aliquam pretium pellentesque tempor
            enim adipiscing. Aenean imperdiet rutrum justo et rhoncus. Proin sociis felis ut nunc eu
            urna. Lorem ipsum dolor sit amet consectetur. Risus sem ac sed mi vel nec massa pretium.
            Nunc arcu aliquam pretium pellentesque tempor enim adipiscing. Aenean imperdiet rutrum
            justo et rhoncus. Proin sociis felis ut nunc eu urna.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Risus sem ac sed mi vel nec massa pretium. Nunc
            arcu aliquam pretium pellentesque tempor enim adipiscing. Aenean imperdiet rutrum justo
            et rhoncus. Proin sociis felis ut nunc eu urna. Lorem ipsum dolor sit amet consectetur.
            Risus sem ac sed mi vel nec massa pretium. Nunc arcu aliquam pretium pellentesque tempor
            enim adipiscing. Aenean imperdiet rutrum justo et rhoncus. Proin sociis felis ut nunc eu
            urna. Lorem ipsum dolor sit amet consectetur. Risus sem ac sed mi vel nec massa pretium.
            Nunc arcu aliquam pretium pellentesque tempor enim adipiscing. Aenean imperdiet rutrum
            justo et rhoncus. Proin sociis felis ut nunc eu urna.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page
