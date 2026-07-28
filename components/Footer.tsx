'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-sage-200/50 mt-auto bg-paper-cream/80"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <span className="font-hand text-lg text-brown-600">Trinity Haisch</span>
          <span className="font-hand-alt text-sm text-brown-500">
            © {currentYear}
          </span>
          <a
            href="mailto:trinityhaisch@gmail.com"
            className="font-hand-alt text-sage-600 hover:text-sage-700 transition-smooth text-sm"
          >
            trinityhaisch@gmail.com
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
