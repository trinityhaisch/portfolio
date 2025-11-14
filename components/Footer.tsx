'use client'

import { motion } from 'framer-motion'

/**
 * Footer component
 * Displays name, copyright, and contact email
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-lavender-50/30 border-t border-lavender-100 mt-auto"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Name */}
          <div className="text-gray-900 font-medium">
            Trinity Haisch
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            © {currentYear} All rights reserved.
          </div>

          {/* Contact Email */}
          <div>
            <a
              href="mailto:your.email@example.com"
              className="text-lavender-600 hover:text-lavender-700 font-medium transition-smooth"
            >
              trinityhaisch@gmail.com
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

