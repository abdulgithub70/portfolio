import About from "@/component/About"
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
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}