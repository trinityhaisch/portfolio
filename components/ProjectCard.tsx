'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/data/projects'

/**
 * Project card component
 * Displays a project preview with image, title, description, and tags
 */
interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-smooth border border-gray-100 h-full flex flex-col"
      >
        {/* Project Image */}
          {project.image && project.image.length > 0 && (
          <div className="relative h-48 overflow-hidden bg-lavender-100">
          <img
            src={project.image[0]} // show only the first image
            alt={project.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
        </div>
        )}

        {/* Project Content */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-lavender-100 text-lavender-700 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 text-gray-500 text-xs">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

