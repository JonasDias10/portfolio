import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Experiences } from "@/sections/experiences/experiences"
import { Hero } from "@/sections/hero/hero"
import { Projects } from "@/sections/projects/projects"
import { Skills } from "@/sections/skills/skills"

export const Home = () => {
  return (
    <div className="max-w-6xl px-0 sm:px-4 mx-auto flex flex-col items-center gap-20">
      <Header />
      <Hero />
      <Experiences />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}
