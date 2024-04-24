import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import React from 'react'
import Footer from '@/components/Footer'
import { SparklesCore } from '@/components/Sparkles'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Behaviorism | Socrat',
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
          <h1 className="font-bold text-lg sm:text-xl md:text-3xl text-text">Behaviorism</h1>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Behaviorism introduced in the 20th century by John B. Watson. It is a theory in
            philosophy of mind according to which mental states or events are caused by physical
            states. Specifically, there is two versions of behaviorism both have a zero premise that
            God does not exist.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Crude Behaviorism says that there exists only one substance, the material substance.
            Your psychological states are the behaviors that accompanies them. Anger is nothing more
            than actions you do when angry. The Mind is not something behind the behavior, it is
            part of the behavior. Contents of your mind is what you are saying out loud.
          </p>
          <div className="w-full flex flex-col space-y-2 items-center">
            <Image
              src={'/chapters/behaviorism_crude.png'}
              width={800}
              height={400}
              alt="Idealism"
              className="rounded-md shadow-md"
            />
            <p className="text-xs text-gray">
              Fig. 2 Example interactions between mind and body under the crude behaviorism model.
            </p>
          </div>
          <p className="text-text text-xs sm:text-sm md:text-base">
            This version of behaviorism can be easily critiqued. You can have psychological states
            without behaviors associated with them i.e. I am angry but i am not doing anything. The
            second refined version of behaviorism specify what a psychological state is and what a
            behavior is. Psychological state is having dispositional properties (tendency) to
            produce behaviors or no behavior. Hence, behaviors have multi-tracked dispositions when
            it comes to psychological states it originate from (a many-to-many relatio).
          </p>
          <div className="w-full flex flex-col space-y-2 items-center">
            <Image
              src={'/chapters/behaviorism_refined.png'}
              width={800}
              height={400}
              alt="Idealism"
              className="rounded-md shadow-md"
            />
            <p className="text-xs text-gray">
              Fig. 2 Example interactions between mind and body under the refined behaviorism model.
            </p>
          </div>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Critique of the second version says that it is simply too broad, because it defines
            anything can cause any other thing. In essence it is not helping understand the
            difference between mind and body, or understand consiousness.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page
