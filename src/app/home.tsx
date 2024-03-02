'use client'

import Grid from '@/components/Images/Grid'
import NavBar from '@/components/NavBar'

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <NavBar />
      <div className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 transform-gpu overflow-hidden blur-3xl -left-48 -top-60"
          aria-hidden="true"
        >
          <div
            className="relative aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-text to-background opacity-75 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 transform-gpu overflow-hidden blur-3xl bottom-0 right-0"
          aria-hidden="true"
        >
          <div
            className="relative aspect-[1155/678] translate-x-1/2 translate-y-1/2 rotate-[120deg] bg-gradient-to-tr from-background to-text opacity-75 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col space-y-6 text-lg sm:text-2xl md:text-4xl mt-24 z-10">
        <div className="w-full text-center">Engage, Discuss, Learn</div>
        <div className="w-full text-center">Socrat&apos;s Virtual Harkness Circles</div>
      </div>

      <div className="mt-24 bg-background flex flex-col space-y-4 sm:space-y-0 space-x-2 sm:flex-row justify-between items-center w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 border-2 border-gray px-4 py-2 text-xs sm:text-sm md:text-base z-10">
        <div>Enter access code to join a private Socrat Circle</div>
        <div className="flex flex-row space-x-4 items-center justify-between">
          <input
            type="text"
            className="border-2 border-gray p-2 bg-transparent w-24 placeholder:text-xs sm:placeholder-sm md:placeholder-base focus:outline-none text-xs sm:text-sm md:text-base text-center"
            placeholder="1234 5678"
          />
          <button className="btn btn-primary flex items-center justify-center">Join</button>
        </div>
      </div>
    </div>
  )
}
