"use client"
import { videoSections } from "@/data/videos"

export default function VideosPage() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 border-r bg-white p-6 sticky top-0 h-screen overflow-auto">
        <h2 className="text-xl font-bold mb-6">Videos</h2>
        
        {videoSections.map((section) => (
          <div key={section.section} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {section.section}
            </h3>

            <ul className="space-y-1 ml-2 border-l pl-3 border-gray-300">
              {section.videos.map((v) => (
                <li key={v.id}>
                  <a
                    href={`#${v.id}`}
                    className="text-sm text-lavender-700 hover:underline"
                  >
                    {v.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 space-y-20">
        {videoSections.flatMap((section) =>
          section.videos.map((v) => (
            <section
              key={v.id}
              id={v.id}
              className="scroll-mt-24"
            >
              <h2 className="text-3xl font-bold text-gray-900">{v.title}</h2>
              <p className="text-gray-600 mb-4">{v.subtitle}</p>

              <div className="flex justify-center">
                <div className="relative w-full max-w-3xl aspect-video rounded-xl shadow-lg overflow-hidden">
                  <iframe
                    src={v.youtubeUrl}
                    title={v.title}
                    // No autoplay: we omit autoplay query params and do not request autoplay permission
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </section>
          ))
        )}
      </main>
    </div>
  )
}
