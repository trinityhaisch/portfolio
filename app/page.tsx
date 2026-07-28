'use client'

import { motion } from 'framer-motion'
import {
  ScrapbookTitle,
  InteractiveSticker,
  FloatingDecoration,
  StickyNote,
  Tape,
  PushPin,
} from '@/components/scrapbook'
import { fadeInUp } from '@/components/scrapbook/animations'

export default function Home() {
  return (
    <div className="scrapbook-page">
      {/* Decorative background elements */}
      <FloatingDecoration className="absolute top-16 left-8 md:left-16 text-4xl opacity-60" rotation={-12} delay={0}>
        ✿
      </FloatingDecoration>
      <FloatingDecoration className="absolute top-32 right-12 md:right-24 text-3xl opacity-50" rotation={8} delay={1}>
        ★
      </FloatingDecoration>
      
      <FloatingDecoration className="absolute bottom-24 right-20 text-3xl opacity-50" rotation={15} delay={0.5}>
        ✦
      </FloatingDecoration>

      {/* Torn paper accents */}
      <div className="absolute top-0 left-0 w-32 h-24 bg-sage-200/30 torn-paper-top -rotate-6 opacity-60" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-40 h-28 bg-sticky-pink/40 torn-paper-top rotate-6 opacity-50" aria-hidden="true" />

      <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 md:mb-8"
        >
          <ScrapbookTitle />
          <p className="font-hand-alt text-lg md:text-xl text-sage-600 mt-3 rotate-[-1deg]">
            mechanical engineer
          </p>
        </motion.div>

        {/* Scrapbook spread layout */}
        <div className="relative max-w-5xl mx-auto min-h-[60vh] md:min-h-[70vh]">
          {/* About Me - Photo cutout */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="absolute top-0 left-0 md:left-2 z-20"
          >
            <InteractiveSticker href="/about" ariaLabel="About Me" rotation={-4} floatDelay={0}>
              <div className="relative">
                 <p className="font-hand text-xl text-brown-600 text-center mt-2 rotate-[-2deg]">
                  about me!
                </p>
                <div className="w-36 h-44 md:w-52 md:h-52 bg-cream p-1.5 shadow-paper-lg photo-cutout-edge">
                  <img
                    src="/images/websitephoto.png"
                    alt="Trinity Haisch"
                    className="w-full h-full object-cover"
                  />
                </div>
              
              </div>
            </InteractiveSticker>
          </motion.div>

          {/* Projects - Notebook page */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="absolute top-4 right-0 md:right-12 z-20"
          >
            <InteractiveSticker href="/projects" ariaLabel="Projects" rotation={3} floatDelay={0.5}>
              <div className="relative">
                <img
                    src="/images/project_card.png"
                    alt="Trinity Haisch"
                    className="w-60 h-50"
                  />
              </div>
            </InteractiveSticker>
          </motion.div>

          {/* Videos - Polaroid / camera */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="absolute top-48 md:top-60 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 z-20"
          >
            <InteractiveSticker href="/videos" ariaLabel="Videos and Social Media" rotation={-6} floatDelay={1}>
              <div className="relative">
                <img
                    src="/images/videos_card.png"
                    alt="Trinity Haisch"
                    className="w-60 h-50 rotate-[-6deg]"
                  />
              </div>
            </InteractiveSticker>
          </motion.div>

          {/* Resume - Folded paper */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="absolute bottom-8 md:bottom-10 left-4 md:left-24 z-20"
          >
            <InteractiveSticker
              href="/images/TrinityHaischResume.pdf"
              external
              ariaLabel="Download Resume"
              rotation={5}
              floatDelay={1.5}
            >
              <div className="relative">
                <img
                    src="/images/resume_card.png"
                    alt="Trinity Haisch"
                    className="w-60 h-50 rotate-[-6deg]"
                  />
              </div>
            </InteractiveSticker>
          </motion.div>

          {/* LinkedIn - Blue label */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="absolute bottom-12 md:bottom-30 right-4 md:right-60 z-20"
          >
            <InteractiveSticker
              href="https://www.linkedin.com/in/trinity-haisch-024b91381/"
              external
              ariaLabel="LinkedIn Profile"
              rotation={-3}
              floatDelay={2}
            >
              <StickyNote color="blue" rotation={-2} showTape={true} className="text-center min-w-[120px]">
                <p className="font-hand text-xl text-blue-800">LinkedIn</p>
                <p className="font-hand-alt text-xs text-blue-600/70">connect with me</p>
              </StickyNote>
            </InteractiveSticker>
          </motion.div>

          {/* Center welcome note */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-32 md:top-40 left-1/2 -translate-x-1/2 z-10 hidden md:block"
          >
            <StickyNote color="sage" rotation={1} className="max-w-xs text-center">
              <p className="font-hand text-2xl text-sage-700 mb-1">Welcome!</p>
              <p className="font-sans text-sm text-brown-600 leading-relaxed">
                Olin College engineering student who loves building things
                from drones to short films. Pick something to explore!
              </p>
            </StickyNote>
          </motion.div>

          {/* Decorative stamp */}
          <div
            className="absolute bottom-4 right-8 border-2 border-sage-400 rounded-full px-4 py-2 font-hand-alt text-sm text-sage-600 rotate-12 opacity-60 hidden md:block"
            aria-hidden="true"
          >
            ✦ Trinity Haisch ✦
          </div>
        </div>

        {/* Mobile welcome */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="md:hidden mt-[520px] px-4"
        >
          <StickyNote color="sage" rotation={0} className="text-center max-w-sm mx-auto">
            <p className="font-hand text-xl text-sage-700 mb-1">Welcome!</p>
            <p className="font-sans text-sm text-brown-600">
              Tap any scrapbook item above to explore my work.
            </p>
          </StickyNote>
        </motion.div>
      </div>
    </div>
  )
}
