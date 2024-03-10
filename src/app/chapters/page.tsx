import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import React, { useMemo, useState } from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import Link from 'next/link'
import clsx from 'clsx'
import Timeline from '@/components/Timeline'

export const metadata: Metadata = {
  title: 'Chapters | Socrat',
  description:
    'Learn about the philosophy of mind | Descarte dualism, parallelism, occasionalism, idealism, behaviorism, functionalism, and more',
}

function Page() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-evenly w-full h-full space-y-72 overflow-hidden">
        <h1 className="font-bold text-center w-full text-lg sm:text-xl md:text-3xl mt-24 relative">
          Philosophy Of Mind
          <Image
            src="/circle_abstract.png"
            alt="Philosophy of Mind"
            width={227}
            height={229}
            priority
            className="mx-auto absolute left-0 md:left-4 -top-20 md:top-8 w-16 sm:w-32 md:w-40"
          />
          <Image
            src="/socrat_with_thumb.png"
            alt="Philosophy of Mind"
            width={135}
            height={370}
            priority
            className="mx-auto absolute right-0 sm:right-4 -top-8 w-9 sm:w-20 md:w-24"
          />
        </h1>
        <Timeline />
        <Footer />
      </div>
    </>
  )
}

export default Page
