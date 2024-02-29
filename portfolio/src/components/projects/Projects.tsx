import { Project } from "@components/project/Project"
import { ProjectType } from "types/appTypes"
import { useTranslation } from "react-i18next"
import noteCards from "@assets/note-cards.jpg"
import techStore from "@assets/tech-store.jpg"
import webChat from "@assets/web-chat.jpg"
import linkAggregator from "@assets/link-aggregator.jpg"

export const Projects = () => {
    const { t } = useTranslation()

    const projects: ProjectType[] = [
        {
            title: t("projects.note_cards.title"),
            description: t("projects.note_cards.description"),
            url: "https://github.com/JonasDias10/note-cards",
            index: 1,
            image: noteCards
        },
        {
            title: t("projects.tech_store.title"),
            description: t("projects.tech_store.description"),
            url: "https://github.com/JonasDias10/tech-store",
            index: 2,
            image: techStore
        },
        {
            title: t("projects.web_chat.title"),
            description: t("projects.web_chat.description"),
            url: "https://github.com/JonasDias10/web-chat",
            index: 3,
            image: webChat      
        },
        {
            title: t("projects.link_aggregator.title"),
            description: t("projects.link_aggregator.description"),
            url: "https://jonas-dias.netlify.app",
            index: 4,
            image: linkAggregator         
        }
    ]

    return (
        <section className="bg-black w-full" id="projects">
            <h1 className="text-center text-white mb-10 text-3xl my-12">
                {t("titles.my1")}
                <span className="font-bold ml-2">
                    {t("titles.projects")}
                </span>
            </h1>
            <div className="flex gap-10 flex-col p-8">
                {
                    projects.map(project => (
                        <Project
                            key={project.index}
                            title={project.title}
                            description={project.description}
                            url={project.url}
                            index={project.index}
                            image={project.image}
                        />
                    ))
                }
            </div>
        </section>
    )
}
