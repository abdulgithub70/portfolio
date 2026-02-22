"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Power BI"
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge className="px-4 py-2 text-sm backdrop-blur-md border border-white/10">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}