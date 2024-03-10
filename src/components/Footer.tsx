import React from 'react'
import DarkLogo from './Images/DarkLogo'

function Footer() {
  return (
    <footer className="w-full h-24 bg-background text-text  border-2 border-gray py-2 sm:py-4 px-8 sm:px-16 md:px-20">
      <div className="w-full flex flex-col sm:flex-row justify-between">
        <DarkLogo className="w-20 h-5 sm:w-28 sm:h-7 md:w-32 md:h-8" />
        <div className="text-xs sm:text-sm md:text-base font-bold">The right way to learn</div>
      </div>
      <div className="w-full text-center text-xs sm:text-sm md:text-base mt-2">
        © 2024 Socrat, Inc. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
