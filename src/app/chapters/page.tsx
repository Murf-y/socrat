import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Link from 'next/link'
import clsx from 'clsx'
import Timeline from '@/components/Timeline'
import { SparklesCore } from '@/components/Sparkles'

export const metadata: Metadata = {
  title: 'Chapters | Socrat',
  description:
    'Learn about the philosophy of mind | Descarte dualism, parallelism, occasionalism, idealism, behaviorism, functionalism, and more',
}

function Page() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-evenly w-full h-full space-y-44 overflow-hidden">
        <div className="font-bold text-center w-full text-xl sm:text-xl md:text-3xl pt-12 sm:pt-24 relative flex flex-col items-center justify-center overflow-hidden">
          <h1 className="font-bold text-center text-text relative">Philosophy of Mind</h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-text to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-text to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-text to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-text to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#262626"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
          <Image
            src="/circle_abstract.png"
            alt="Philosophy of Mind"
            width={227}
            height={229}
            priority
            className="mx-auto absolute left-1 md:left-4 top-28 sm:top-2 md:top-8 w-16 sm:w-24 md:w-40 z-20"
          />
          <Image
            src="/socrat_with_thumb.png"
            alt="Philosophy of Mind"
            width={135}
            height={370}
            priority
            className="mx-auto absolute right-0 sm:right-4 top-32 sm:top-32 md:top-12 w-9 sm:w-16 md:w-24 z-20"
          />
        </div>
        <Timeline />
        <Footer />
      </div>
    </>
  )
}

export default Page
