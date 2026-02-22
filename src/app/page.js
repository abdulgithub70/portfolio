import About from "@/component/About"
import Education from "@/component/Education"
import Contact from "@/component/Contact"
import Hero from "@/component/Hero"
import Navbar from "@/component/Navbar"
import Projects from "@/component/Project"
import Skills from "@/component/Skills"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}