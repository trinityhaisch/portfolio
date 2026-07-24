import { BackButton } from '@/components/scrapbook'
import { ScrapbookCard } from '@/components/scrapbook'

export default function NotFound() {
  return (
    <div className="scrapbook-page flex items-center justify-center min-h-screen pt-16">
      <ScrapbookCard rotation={-2} tape className="p-10 text-center max-w-md">
        <h1 className="font-hand text-7xl text-brown-700 mb-2">404</h1>
        <h2 className="font-hand text-2xl text-sage-700 mb-4">Page Not Found</h2>
        <p className="font-sans text-brown-600 mb-8">
          This page got torn out of the scrapbook...
        </p>
        <BackButton />
      </ScrapbookCard>
    </div>
  )
}
