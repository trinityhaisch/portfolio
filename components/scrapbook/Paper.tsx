'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface PaperProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  variant?: 'cream' | 'lined' | 'notebook' | 'kraft'
  rotation?: number
  className?: string
  shadow?: 'sm' | 'md' | 'lg'
}

const variants = {
  cream: 'bg-paper-cream',
  lined: 'bg-paper-lined bg-paper-cream',
  notebook: 'bg-paper-notebook bg-paper-cream',
  kraft: 'bg-paper-kraft',
}

const shadows = {
  sm: 'shadow-paper-sm',
  md: 'shadow-paper',
  lg: 'shadow-paper-lg',
}

export default function Paper({
  children,
  variant = 'cream',
  rotation = 0,
  className = '',
  shadow = 'md',
  ...props
}: PaperProps) {
  return (
    <motion.div
      className={`rounded-sm ${variants[variant]} ${shadows[shadow]} ${className}`}
      style={{ rotate: rotation }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
