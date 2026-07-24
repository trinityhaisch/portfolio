'use client'

interface ScrapbookTitleProps {
  name?: string
  className?: string
}

const letterStyles = [
  'font-hand text-sage-600 rotate-[-4deg]',
  'font-hand-alt text-brown-600 rotate-[3deg]',
  'font-hand text-pink-500 rotate-[-2deg]',
  'font-hand-alt text-sage-700 rotate-[2deg]',
  'font-hand text-yellow-600 rotate-[-3deg]',
  'font-hand-alt text-brown-700 rotate-[1deg]',
  'font-hand text-sage-500 rotate-[-1deg]',
  'font-hand-alt text-pink-400 rotate-[4deg]',
  'font-hand text-brown-500 rotate-[-2deg]',
  'font-hand-alt text-sage-600 rotate-[3deg]',
  'font-hand text-yellow-500 rotate-[-4deg]',
  'font-hand-alt text-sage-700 rotate-[1deg]',
  'font-hand text-pink-500 rotate-[-3deg]',
  'font-hand-alt text-brown-600 rotate-[2deg]',
  'font-hand text-sage-500 rotate-[-1deg]',
  'font-hand-alt text-yellow-600 rotate-[3deg]',
  'font-hand text-brown-700 rotate-[-2deg]',
]

export default function ScrapbookTitle({
  name = "Trinity's Scrapbook",
  className = '',
}: ScrapbookTitleProps) {
  return (
    <h1 className={`flex flex-wrap justify-center gap-0.5 md:gap-1 ${className}`}>
      {name.split('').map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={`inline-block text-3xl md:text-5xl lg:text-6xl font-bold leading-none ${
            letterStyles[i % letterStyles.length]
          } ${char === ' ' ? 'w-3 md:w-5' : ''}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  )
}
