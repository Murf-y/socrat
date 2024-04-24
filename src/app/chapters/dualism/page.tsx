import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import React from 'react'
import Footer from '@/components/Footer'
import { SparklesCore } from '@/components/Sparkles'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Substance Dualism | Socrat',
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
          <h1 className="font-bold text-lg sm:text-xl md:text-3xl text-text">Substance Dualism</h1>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Substance dualism is the view that the mind and body are distinct substances. This view
            was famously defended by René Descartes, who argued that the mind and body are separate
            entities that interact with each other. According to Descartes, the mind is a thinking
            substance that is not extended in space, while the body is an extended substance that
            does not think. The mind and body are connected through the pineal gland, which allows
            them to interact with each other. Physical object extend space, they are spatial. You
            cannot use the same terms to express or descrive physical states and mental states.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Substance dualism is based on 3 main arguments. The first, is that mental states are not
            spatial as already mentioned. The second, is that qualities of mental states are
            different from those of physical state. Qualities are attributes innate to the thing.
            The world is made up of susbtances. Changes in these substances are events. Substances
            in physical world have <strong>modes</strong> of extension such as shape and size, which
            is the attribute of a material substance. Mental states on the other hand have{' '}
            <strong>modes</strong> of thought which is not extended such as feelings, images, or
            beliefs. No thinking substance is extended, and , no extended substance thinks, so minds
            are distinct from bodies. The third argument is that there exists a epistemological
            distinction between the mind and body. The mind is known through introspection, while
            the body is known through sense perception. Additionally, Descarte indicates that your
            mental states are unique, transparent, and incorrigible.
          </p>
          <div className="w-full flex flex-col space-y-2 items-center">
            <Image
              src={'/chapters/dualism.png'}
              width={800}
              height={400}
              alt="Idealism"
              className="rounded-md shadow-md"
            />
            <p className="text-xs text-gray">
              Fig. 1 Example interactions between mind and body under the substance dualism model.
            </p>
          </div>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Descarte mentions that &quot;I&quot;, ego, myself makes up the essence of the mind. Your
            body is in your immediate voluntary control, however decisions affects the body only
            indirectly. The way we preceive the world is different of what it actually is. Material
            bodies are nothing more than colorless objects interating in space. Such interaction,
            however produce in the mind experiences with qualities that differ from qualities of any
            material object.
          </p>
          <p className="text-text text-xs sm:text-sm md:text-base">
            Critique of cartesian dualism is based on 2 main arguments, critique of interaction, and
            introspection. The first critique is that there exists a causal interaction between
            material event and mental event, But nature as we know it is beleived to be causaly
            closed. This was noted by Elizabeth. The second critique is that Descarte logic does not
            prove that this apply to all humans, if my consiousness is not extended, how can I be
            sure that other people have consiousness is uniquely private, then i do not know
            anything about others consiousness.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Page
