import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal engineering portfolio showcasing projects and experience',
}

/**
 * Root layout component
 * Wraps all pages with Navbar and Footer
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

