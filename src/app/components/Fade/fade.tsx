'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'
type Variant = 'list' | 'normal' | 'heading'

export interface FadeProps {
  children: ReactNode
  variant?: Variant
  className?: string
  childClassNames?: string | string[]
  threshold?: number
  direction?: Direction
  scaleTo?: number
  triggerOnce?: boolean
  disable?: boolean
  duration?: number
  staggerChildren?: number
  offset?: number
  scaleFrom?: number
  popIn?: boolean
  delay?: number
  displayChildrenInline?: boolean
}

const easing = [0.22, 0.42, 0.36, 0.93]

export const FadeIn = ({
  children,
  className,
  direction = 'up',
  threshold = 0.2,
  duration = 0.8,
  offset = 25,
  scaleFrom,
  scaleTo,
  popIn,
  delay,
  triggerOnce = true,
}: FadeProps) => {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: threshold, once: triggerOnce })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  let variants = {}

  const xAxes = ['left', 'right']
  const yAxes = ['up', 'down']

  variants = {
    hidden: {
      opacity: 0,
      ...(xAxes.includes(direction) && {
        x: direction === 'right' ? offset : -offset,
      }),
      ...(yAxes.includes(direction) && {
        y: direction === 'up' ? offset : -offset,
      }),
      ...(scaleFrom && { scale: scaleFrom }),
    },
    visible: {
      opacity: 1,
      ...(xAxes.includes(direction) && { x: 0 }),
      ...(yAxes.includes(direction) && { y: 0 }),
      ...(scaleFrom && { scale: scaleTo || 1 }),
      ...(popIn && {
        scale: [0.98, 1.02, 0.98, 1],
        opacity: [0, 1, 1, 1],
      }),
      transition: {
        duration,
        ease: easing,
        ...(popIn && { times: [0, 0.3, 0.7, 1] }),
        ...(delay && { delay }),
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

FadeIn.displayName = 'FadeIn'
