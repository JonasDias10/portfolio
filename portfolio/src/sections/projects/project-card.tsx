import { Iconify } from "@/components/iconify"
import { ProjectType } from "@/types/app"

type Props = {
  index: number
  project: ProjectType
}

export const ProjectCard = ({ project, index }: Props) => {
  const projectSide = index % 2 === 0 ? "flex-row" : "flex-row-reverse"

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
      <div className={`flex flex-wrap gap-2 sm:gap-8 justify-center max-w-5xl ${projectSide}`}>
        <div className="max-w-80 text-white mb-6">
          <Iconify icon="solar:link-circle-bold" width="80px" />
        </div>

        <div className="text-white max-w-2xl">
          <h1 className="font-bold text-xl">{project.title}</h1>

          <p className="text-zinc-500 my-4 text-justify">
            {project.description.map((content, index) => (
              <p className="text-zinc-300-300" key={index}>
                {index + 1}. {content}
              </p>
            ))}
          </p>
        </div>
      </div>
    </a>
  )
}
