import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import React from 'react'
import Footer from '@/components/Footer'
import { SparklesCore } from '@/components/Sparkles'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Occasionalism | Socrat',
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
          <h1 className="font-bold text-lg sm:text-xl md:text-3xl text-text">Occasionalism</h1>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Occasionalism was introduced in the 17th century by Nicolas Malebranche and it is a
            theory of a philosophical doctrine about causation which says that created substances
            cannot be efficient causes of events. Instead, all events are taken to be caused
            directly by God. Secifically it consists of 2 main ideas, causality, and the role of God
            (continous creation).
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            God is the only cause, and the only true cause. God role is creation followed by a
            biological explanation with god premise for creation. Subsequentally this is followed by
            continuous creation, keep all in a homeostasis state. God is the only cause, and the
            only true cause. God role is creation followed by a biological explanation with god
            premise for creation. Subsequentally this is followed by continuous creation, keep all
            in a homeostasis state, and all keep existing. God is responsible for independent
            occurences of even the smallest events. There is nothing about a moment of existence
            that extends to the following moment.
          </p>
          <div className="w-full flex flex-col space-y-2 items-center">
            <Image
              src={'/chapters/occasionalism.png'}
              width={800}
              height={400}
              alt="Idealism"
              className="rounded-md shadow-md"
            />
            <p className="text-xs text-gray">
              Fig. 1 Example interactions between mind and body under the occasionalism model.
            </p>
          </div>
          <p className="text-text text-xs sm:text-sm md:text-base">
            In Occasionalism they re-define causal relation as an expression of regularity (related)
            not direct impact because of three reasons. Substances cannot create their own
            modifications and these modifications cannot be transfered to another substance. Do not
            think of time as linear because it is not a necessity. One moment in time does nt
            predicate another moment of time, everything is segmented instead of linear. The causer
            should know how to produce the effect. We do not have the required knowledge to produce
            (cause) materialistic events in the direct impact way. Hence it cannot be a direct
            causal impact.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Critique of occasionalism is that even though we redefined causal as reular, it is still
            hard to justify interaction between material and mental events.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page
