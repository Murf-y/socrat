import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import React from 'react'
import Footer from '@/components/Footer'
import { SparklesCore } from '@/components/Sparkles'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Idealism | Socrat',
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
      <div className="overflow-hidden w-full h-full flex flex-col space-y-12 z-10">
        <div className="mt-6 sm:mt-12 px-8 sm:px-16 md:px-20 flex flex-col w-full space-y-8 sm:space-y-12">
          <h1 className="font-bold text-lg sm:text-xl md:text-3xl text-text">Idealism</h1>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Idealism is a philosophy that asserts that reality is fundamentally mental. is the set
            of metaphysical perspectives asserting that, most fundamentally, reality is equivalent
            to mind, spirit, or consciousness; that reality is entirely a mental construct; or that
            there is some higher &quot;ideal form&quot; of reality. In idealism, there is not
            material events, only mental events.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            In idealism there still exists the notion of continuous creation by god (taken from
            Occasionalism) and that you cannot define and objective reality because it will still be
            ontologically subjective. We can only define things in the world through our own
            subjective senses. Hence there does not exists a mind that is an independent object. In
            idealism we explain the appearances by identifying the appearances with reality.
          </p>
          <div className="w-full flex flex-col space-y-2 items-center">
            <Image
              src={'/chapters/idealism.png'}
              width={800}
              height={400}
              alt="Idealism"
              className="rounded-md shadow-md"
            />
            <p className="text-xs text-gray">Fig. 1 Lorem Ipsum Testing Cpations.</p>
          </div>
          <p className="text-text text-xs sm:text-sm md:text-base">
            It is based on 3 main argument. First, we have primary and secondayr qualities. Primary
            qualities are things that caused the idea which can be subjective since it is preceived.
            Secondary qualities are the idea in your mind. Second, likeness principle, your ideas
            are unique to you. Third, the master argument, which is that objective definitions are
            unkown to us. Idealism defines eveyrthing as mental events, and all of these are gods
            mental events.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Idealism critique is very similar to occasionalism critique, additionally we cannot
            critique it methodologically since we would have to experience the world in a mind
            independent way (which we cannot do).
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page
