'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { floatTransition, idleFloat } from './animations'

interface FloatingDecorationProps {
  children: ReactNode
  className?: string
  delay?: number
  rotation?: number
}

export default function FloatingDecoration({
  children,
  className = '',
  delay = 0,
  rotation = 0,
}: FloatingDecorationProps) {
  return (
    <motion.div
      className={`pointer-events-none select-none ${className}`}
      style={{ rotate: rotation }}
      animate={idleFloat}
      transition={{ ...floatTransition, delay }}
      aria-hidden="true"
    >
      {children}
    </motion.div>
  )
}
