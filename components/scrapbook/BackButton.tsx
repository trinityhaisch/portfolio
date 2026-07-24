'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { hoverLift, tapPress } from './animations'
import PushPin from './PushPin'

interface BackButtonProps {
  href?: string
  label?: string
}

export default function BackButton({ href = '/', label = '← Home' }: BackButtonProps) {
  return (
    <Link href={href} className="inline-block">
      <motion.div
        className="relative bg-sticky-yellow shadow-paper px-5 py-2.5 font-hand text-lg text-brown-700"
        style={{ rotate: -2 }}
        whileHover={hoverLift}
        whileTap={tapPress}
      >
        <PushPin color="red" className="-top-2 right-3" />
        {label}
      </motion.div>
    </Link>
  )
}
