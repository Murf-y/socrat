'use client'

import { Popover } from '@headlessui/react'
import DarkLogo from './Images/DarkLogo'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { MovingButton } from './MovingBorder'

const CODE_LENGTH = 8

function generateRandomCode() {
  return Math.random()
    .toString(36)
    .substring(2, 2 + CODE_LENGTH)
}

interface NavBarProps {
  showCreateCircle?: boolean
}

function NavBar({ showCreateCircle = true }: NavBarProps) {
  const router = useRouter()
  const navigateToCircle = () => {
    const code = generateRandomCode()
    router.push(`/circle/${code.toLowerCase()}`)
  }

  return (
    <div className="bg-background z-10 flex justify-between items-center py-2 sm:py-4 border-b-2 border-gray w-full px-8 sm:px-16 md:px-20">
      <Link href="/">
        <DarkLogo className="w-20 h-5 sm:w-24 sm:h-7 md:w-32 md:h-8" />
      </Link>
      <div className="space-x-4 sm:space-x-8 md:space-x-12 items-center hidden sm:flex sm:text-base md:text-lg">
        <Link href="/chapters" className="font-semibold">
          Chapters
        </Link>

        {showCreateCircle && (
          <MovingButton
            onClick={navigateToCircle}
            borderRadius="0rem"
            className="bg-background text-text font-semibold border-lightgray hover:bg-text hover:text-white text-nowrap"
          >
            Create Circle
          </MovingButton>
        )}

        <UserButton />
      </div>

      <div className="flex sm:hidden flex-row items-center justify-center space-x-2">
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
              <Link
                href="/chapters"
                className="font-semibold hover:bg-lightgray hover:bg-opacity-35 p-2"
              >
                Chapters
              </Link>
              {showCreateCircle && (
                <MovingButton
                  onClick={navigateToCircle}
                  borderRadius="0rem"
                  className="bg-background text-text font-semibold border-lightgray hover:bg-text hover:text-white text-nowrap"
                >
                  Create Circle
                </MovingButton>
              )}
              <div className="flex flex-row w-full justify-between">
                <UserButton />
                <p className="text-xs font-semibold text-text">Profile</p>
              </div>
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  )
}

export default NavBar
