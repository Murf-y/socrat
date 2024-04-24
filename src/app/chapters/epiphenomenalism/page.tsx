import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import React from 'react'
import Footer from '@/components/Footer'
import { SparklesCore } from '@/components/Sparkles'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Epiphenomenalism | Socrat',
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
          <h1 className="font-bold text-lg sm:text-xl md:text-3xl text-text">Epiphenomenalism</h1>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Epiphenomenalism was introduced in the 19th century by Thomas Henry Huxley. It is a
            theory in philosophy of mind according to which mental states or events are caused by
            physical states or events in the brain but do not themselves cause anything.
            Specifically, mental and material events are in some way seperate but are the same
            substance. A lot of mental events are brain states. Material events and the the natural
            world are causally closed.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            There are mental side-effects of physical events. Mental events are causally inert;
            Therefore, mental events are byproducts of physical events. In short, events are
            physical but there can be mental byproducts that cannot be explained physically. Mental
            events cannot ccause anything. Whereas brain events do. Mental byproducts can be tied
            with spiritual substances such as your soul.
          </p>
          <div className="w-full flex flex-col space-y-2 items-center">
            <Image
              src={'/chapters/epiphenomenalism.png'}
              width={800}
              height={400}
              alt="Epiphenomenalism"
              className="rounded-md shadow-md"
            />
            <p className="text-xs text-gray">
              Fig. 1 Example interactions between mind and body under the epiphenomenalism model.
            </p>
          </div>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Epiphenomenalism critisim is that even if we have indirectly caused mental byproducts,
            nothing can be causually inert (assuming the world is causally closed). Dangling causal
            relations directly contradict the idea of causually closed world.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page
