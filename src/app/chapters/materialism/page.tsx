import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import React from 'react'
import Footer from '@/components/Footer'
import { SparklesCore } from '@/components/Sparkles'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Materialism | Socrat',
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
          <h1 className="font-bold text-lg sm:text-xl md:text-3xl text-text">Materialism</h1>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Materialism is a form of philosophical monism that holds that matter is the fundamental
            substance in nature, and that all things, including mental states and consciousness, are
            results of material interactions. The zero premises of materialism is that nothing but
            physical matter exists. It denies metaphysics, the existence of God, and that no
            immaterial component of the mind. There are two types of materialism, reductive and
            elimitative.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            In reductive materialism, the natural world is a compilcated physical system. Humans are
            a combination of chemical compounds and impressive arragement of matter. Psychological
            states are purly material systsems, byproducts of physical products. Consiousness are
            byproducts of physical elements. They are material and causal. It is an epiphenomena,
            mental things are reduced from physical. This version was critiqued that these
            epiphenomena are not clearly defined. Additionally it is hard to accept the zero
            premise.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            In elimitative materialism, it says that we already have psychological categories to
            define brain states, that are composite to other specific psychological states. We will
            get to a point where these categories will be eliminated and replaced with essential
            psychological elements (identity theory) and hence we define mental states as brain
            states. This version was critiqued that when we get to that point we will be able to
            recreate mental events (super ai). Additionally calling mental states as brain states
            might be too limiting. It relies on material unity, that is a unique brain states,
            unique material. But this is not the case since we can have the same mental states but
            different brain states.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page
