import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import React from 'react'
import Footer from '@/components/Footer'
import { SparklesCore } from '@/components/Sparkles'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Functionalism | Socrat',
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
          <h1 className="font-bold text-lg sm:text-xl md:text-3xl text-text">Functionalism</h1>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Functionalism introduced in the 20th century by Hilary Putnam. It is a theory in
            philosophy of mind according to which mental states or events are caused by physical
            states. It defines mental states based on their functional role. First, eveyrthing in
            the physical world can be grouped by &quot;Kind&quot; . For example, a table is a
            functional kind, because it is defined based on its function. You can have a steel
            table, a cardbox table, any form that will still be a table. Gold is a chemical kind, it
            is based on its material. Dogs are biological kind, it is based on its biological
            function.
          </p>
          <div className="w-full flex flex-col space-y-2 items-center">
            <Image
              src={'/chapters/functionalism.png'}
              width={800}
              height={400}
              alt="Idealism"
              className="rounded-md shadow-md"
            />
            <p className="text-xs text-gray">
              Fig. 1 Example of a functional kind that can be multiply realizable such as a Table,
              or Mouse trap.
            </p>
          </div>
          <p className="text-text text-xs sm:text-sm md:text-base">
            To be a functional kind, you must have a function based on inputs and outputs.
            Additionally you must be multiply realizable, meaning that you can have different
            physical forms and still be the same kind. For example, a table can be made of steel,
            wood, or plastic, but it is still a table. This is the same for mental states. You can
            have different physical forms and still be the same mental state. This can be considered
            as a form of critique of eliminative materialism.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Mnetal states are of the functional kind, they take as input brain state, behavior,
            perception, or mental state and output a brain state, behavior, perception, or mental
            state. For example, pain is a mental state that takes as input a brain state and outputs
            a behavior. This is the same for beliefs, desires, and other mental states. Mental
            states are of the functional kind, they take as input brain state, behavior, perception,
            or mental state and output a brain state, behavior, perception, or mental state. For
            example, pain is a mental state that takes as input a brain state and outputs a
            behavior. This is the same for beliefs, desires, and other mental states.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            A critique of functionalism is that it is classifying to many things as mental states,
            since the input and output can be anything, which is not very helpful. Additionally, it
            ignores the inner or qualitative nature of our mental states which is the essential
            feature of many mental states such as pain, sense of color etc.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page
