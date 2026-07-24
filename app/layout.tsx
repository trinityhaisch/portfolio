import type { Metadata } from 'next'
import './globals.css'
import ScrapbookNav from '@/components/ScrapbookNav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Trinity Haisch | Engineer's Scrapbook",
  description: 'Personal engineering portfolio — projects, videos, and creative work by Trinity Haisch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ScrapbookNav />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
