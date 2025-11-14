'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'


/**
 * Dynamic project detail page
 * Displays full information about a specific project
 */
export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Find the project by ID
  const project = projects.find(p => p.id === params.id)

  // If project not found, show 404 message
  if (!project) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link
            href="/projects"
            className="inline-block px-6 py-3 bg-lavender-600 text-white rounded-lg hover:bg-lavender-700 transition-smooth"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-lavender-600 hover:text-lavender-700 font-medium transition-smooth"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-lavender-100 text-lavender-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-smooth"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-lavender-600 text-white rounded-lg hover:bg-lavender-700 transition-smooth"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Website
              </a>
            )}
            {project.reportUrl && (
              <a
                href={project.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-lavender-100 text-lavender-700 rounded-lg hover:bg-lavender-200 transition-smooth"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Report
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Images Carousel */}
{project.image && project.image.length > 0 && (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="mb-8 rounded-lg overflow-hidden shadow-lg"
  >
    <Swiper
      modules={[Navigation, EffectFade]}
      navigation
      effect="fade"
      fadeEffect={{ crossFade: true }}
      slidesPerView={1}
      loop
      className="rounded-lg"
    >
      {project.image.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`${project.title} image ${index + 1}`}
            className="w-full h-auto object-cover transition-opacity duration-500"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
)}

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="prose prose-lg max-w-none"
        >
          <div className="bg-lavender-50/50 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              About This Project
            </h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {project.details || project.description}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

