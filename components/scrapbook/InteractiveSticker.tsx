'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'
import { floatTransition, hoverLift, idleFloat, tapPress } from './animations'

interface InteractiveStickerProps {
  href?: string
  onClick?: () => void
  download?: string
  external?: boolean
  children: ReactNode
  className?: string
  rotation?: number
  floatDelay?: number
  ariaLabel: string
}

export default function InteractiveSticker({
  href,
  onClick,
  download,
  external,
  children,
  className = '',
  rotation = 0,
  floatDelay = 0,
  ariaLabel,
}: InteractiveStickerProps) {
  const motionProps = {
    className: `cursor-pointer inline-block ${className}`,
    style: { rotate: rotation },
    animate: idleFloat,
    transition: { ...floatTransition, delay: floatDelay },
    whileHover: hoverLift,
    whileTap: tapPress,
  }

  const content = (
    <motion.div {...motionProps} aria-label={ariaLabel}>
      {children}
    </motion.div>
  )

  if (href) {
    if (download) {
      return (
        <a href={href} download={download} aria-label={ariaLabel}>
          {content}
        </a>
      )
    }
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
          {content}
        </a>
      )
    }
    return (
      <Link href={href} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className="border-0 bg-transparent p-0">
      {content}
    </button>
  )
}
