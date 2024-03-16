'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function CircleCodeInput() {
  const router = useRouter()
  const [code, setCode] = useState('')

  return (
    <>
      <div>Enter access code to join a private Socrat Circle</div>
      <div className="flex flex-row space-x-4 items-center justify-between">
        <input
          type="text"
          className="border-2 border-gray p-2 bg-transparent w-24 sm:w-28 md:w-32 lg:w-40 placeholder:text-xs sm:placeholder:text-base focus:outline-none text-xs sm:text-sm md:text-base text-center"
          placeholder="7xhdexyo"
          value={code}
          onChange={(e) => {
            setCode(e.target.value)
          }}
          maxLength={8}
          minLength={8}
        />
        <button
          className="btn btn-primary flex items-center justify-center"
          onClick={() => {
            // Validate code
            // Length 8, alphanumeric, case insensitive
            if (!/^[a-zA-Z0-9]{8}$/.test(code)) {
              return
            }

            router.push(`/circle/${code}`)
          }}
        >
          Join
        </button>
      </div>
    </>
  )
}

export default CircleCodeInput
