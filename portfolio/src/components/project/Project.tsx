import { Icon } from "@iconify/react/dist/iconify.js"
import { ProjectType } from "types/appTypes"

export const Project = (project: ProjectType) => {
    const projectSide = project.index % 2 === 0 ? "flex-row":"flex-row-reverse"

    return (
        <div className={`flex flex-wrap gap-10 items-center justify-center max-w-4xl ${projectSide}`}>
            <div className="max-w-md">
                <img src={project.image} alt={project.title} className="w-96 h-96 rounded-md"/>
            </div>
            <div className="text-white max-w-80">
                <h1 className="font-bold text-xl">
                    {project.title}
                </h1>
                <p className="text-zinc-500 my-4 text-justify">
                    {project.description}
                </p>
                <a href={project.url} target="_blank">
                    <Icon icon="eva:external-link-outline" width="26px" />
                </a>
            </div>
        </div>
    )
}