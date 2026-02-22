"use client"

import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-background/70 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-purple-500">
          Abdullah
        </h1>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-purple-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-purple-500 transition">
            About
          </a>
          <a href="#skills" className="hover:text-purple-500 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-purple-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-500 transition">
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  )
}