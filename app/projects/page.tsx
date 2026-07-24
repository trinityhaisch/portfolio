'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'
import { FloatingDecoration } from '@/components/scrapbook'
import { fadeInUp } from '@/components/scrapbook/animations'

export default function ProjectsPage() {
  return (
    <div className="scrapbook-page pt-16 pb-20">
      <FloatingDecoration className="absolute top-20 right-16 text-3xl opacity-40" rotation={12} delay={0}>
        ✦
      </FloatingDecoration>
      <FloatingDecoration className="absolute bottom-40 left-12 text-2xl opacity-35" rotation={-6} delay={2}>
        🍃
      </FloatingDecoration>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h1 className="font-hand text-5xl md:text-6xl text-brown-700 mb-3 rotate-[-1deg]">
            My Projects
          </h1>
          <p className="font-hand-alt text-lg text-sage-600 max-w-xl mx-auto">
            A collection of things I&apos;ve built, broken, and learned from
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
