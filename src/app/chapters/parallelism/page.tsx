import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import React from 'react'
import Footer from '@/components/Footer'
import { SparklesCore } from '@/components/Sparkles'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Parallelisim | Socrat',
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
          <h1 className="font-bold text-lg sm:text-xl md:text-3xl text-text">Parallelisim</h1>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Parallelism was a theory of mind-body interaction that was developed in the 17th century
            introduced by Gottfried Wilhelm Leibniz. Its zero premise is that there exists a god.
            Parallelism suggestes that mental events and material events are not causally related,
            but there exists a covariance relation. There exists a relation between them, but we
            cannot say that one is a result of the other since there exists alot of variables.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            In Parallelism mental events and material events covary instead of being causal. They
            happen in parallel. Why does nature do this you might ask? Well God created these 2
            parallel systems, the physical system, and the psychological system.
          </p>
          <div className="w-full flex flex-col space-y-2 items-center">
            <Image
              src={'/chapters/parallelism.png'}
              width={800}
              height={400}
              alt="Idealism"
              className="rounded-md shadow-md"
            />
            <p className="text-xs text-gray">
              Fig. 1 Example interactions between mind and body under the parallelism model.
            </p>
          </div>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Critique of parallelism is based on 2 main arguments. First, is that parallelism removed
            causal relation between mental and material events, but there exists a lot of empircal
            procedure that produce strong scientific supposition that the world is causally closed;
            Hence it is really difficult to believe it since its a caviat to natural law. Second,
            this requires God to have created 2 systems in parallel. But this is confirmation bias.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page
