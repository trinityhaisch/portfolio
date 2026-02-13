'use client'

import { motion } from 'framer-motion'
import { FileText, Linkedin, Mail } from 'lucide-react'

/**
 * About page component
 * Displays bio, resume download, and social links
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-3xl">
         {/* Photo Above Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center mb-16"
    >
      {/* Photo Section */}
      <img
        src="/images/websitephoto.png"
        alt="Trinity Haisch"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg mb-6"
      />

      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
        About Me
      </h1>
    </motion.div>
        
        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-sage-50/50 rounded-lg p-8 md:p-12 mb-8"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {/* Replace this with your actual bio */}
            I'm a student at Olin College of Engineering passionate about mechanical and biomedical
            engineering. I enjoy using creativity to build something unique or solve problems. 
            I'm very interested in the intersection of mechanical, software, and biology. 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Outside of engineering, I like to produce short films and work in social media.
            I also draw, paint, and design clothes.
          </p>

    
        </motion.div>

        {/* Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {/* Resume View/Download */}
<a
  href="/images/TrinityHaischResume.pdf"
  target="_blank"               // opens in a new tab
  rel="noopener noreferrer"     // security best practice
  className="flex items-center justify-between p-6 bg-white border-2 border-sage-200 rounded-lg hover:border-sage-400 hover:shadow-md transition-smooth group"
>
  <div className="flex items-center">
    <div className="p-3 bg-sage-100 rounded-lg mr-4 group-hover:bg-sage-200 transition-smooth">
      <FileText className="h-6 w-6 text-sage-600" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Resume</h3>
      <p className="text-sm text-gray-600"></p>
    </div>
  </div>
  <FileText className="h-5 w-5 text-sage-600 group-hover:text-sage-700 transition-smooth" />
</a>


          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/trinity-haisch-024b91381/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-white border-2 border-sage-200 rounded-lg hover:border-sage-400 hover:shadow-md transition-smooth group"
          >
            <div className="flex items-center">
              <div className="p-3 bg-sage-100 rounded-lg mr-4 group-hover:bg-sage-200 transition-smooth">
                <Linkedin className="h-6 w-6 text-sage-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">LinkedIn</h3>
                <p className="text-sm text-gray-600">Connect with me on LinkedIn</p>
              </div>
            </div>
            <Linkedin className="h-5 w-5 text-sage-600 group-hover:text-sage-700 transition-smooth" />
          </a>

          {/* Email Contact */}
          <a
            href="mailto:trinityhaisch@gmail.com"
            className="flex items-center justify-between p-6 bg-white border-2 border-sage-200 rounded-lg hover:border-sage-400 hover:shadow-md transition-smooth group"
          >
            <div className="flex items-center">
              <div className="p-3 bg-sage-100 rounded-lg mr-4 group-hover:bg-sage-200 transition-smooth">
                <Mail className="h-6 w-6 text-sage-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-sm text-gray-600">Get in touch</p>
              </div>
            </div>
            <Mail className="h-5 w-5 text-sage-600 group-hover:text-sage-700 transition-smooth" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

