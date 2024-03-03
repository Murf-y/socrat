import { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
import LightLogo from '@/components/Images/LightLogo'
import Footer from '@/components/Footer'
import ScrollDownMouse from '@/components/ScrollDownMouse'

export const metadata: Metadata = {
  title: 'Socrat',
  description: 'Philosophical Harkness discussion platform',
}

export default async function Page() {
  return (
    <>
      <div className="absolute mt-0 left-0 top-0 z-0 h-full w-full overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 transform-gpu overflow-hidden blur-3xl -left-48 -top-60"
          aria-hidden="true"
        >
          <div
            className="relative aspect-[1155/678] bg-gradient-to-tr from-black to-background w-[80rem] animate-wigglefade"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col space-y-14 sm:space-y-20 md:space-y-24 items-center w-full h-full">
        <NavBar />

        <div className="flex flex-col space-y-6 text-lg sm:text-2xl md:text-4xl z-0">
          <div className="w-full text-center">Engage, Discuss, Learn</div>
          <div className="w-full text-center">Socrat&apos;s Virtual Harkness Circles</div>
        </div>

        <div className="bg-background flex flex-col space-y-4 sm:space-y-0 space-x-2 sm:flex-row justify-between items-center w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 border-2 border-gray px-4 py-2 text-xs sm:text-sm md:text-base z-10">
          <div>Enter access code to join a private Socrat Circle</div>
          <div className="flex flex-row space-x-4 items-center justify-between">
            <input
              type="text"
              className="border-2 border-gray p-2 bg-transparent w-24 sm:w-28 md:w-32 lg:w-40 placeholder:text-xs sm:placeholder:text-base focus:outline-none text-xs sm:text-sm md:text-base text-center"
              placeholder="1234 5678"
            />
            <button className="btn btn-primary flex items-center justify-center">Join</button>
          </div>
        </div>

        <div className="w-full flex justify-center absolute bottom-0 animate-bounce transition-all duration-1000">
          <ScrollDownMouse />
        </div>
      </div>
      <div className="h-[75vh]"></div>
      <div className="landing_grid h-fit text-background  w-11/12 md:w-3/4 xl:w-1/2 mb-12 text-xs sm:text-sm md:text-base ">
        <div className="div1 w-full px-4 py-6 flex justify-center items-center">
          Learn as a group
        </div>
        <div className="div2 w-full px-4 py-6 flex justify-center items-center">
          Compassion to listen
        </div>
        <div className="div3 w-full px-4 py-6 flex flex-col space-y-8 justify-evenly items-start">
          <div>Philosophy transcends right or wrong;</div>
          <div> Ideas moves around and evolve endlessly.</div>
        </div>
        <div className="div4 w-full px-4 py-6 flex items-center justify-center">
          <LightLogo className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8" />
        </div>
        <div className="div5 w-full px-4 py-4 flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
          <div>Safe</div>
        </div>
        <div className="div6 w-full px-4 py-4 flex flex-col items-center justify-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          <div>Secure</div>
        </div>
        <div className="div7 w-full px-4 py-6 flex items-center justify-center border-8 border-text">
          <Image src={'/socrat_face.png'} width={125} height={125} alt="Socrat"></Image>
        </div>
      </div>

      <Footer />
    </>
  )
}
