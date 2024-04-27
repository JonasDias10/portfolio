import { Project } from "@components/project/Project";
import { ProjectType } from "types/appTypes";
import { useTranslation } from "react-i18next";
import linkAggregator from "@assets/link-aggregator.png";
import progressTrack from "@assets/progress-track.png";

export const Projects = () => {
  const { t } = useTranslation();

  const projects: ProjectType[] = [
    {
      title: t("projects.note_cards.title"),
      description: t("projects.note_cards.description"),
      url: "https://github.com/JonasDias10/note-cards",
      index: 1,
      image:
        "https://github.com/JonasDias10/note-cards/blob/main/media/note-cards-gif.gif?raw=true",
    },
    {
      title: t("projects.tech_store.title"),
      description: t("projects.tech_store.description"),
      url: "https://github.com/JonasDias10/tech-store",
      index: 2,
      image:
        "https://github.com/JonasDias10/tech-store/blob/main/media/tech-store.gif?raw=true",
    },
    {
      title: t("projects.web_chat.title"),
      description: t("projects.web_chat.description"),
      url: "https://github.com/JonasDias10/web-chat",
      index: 3,
      image:
        "https://github.com/JonasDias10/web-chat/blob/main/media/web-chat.gif?raw=true",
    },
    {
      title: t("projects.link_aggregator.title"),
      description: t("projects.link_aggregator.description"),
      url: "https://jonas-dias.netlify.app",
      index: 4,
      image: linkAggregator,
    },
    {
      title: t("projects.unit_tests.title"),
      description: t("projects.unit_tests.description"),
      url: "https://github.com/JonasDias10/unit-tests",
      index: 5,
      image:
        "https://github.com/JonasDias10/unit-tests/blob/main/media/tests-results.png?raw=true",
    },
    {
      title: t("projects.progress_track.title"),
      description: t("projects.progress_track.description"),
      url: "https://github.com/micaelomota/live-youtube-web-app",
      index: 6,
      image: progressTrack,
    },
  ];

  return (
    <section className="bg-black w-full" id="projects">
      <h1 className="text-center text-white mb-10 text-3xl my-12">
        {t("titles.my1")}
        <span className="font-bold ml-2">{t("titles.projects")}</span>
      </h1>
      <div className="flex gap-10 flex-col p-8">
        {projects.map((project) => (
          <Project
            key={project.index}
            title={project.title}
            description={project.description}
            url={project.url}
            index={project.index}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};
