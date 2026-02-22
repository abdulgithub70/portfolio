"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-purple-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Left Side */}
          <Card className="bg-background/60 backdrop-blur-xl border border-white/10">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">Who I Am</h3>
              <p className="text-gray-400">
                I am a passionate Full Stack Developer with experience in
                building responsive and scalable web applications using
                modern technologies like Next.js, Node.js, and MySQL.
              </p>
            </CardContent>
          </Card>

          {/* Right Side */}
          <Card className="bg-background/60 backdrop-blur-xl border border-white/10">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">Experience & Goals</h3>
              <p className="text-gray-400">
                I have worked on real-world projects including an expense
                tracker and e-commerce platforms. My goal is to continuously
                improve my skills and build impactful digital products.
              </p>
            </CardContent>
          </Card>

        </div>
      </motion.div>
    </section>
  )
}