'use client'
import React from 'react'

interface ClockProps {
  className?: string
}

function Clock(props: ClockProps) {
  // format HH:MM in 24-hour time
  const [time, setTime] = React.useState(new Date().toTimeString().slice(0, 5))

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toTimeString().slice(0, 5))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return <div className={props.className}>{time}</div>
}

export default Clock
