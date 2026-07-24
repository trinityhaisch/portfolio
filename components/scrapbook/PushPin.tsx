'use client'

interface PushPinProps {
  color?: 'red' | 'green' | 'blue' | 'yellow'
  className?: string
}

const colors = {
  red: 'bg-pin-red',
  green: 'bg-pin-green',
  blue: 'bg-pin-blue',
  yellow: 'bg-pin-yellow',
}

export default function PushPin({ color = 'red', className = '' }: PushPinProps) {
  return (
    <div
      className={`absolute w-4 h-4 rounded-full ${colors[color]} shadow-pin pointer-events-none z-10 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute top-0.5 left-1 w-1.5 h-1.5 rounded-full bg-white/40" />
    </div>
  )
}
