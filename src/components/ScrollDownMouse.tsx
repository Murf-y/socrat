'use client'

import React from 'react'
import Image from 'next/image'

function ScrollDownMouse() {
  return (
    <Image
      onClick={() => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
      }}
      tabIndex={0}
      src="/scroll-bar.png"
      className="w-8 sm:w-10 md:w-12 cursor-pointer"
      width={64}
      height={64}
      alt="Picture of the author"
    />
  )
}

export default ScrollDownMouse
