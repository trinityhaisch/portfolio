'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { Github, ExternalLink } from 'lucide-react'
import { ScrapbookCard, BackButton, Tape } from '@/components/scrapbook'

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    return (
      <div className="scrapbook-page pt-16 pb-20 flex items-center justify-center min-h-screen">
        <ScrapbookCard rotation={-1} tape className="p-8 text-center max-w-md">
          <h1 className="font-hand text-4xl text-brown-700 mb-4">Project Not Found</h1>
          <p className="font-sans text-brown-600 mb-6">This page got lost in the scrapbook...</p>
          <BackButton href="/projects" label="← All Projects" />
        </ScrapbookCard>
      </div>
    )
  }

  return (
    <div className="scrapbook-page pt-16 pb-20">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <BackButton href="/projects" label="← All Projects" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <ScrapbookCard rotation={-0.5} pin pinColor="red" className="p-6 md:p-10">
            <h1 className="font-hand text-4xl md:text-5xl text-brown-700 mb-4">{project.title}</h1>
            <p className="font-sans text-lg text-brown-600 mb-6 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag-sticker">{tag}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-brown-700 text-white rounded-sm font-hand-alt text-sm hover:bg-brown-600 transition-smooth shadow-paper-sm"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-sage-600 text-white rounded-sm font-hand-alt text-sm hover:bg-sage-700 transition-smooth shadow-paper-sm"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              )}
              {project.reportUrl && (
                <a
                  href={project.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-sticky-sage text-sage-700 rounded-sm font-hand-alt text-sm hover:bg-sage-200 transition-smooth shadow-paper-sm"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Report
                </a>
              )}
            </div>
          </ScrapbookCard>
        </motion.div>

        {project.sections && project.sections.length > 0 ? (
          <div className="space-y-8">
            {project.sections.map((section, i) => (
              <motion.section
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {section.type === 'text' && (
                  <ScrapbookCard rotation={i % 2 === 0 ? -1 : 1} tape className="p-6 md:p-8 bg-paper-lined">
                    <div className="font-sans text-brown-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </ScrapbookCard>
                )}
                {section.type === 'image' && (
                  <div className="relative" style={{ rotate: i % 2 === 0 ? '-1deg' : '1deg' }}>
                    <Tape color="cream" rotation={-3} className="-top-2 left-8" width="w-14" />
                    <div className="bg-white p-2 shadow-paper-lg max-w-2xl mx-auto">
                      <img
                        src={section.src}
                        alt={section.caption ?? ''}
                        className="w-full object-cover"
                      />
                      {section.caption && (
                        <p className="font-hand-alt text-brown-500 text-center mt-2 text-sm">{section.caption}</p>
                      )}
                    </div>
                  </div>
                )}
                {section.type === 'video' && (
                  <div className="polaroid max-w-3xl mx-auto">
                    <div className="relative w-full aspect-video overflow-hidden bg-sage-100">
                      <iframe
                        src={`https://www.youtube.com/embed/${section.youtubeId}`}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                    {section.caption && (
                      <p className="font-hand-alt text-brown-500 text-center mt-2 text-sm">{section.caption}</p>
                    )}
                  </div>
                )}
              </motion.section>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ScrapbookCard rotation={1} tape className="p-6 md:p-8 bg-paper-lined">
              <h2 className="font-hand text-2xl text-sage-700 mb-4">About This Project</h2>
              <div className="font-sans text-brown-600 leading-relaxed whitespace-pre-line">
                {project.details || project.description}
              </div>
            </ScrapbookCard>
          </motion.div>
        )}
      </div>
    </div>
  )
}
