'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Chapter {
  name: string
  link: string
  isUp: boolean
  location?: string
  height?: string
}

function Chapter({ chapter }: { chapter: Chapter }) {
  if (chapter.isUp) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Link
          className="text-xs md:text-sm lg:text-lg underline font-semibold "
          href={`/chapters/${chapter.link}`}
        >
          {chapter.name}
        </Link>
        <div className="w-2 h-2 md:w-4 md:h-4 bg-text transform rotate-45" />
        <div className="bg-text w-[2px] md:w-1" style={{ height: chapter.height }} />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="bg-text w-[2px] md:w-1" style={{ height: chapter.height }} />
        <div className="w-2 h-2 md:w-4 md:h-4 bg-text transform rotate-45" />
        <Link
          className="text-xs md:text-sm lg:text-lg underline font-semibold"
          href={`/chapters/${chapter.link}`}
        >
          {chapter.name}
        </Link>
      </div>
    )
  }
}

export default function Timeline() {
  const [chapters, setChapters] = useState<Chapter[]>([
    { name: 'Idealism', isUp: true, location: '0%', height: '4rem', link: 'idealism' },
    { name: 'Occasionalism', isUp: false, location: '12%', height: '4rem', link: 'occasionalism' },
    { name: 'Parallelism', isUp: false, location: '30%', height: '5rem', link: 'parallelism' },
    { name: 'Substance Dualism', isUp: true, location: '45%', height: '4rem', link: 'dualism' },
    {
      name: 'Epiphenomenalism',
      isUp: false,
      location: '55%',
      height: '4rem',
      link: 'epiphenomenalism',
    },
    { name: 'Functionalism', isUp: true, location: '68%', height: '5rem', link: 'functionalism' },
    { name: 'Behaviorism', isUp: true, location: '85%', height: '4rem', link: 'behaviorism' },
    { name: 'Materialism', isUp: false, location: '90%', height: '5rem', link: 'materialism' },
  ])

  useEffect(() => {
    const width = window.innerWidth
    if (!width) return

    if (width < 640) {
      setChapters([
        { name: 'Idealism', isUp: true, location: '0%', height: '2.5rem', link: 'idealism' },
        {
          name: 'Occasionalism',
          isUp: false,
          location: '7%',
          height: '2.5rem',
          link: 'occasionalism',
        },
        {
          name: 'Parallelism',
          isUp: false,
          location: '25%',
          height: '5.5rem',
          link: 'parallelism',
        },
        { name: 'Dualism', isUp: true, location: '35%', height: '2.5rem', link: 'dualism' },
        {
          name: 'Epiphenoism',
          isUp: false,
          location: '45%',
          height: '2.5rem',
          link: 'epiphenomenalism',
        },
        {
          name: 'Functionalism',
          isUp: true,
          location: '60%',
          height: '4.5rem',
          link: 'functionalism',
        },
        { name: 'Behaviorism', isUp: true, location: '82%', height: '2.5rem', link: 'behaviorism' },
        {
          name: 'Materialism',
          isUp: false,
          location: '87%',
          height: '4.5rem',
          link: 'materialism',
        },
      ])
    }
  }, [])

  return (
    <div className="w-full flex justify-center items-center">
      <div className="h-1 bg-text w-11/12 relative">
        {chapters.map((chapter: Chapter, i: number) => (
          <div
            className={clsx('absolute', {
              'bottom-0': chapter.isUp,
              'top-0': !chapter.isUp,
            })}
            style={{ left: `calc(${chapter.location} - 0.5rem)` }}
            key={i}
          >
            <Chapter chapter={chapter} />
          </div>
        ))}
      </div>
    </div>
  )
}
