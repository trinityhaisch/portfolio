'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/data/projects'
import { ScrapbookCard } from '@/components/scrapbook'
import { hoverLift, tapPress } from '@/components/scrapbook/animations'

interface ProjectCardProps {
  project: Project
  index?: number
}

const rotations = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1.5, -1, 2]

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const rotation = rotations[index % rotations.length]

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div whileHover={hoverLift} whileTap={tapPress}>
        <ScrapbookCard
          rotation={rotation}
          tape
          tapeColor={index % 2 === 0 ? 'cream' : 'sage'}
          className="overflow-hidden h-full flex flex-col"
        >
          {project.image && project.image.length > 0 && (
            <div className="relative h-44 overflow-hidden bg-sage-100 m-3 mb-0">
              <img
                src={project.image[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-5 pt-4 flex-grow flex flex-col">
            <h3 className="font-hand text-2xl text-brown-700 mb-2">{project.title}</h3>
            <p className="font-sans text-sm text-brown-600 mb-4 flex-grow line-clamp-3 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="tag-sticker" style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * (i + 1)}deg` }}>
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="font-hand-alt text-xs text-brown-500 self-center">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </ScrapbookCard>
      </motion.div>
    </Link>
  )
}
