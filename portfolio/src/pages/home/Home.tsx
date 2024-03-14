import { Header } from "@components/header/Header";
import { Hero } from "@components/hero/Hero";
import { Skills } from "@components/skills/Skills";
import { Experiences } from "@components/experiences/Experiences";
import { Footer } from "@components/footer/Footer";
import { About } from "@components/about/About";
import { Projects } from "@components/projects/Projects";

export const Home = () => {
  return (
    <div className="max-w-5xl px-0 sm:px-6 mx-auto flex flex-col items-center gap-20">
      <Header />
      <Hero />
      <Skills />
      <Experiences />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};
