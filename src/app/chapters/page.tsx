import NavBar from '@/components/NavBar'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Chapters | Socrat',
  description:
    'Learn about the philosophy of mind | Descarte dualism, parallelism, occasionalism, idealism, behaviorism, functionalism, and more',
}

function Page() {
  return (
    <>
      <NavBar />
    </>
  )
}

export default Page
