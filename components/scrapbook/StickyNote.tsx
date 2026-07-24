'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Tape from './Tape'
import { hoverLift, tapPress } from './animations'

interface StickyNoteProps {
  children: ReactNode
  color?: 'yellow' | 'pink' | 'sage' | 'blue'
  rotation?: number
  className?: string
  showTape?: boolean
  onClick?: () => void
}

const colors = {
  yellow: 'bg-sticky-yellow',
  pink: 'bg-sticky-pink',
  sage: 'bg-sticky-sage',
  blue: 'bg-sticky-blue',
}

export default function StickyNote({
  children,
  color = 'yellow',
  rotation = -2,
  className = '',
  showTape = true,
  onClick,
}: StickyNoteProps) {
  return (
    <motion.div
      className={`relative ${colors[color]} shadow-paper p-4 md:p-5 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{ rotate: rotation }}
      whileHover={onClick ? hoverLift : undefined}
      whileTap={onClick ? tapPress : undefined}
      onClick={onClick}
    >
      {showTape && <Tape color="cream" rotation={-2} className="-top-3 left-1/2 -translate-x-1/2" width="w-14" />}
      {children}
    </motion.div>
  )
}
