'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { hoverLift, tapPress } from './animations'
import Tape from './Tape'

interface PhotoCutoutProps {
  src: string
  alt: string
  href?: string
  rotation?: number
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'w-32 h-40 md:w-36 md:h-44',
  md: 'w-40 h-48 md:w-48 md:h-56',
  lg: 'w-48 h-56 md:w-56 md:h-64',
}

export default function PhotoCutout({
  src,
  alt,
  href,
  rotation = -3,
  className = '',
  size = 'md',
}: PhotoCutoutProps) {
  const photo = (
    <motion.div
      className={`relative ${sizes[size]} ${href ? 'cursor-pointer' : ''} ${className}`}
      style={{ rotate: rotation }}
      whileHover={href ? hoverLift : undefined}
      whileTap={href ? tapPress : undefined}
    >
      <Tape color="cream" rotation={-5} className="-top-2 left-4" width="w-12" />
      <div className="w-full h-full bg-white p-1.5 shadow-paper-lg photo-cutout-edge">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('/images/')
    const wrapper = isExternal ? (
      <a href={href} aria-label={`View ${alt}`} target={href.endsWith('.pdf') ? '_blank' : undefined} rel="noopener noreferrer">
        {photo}
      </a>
    ) : (
      <Link href={href} aria-label={`View ${alt}`}>
        {photo}
      </Link>
    )
    return wrapper
  }

  return photo
}
