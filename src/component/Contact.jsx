"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12">
          Get In <span className="text-purple-500">Touch</span>
        </h2>

        <Card className="bg-background/60 backdrop-blur-xl border border-white/10">
          <CardContent className="p-8 space-y-6">

            <div className="flex items-center justify-center gap-3 text-gray-400">
              <Mail size={20} />
              <span>abduljh24.705@gmail.com</span>
            </div>

            <div className="flex items-center justify-center gap-3 text-gray-400">
              <Phone size={20} />
              <span>+91 7053851429</span>
            </div>

            <div className="flex justify-center gap-6 pt-4">
              <a href="https://github.com/abdulgithub70" target="_blank">
                <Github className="hover:text-purple-500 transition" />
              </a>

              <a href="https://linkedin.com/in/abdullah-saifi-ba99b324a" target="_blank">
                <Linkedin className="hover:text-purple-500 transition" />
              </a>
            </div>

            <div className="pt-6">
              <Button asChild>
                <a href="https://gmail.com:abduljh24.705@gmail.com">
                  Send Email
                </a>
              </Button>
            </div>

          </CardContent>
        </Card>

      </motion.div>
    </section>
  )
}