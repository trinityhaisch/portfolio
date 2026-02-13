'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

/**
 * Navigation bar component
 * Displays navigation links and highlights the active page
 */
export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/Video', label: 'Video/ Social Media' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-smooth ${
        isScrolled
          ? 'bg-sage-50/95 backdrop-blur-sm shadow-sm'
          : 'bg-sage-50/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="text-xl font-display font-bold text-gray-900 hover:text-sage-600 transition-smooth"
          >
            Trinity Haisch
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-smooth ${
                    isActive
                      ? 'text-lavender-600'
                      : 'text-gray-700 hover:text-sage-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sage-600"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

