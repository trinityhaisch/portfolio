'use client'

import { usePathname } from 'next/navigation'
import { BackButton } from '@/components/scrapbook'

export default function ScrapbookNav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  if (isHome) return null

  return (
    <nav className="fixed top-4 left-4 z-50">
      <BackButton />
    </nav>
  )
}
