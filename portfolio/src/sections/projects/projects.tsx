import { useHeader } from "@/hooks/useHeader"
import { ProjectType } from "@/types/app"
import { useTranslation } from "react-i18next"
import { ProjectCard } from "./project-card"

export const Projects = () => {
  const { t } = useTranslation()
  const { projectsRef } = useHeader()

  const tArray = (key: string): string[] => {
    const result = t(key, { returnObjects: true })
    return Array.isArray(result) ? (result as string[]) : []
  }

  const projects: ProjectType[] = [
    {
      title: t("projects.reactTemplate.title"),
      description: tArray("projects.reactTemplate.description"),
      url: "https://github.com/JonasDias10/react-template",
    },
    {
      title: t("projects.reactTestingSetup.title"),
      description: tArray("projects.reactTestingSetup.description"),
      url: "https://github.com/JonasDias10/testing-in-react",
    },
    {
      title: t("projects.nodeGraphqlApi.title"),
      description: tArray("projects.nodeGraphqlApi.description"),
      url: "https://github.com/JonasDias10/node-ts",
    },
    {
      title: t("projects.javaSpringTemplate.title"),
      description: tArray("projects.javaSpringTemplate.description"),
      url: "https://github.com/JonasDias10/java-spring-template",
    },
    {
      title: t("projects.solidPrinciples.title"),
      description: tArray("projects.solidPrinciples.description"),
      url: "https://github.com/JonasDias10/solid-principles",
    },
    {
      title: t("projects.springBootTests.title"),
      description: tArray("projects.springBootTests.description"),
      url: "https://github.com/JonasDias10/unit-tests",
    },
  ]

  return (
    <section ref={projectsRef} className="bg-black w-full">
      <h1 className="text-center text-white mb-10 text-3xl my-12">
        <span className="font-bold ml-2">{t("titles.projects")}</span>
      </h1>

      <div className="flex gap-10 flex-col p-6">
        {projects.map((project, index) => (
          <ProjectCard key={`${index}-${project.title}`} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
