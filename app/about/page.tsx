'use client'

import { motion } from 'framer-motion'
import { FileText, Linkedin, Mail } from 'lucide-react'
import {
  StickyNote,
  ScrapbookCard,
  Tape,
  PushPin,
  FloatingDecoration,
} from '@/components/scrapbook'
import { fadeInUp, staggerContainer } from '@/components/scrapbook/animations'

const skills = ['CAD', 'Python', 'Arduino', 'MATLAB', 'OpenCV', 'KiCad', 'Integration', 'Biomedical Design']
const interests = ['Short films', 'Social media', 'Drawing', 'Painting', 'Clothing design', 'Fire spinning']
const funFacts = [
  'I spin fire in my free time',
  'I love the intersection of mech, software & biology',
  'I design my own clothes',
  'Filmmaking is one of my favorite creative outlets',
]

export default function AboutPage() {
  return (
    <div className="scrapbook-page pt-16 pb-20">
      <FloatingDecoration className="absolute top-24 right-10 text-3xl opacity-40" rotation={10} delay={0}>
        ✿
      </FloatingDecoration>
      <FloatingDecoration className="absolute bottom-32 left-8 text-2xl opacity-40" rotation={-8} delay={1.5}>
        ★
      </FloatingDecoration>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header with photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-hand text-5xl md:text-6xl text-brown-700 mb-8 rotate-[-1deg]">
            About Me
          </h1>

          <div className="flex justify-center gap-6 flex-wrap">
            <div className="relative" style={{ rotate: '-4deg' }}>
              <Tape color="cream" rotation={-3} className="-top-2 left-4" width="w-14" />
              <div className="w-36 h-44 bg-white p-1.5 shadow-paper-lg photo-cutout-edge">
                <img src="/images/websitephoto.png" alt="Trinity Haisch" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Introduction */}
          <motion.div variants={fadeInUp} custom={0}>
            <ScrapbookCard rotation={-1} tape className="p-6 md:p-8">
              <h2 className="font-hand text-3xl text-sage-700 mb-4">Hello!</h2>
              <p className="font-sans text-brown-600 leading-relaxed mb-4">
                I&apos;m a student at Olin College of Engineering passionate about mechanical and biomedical
                engineering. I enjoy using creativity to build something unique or solve problems.
                I&apos;m very interested in the intersection of mechanical, software, and biology.
              </p>
              <p className="font-sans text-brown-600 leading-relaxed">
                Outside of engineering, I like to produce short films and work in social media.
                I also draw, paint, design clothes, and spin fire.
              </p>
            </ScrapbookCard>
          </motion.div>

          {/* Education & Experience row */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} custom={1}>
              <StickyNote color="sage" rotation={-2} className="h-full">
                <PushPin color="green" className="-top-2 right-4" />
                <h2 className="font-hand text-2xl text-sage-700 mb-3">Education</h2>
                <p className="font-sans text-sm text-brown-600 leading-relaxed">
                  <strong className="text-brown-700">Olin College of Engineering</strong>
                  <br />
                  Mechanical Engineering
                </p>
              </StickyNote>
            </motion.div>

            <motion.div variants={fadeInUp} custom={2}>
              <StickyNote color="yellow" rotation={2} className="h-full">
                <h2 className="font-hand text-2xl text-brown-700 mb-3">Experience</h2>
                <p className="font-sans text-sm text-brown-600 leading-relaxed">
                  Hands-on engineering projects spanning biomedical devices, robotics,
                  computer vision, and product design — built through coursework and personal exploration.
                </p>
              </StickyNote>
            </motion.div>
          </div>

          {/* Skills as stickers */}
          <motion.div variants={fadeInUp} custom={3}>
            <ScrapbookCard rotation={1} pin pinColor="red" className="p-6 md:p-8">
              <h2 className="font-hand text-3xl text-sage-700 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="tag-sticker text-sm px-3 py-1"
                    style={{ rotate: `${(i % 3 - 1) * 3}deg` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ScrapbookCard>
          </motion.div>

          {/* Interests
          <motion.div variants={fadeInUp} custom={4}>
            <StickyNote color="pink" rotation={-1} className="p-6">
              <h2 className="font-hand text-3xl text-pink-600 mb-4">Interests</h2>
              <div className="flex flex-wrap gap-3">
                {interests.map((item, i) => (
                  <span key={item} className="font-hand-alt text-brown-600 text-lg" style={{ rotate: `${i % 2 === 0 ? -2 : 2}deg` }}>
                    {item}{i < interests.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>
            </StickyNote>
          </motion.div> */}

          {/* Fun facts
          <motion.div variants={fadeInUp} custom={5}>
            <ScrapbookCard rotation={-1.5} tape tapeColor="pink" className="p-6 md:p-8 bg-paper-lined">
              <h2 className="font-hand text-3xl text-brown-700 mb-4">Fun Facts</h2>
              <ul className="space-y-2">
                {funFacts.map((fact, i) => (
                  <li key={i} className="font-hand-alt text-brown-600 flex items-start gap-2">
                    <span className="text-sage-500">✦</span> {fact}
                  </li>
                ))}
              </ul>
            </ScrapbookCard>
          </motion.div> */}

          {/* Contact links */}
          <motion.div variants={fadeInUp} custom={6} className="grid sm:grid-cols-3 gap-4">
            <a
              href="/images/TrinityHaischResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <StickyNote color="yellow" rotation={-2} className="text-center hover:shadow-paper-lg transition-shadow">
                <FileText className="h-6 w-6 text-brown-600 mx-auto mb-2" />
                <p className="font-hand text-lg text-brown-700">Resume</p>
              </StickyNote>
            </a>
            <a
              href="https://www.linkedin.com/in/trinity-haisch-024b91381/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <StickyNote color="blue" rotation={1} className="text-center hover:shadow-paper-lg transition-shadow">
                <Linkedin className="h-6 w-6 text-blue-700 mx-auto mb-2" />
                <p className="font-hand text-lg text-blue-800">LinkedIn</p>
              </StickyNote>
            </a>
            <a href="mailto:trinityhaisch@gmail.com" className="group">
              <StickyNote color="sage" rotation={-1} className="text-center hover:shadow-paper-lg transition-shadow">
                <Mail className="h-6 w-6 text-sage-700 mx-auto mb-2" />
                <p className="font-hand text-lg text-sage-700">Email</p>
              </StickyNote>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
