"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  className?: string
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, className = "", suffix = "", duration = 2 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value

      // First three decimals for percentages
      const decimals = value % 1 !== 0 ? 1 : 0
      const prefix = value >= 1000 ? "" : ""

      // if value is less than 100, increment by 1
      // if value is between 100 and 1000, increment by 5
      // if value is greater than 1000, increment by 25
      const incrementSize = value < 100 ? 1 : value < 1000 ? 5 : 25

      // Duration should be proportional to the value
      const stepTime = Math.abs(Math.floor((duration * 1000) / (end / incrementSize)))

      const timer = setInterval(() => {
        start += incrementSize
        setCount(start)
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        }
      }, stepTime)

      return () => {
        clearInterval(timer)
      }
    }
  }, [inView, value, duration])

  return (
    <motion.span ref={ref} className={className}>
      {count.toLocaleString(undefined, {
        minimumFractionDigits: value % 1 !== 0 ? 1 : 0,
        maximumFractionDigits: value % 1 !== 0 ? 1 : 0,
      })}
      {suffix}
    </motion.span>
  )
}

