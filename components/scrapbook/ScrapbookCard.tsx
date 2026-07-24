'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import PushPin from './PushPin'
import Tape from './Tape'

interface ScrapbookCardProps {
  children: ReactNode
  rotation?: number
  className?: string
  pin?: boolean
  pinColor?: 'red' | 'green' | 'blue' | 'yellow'
  tape?: boolean
  tapeColor?: 'cream' | 'sage' | 'pink' | 'yellow'
}

export default function ScrapbookCard({
  children,
  rotation = 0,
  className = '',
  pin = false,
  pinColor = 'red',
  tape = false,
  tapeColor = 'cream',
}: ScrapbookCardProps) {
  return (
    <motion.div
      className={`relative bg-paper-cream shadow-paper rounded-sm ${className}`}
      style={{ rotate: rotation }}
    >
      {pin && <PushPin color={pinColor} className="-top-2 left-1/2 -translate-x-1/2" />}
      {tape && <Tape color={tapeColor} rotation={-3} className="-top-3 left-6" width="w-14" />}
      {children}
    </motion.div>
  )
}
