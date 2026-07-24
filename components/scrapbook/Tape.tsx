'use client'

interface TapeProps {
  color?: 'cream' | 'sage' | 'pink' | 'yellow'
  rotation?: number
  className?: string
  width?: string
}

const colors = {
  cream: 'bg-tape-cream/70 border-tape-cream',
  sage: 'bg-sage-200/60 border-sage-300/50',
  pink: 'bg-pink-200/60 border-pink-300/50',
  yellow: 'bg-yellow-200/60 border-yellow-300/50',
}

export default function Tape({
  color = 'cream',
  rotation = -3,
  className = '',
  width = 'w-16',
}: TapeProps) {
  return (
    <div
      className={`absolute ${width} h-6 ${colors[color]} border backdrop-blur-[1px] shadow-sm pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
      aria-hidden="true"
    />
  )
}
