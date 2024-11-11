import { About } from '@/sections/about';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/sections/hero';
import { Skills } from '@/sections/skills';
import { Experiences } from '@/sections/experiences';
import { Projects } from '@/sections/projects';

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
