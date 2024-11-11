type Hero = {
  title: {
    hello: string;
    name: string;
    position: string;
  };
  about: string;
};

type Experience = {
  stringhini: {
    title: string;
    begin: string;
    end: string;
    description: string[];
  };
};

type Projects = {
  noteCards: {
    title: string;
    description: string;
  };
  techStore: {
    title: string;
    description: string;
  };
  webChat: {
    title: string;
    description: string;
  };
  linkAggregator: {
    title: string;
    description: string;
  };
  unitTests: {
    title: string;
    description: string;
  };
  progressTrack: {
    title: string;
    description: string;
  };
};

type About = {
  description1: string;
  description2: string;
  description3: string;
};

type Titles = {
  my1: string;
  my2: string;
  me: string;
  experiences: string;
  projects: string;
  skills: string;
  about: string;
};

type Buttons = {
  resume: string;
};

export type I18nData = {
  header: {
    about: string;
    projects: string;
    skills: string;
  };
  hero: Hero;
  experience: Experience;
  about: About;
  projects: Projects;
  titles: Titles;
  buttons: Buttons;
};
