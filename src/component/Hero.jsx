"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"


export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-purple-500/30 rounded-full blur-3xl top-20 left-20"></div>
      <div className="absolute w-72 h-72 bg-blue-500/30 rounded-full blur-3xl bottom-20 right-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Abdullah Saifi
          </span>
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto text-lg">
          Full Stack Developer specializing in building modern web applications
          using Next.js, Node.js, and MySQL.
        </p>

        <div className="flex justify-center gap-4">
          <Button asChild className="px-6">
            <a href="/abdullah_Saifi.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>

          <Button variant="outline" size="icon">
            <a href="https://github.com/abdulgithub70" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
          </Button>

          <Button variant="outline" size="icon">
            <a href="https://www.linkedin.com/in/abdullah-saifi-9b1b4a1b3/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}