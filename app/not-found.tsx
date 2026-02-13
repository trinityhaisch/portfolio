import Link from 'next/link'

/**
 * 404 Not Found page
 * Shown when a route doesn't exist
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sage-50/30">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-gray-900 mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-smooth shadow-lg hover:shadow-xl"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

