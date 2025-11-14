'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

/**
 * Home page component
 * Displays a brief introduction and featured projects
 */
export default function Home() {
  // Get the first 3 projects as featured projects
  const featuredProjects = projects.slice(0, 3)

  // Animation variants for fade-in effect
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-4"
          >
            Trinity Haisch
          </motion.h1>
          
          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-sans font-medium text-lavender-600 mb-6"
          >
            Mechanical engineering student at Olin College of Engineering
          </motion.h2>
          
          {/* Intro sentence */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            See projects below!
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-lavender-50/30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          {/* View All Projects Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-block px-8 py-3 bg-lavender-600 text-white rounded-lg font-medium hover:bg-lavender-700 transition-smooth shadow-lg hover:shadow-xl"
            >
              View All Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

