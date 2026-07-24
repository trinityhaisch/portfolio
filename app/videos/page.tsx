'use client'

import { motion } from 'framer-motion'
import { videoSections } from '@/data/videos'
import { StickyNote, FloatingDecoration, Tape } from '@/components/scrapbook'
import { fadeInUp } from '@/components/scrapbook/animations'

export default function VideosPage() {
  return (
    <div className="scrapbook-page pt-16 pb-20">
      <FloatingDecoration className="absolute top-24 left-10 text-3xl opacity-40" rotation={-10} delay={0}>
        🎬
      </FloatingDecoration>
      <FloatingDecoration className="absolute bottom-20 right-16 text-2xl opacity-35" rotation={8} delay={1}>
        ★
      </FloatingDecoration>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-hand text-5xl md:text-6xl text-brown-700 mb-3 rotate-[-1deg]">
            Videos & Social
          </h1>
          <p className="font-hand-alt text-lg text-sage-600">
            Short films, social media content, and creative projects
          </p>
        </motion.div>

        {videoSections.map((section, sIdx) => (
          <div key={section.section} className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-hand text-3xl text-sage-700 mb-8 rotate-[-1deg]"
            >
              {section.section}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {section.videos.map((video, vIdx) => {
                const rotation = (vIdx % 2 === 0 ? -2 : 2) + (sIdx % 2 === 0 ? 0 : 1)
                const displayTitle = video.title || 'Untitled'
                return (
                  <motion.div
                    key={video.id}
                    id={video.id}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={vIdx}
                    className="scroll-mt-24"
                  >
                    <div className="relative" style={{ rotate: `${rotation}deg` }}>
                      <Tape
                        color={vIdx % 3 === 0 ? 'cream' : vIdx % 3 === 1 ? 'pink' : 'sage'}
                        rotation={-3}
                        className="-top-2 left-8"
                        width="w-14"
                      />
                      <div className="polaroid">
                        <div className="relative w-full aspect-video overflow-hidden bg-sage-100">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.youtubeUrl}`}
                            title={displayTitle}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                          />
                        </div>
                        <div className="mt-3 px-1">
                          <h3 className="font-hand text-xl text-brown-700">{displayTitle}</h3>
                          {video.subtitle && (
                            <p className="font-hand-alt text-sm text-brown-500 mt-1">{video.subtitle}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mt-8"
        >
          <StickyNote color="yellow" rotation={1} className="text-center">
            <p className="font-hand text-xl text-brown-700 mb-1">Find me online</p>
            <p className="font-hand-alt text-sm text-brown-500">
              More content on YouTube, Instagram & TikTok
            </p>
          </StickyNote>
        </motion.div>
      </div>
    </div>
  )
}
