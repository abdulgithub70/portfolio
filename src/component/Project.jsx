"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "HR Management System",
    description:
      "A full stack role-based HR management application with authentication and real-time features. Built for managing employees, attendance, notices, leave applications, and live chat.",
    features: [
      "Role-based authentication (Admin/HR & Employee)",
      "Secure Register & Login system",
      "Attendance check-in & check-out tracking",
      "Leave application approval/denial system",
      "Employee activity monitoring with duration calculation",
      "Notice management system",
      "Real-time live chat functionality"
    ],
    tech: "Next.js, Tailwind CSS, shadcn/ui, Lucide Icons, Node.js, MongoDB",
    github: "https://github.com/abdulgithub70/team_chat",
    live: "https://team-chat-ym6h.vercel.app/",
  },

  {
    title: "Event Staffing & Product Booking Platform",
    description:
      "A modern booking and e-commerce platform where users can purchase products and book service professionals such as promoters and hostesses. Includes admin confirmation workflow and dynamic profile management.",
    features: [
      "Product listing with Add to Cart & Order system",
      "Admin order confirmation system",
      "Top tab navigation (Products, Service Boys, Hostesses)",
      "Hostess/Service-boy/Prometers booking system",
      "Service providers can register and create profiles",
      "Profile image uploads with carousel display",
      "Dynamic routing with clean UI"
    ],
    tech: "Next.js, Tailwind CSS, shadcn/ui, Supabase (Backend & Database)",
    github: "https://github.com/abdulgithub70/stall-orders",
    live: "https://stall-orders.vercel.app/products",
  },
  {
    title: "Expense Tracker Application",
    description:
      "A full stack expense management application where users can register, login, and track their income and expenses with real-time balance calculation.",
    features: [
      "User registration and secure login system",
      "Add income entries (e.g., salary)",
      "Add expense entries (rent, shopping, etc.)",
      "Automatic total income calculation",
      "Automatic total expense calculation",
      "Real-time remaining balance tracking",
      "User-specific financial data management"
    ],
    tech: "React.js, Node.js, Express.js, MySQL",
    github: "https://github.com/abdulgithub70/expense-f",
    live: "#",
  },

]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/40">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="bg-background/60 backdrop-blur-xl border border-white/10 h-full">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="text-gray-400">
                    {project.description}
                  </p>
                  <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                    {project.features?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <p className="text-sm text-purple-400">
                    {project.tech}
                  </p>

                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>

                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}