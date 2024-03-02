'use client'

import { Menu, Popover } from '@headlessui/react'
import DarkLogo from './Images/DarkLogo'
import Link from 'next/link'

function NavBar() {
  return (
    <div className="bg-background z-10 flex justify-between items-center py-2 sm:py-4 border-b-2 border-gray w-full px-8 sm:px-16 md:px-20">
      <DarkLogo className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8" />
      <div className="space-x-4 sm:space-x-8 md:space-x-12 items-center hidden sm:flex sm:text-base md:text-lg">
        <Link href="#" className="font-semibold">
          Chapters
        </Link>
        <Link href="/signin" className="font-semibold">
          Log In
        </Link>
        <Link href="/signup" className="btn btn-secondary">
          Sign Up
        </Link>
      </div>

      <div className="flex sm:hidden">
        <Popover className="relative">
          <Popover.Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </Popover.Button>

          <Popover.Panel className="absolute bg-background border-2 border-lightgray border-opacity-35 w-fit h-fit py-6 px-6 z-20 right-0">
            <div className="flex flex-col w-36 space-y-4">
              <Link href="#" className="font-semibold hover:bg-lightgray hover:bg-opacity-35 p-2">
                Chapters
              </Link>
              <Link
                href="/signin"
                className="font-semibold hover:bg-lightgray hover:bg-opacity-35 p-2"
              >
                Log In
              </Link>
              <Link href="/signup" className="btn btn-secondary">
                Sign Up
              </Link>
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  )
}

export default NavBar
