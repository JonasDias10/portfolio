import { Project } from "@components/project/Project"
import { ProjectType } from "types/appTypes"
import ProjectImage from "@assets/ProjectImage.svg"

export const Projects = () => {
    const projects: ProjectType[] = [
        {
            title: "Crypto Screener Application",
            description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
            url: "https://github.com/JonasDias10/tech-store",
            index: 1,
            image: <img src={ProjectImage} alt="Project image." />            
        },
        {
            title: "Crypto Screener Application",
            description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
            url: "https://github.com/JonasDias10/tech-store",
            index: 2,
            image: <img src={ProjectImage} alt="Project image." />            
        },
        {
            title: "Crypto Screener Application",
            description: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
            url: "https://github.com/JonasDias10/tech-store",
            index: 3,
            image: <img src={ProjectImage} alt="Project image." />            
        }
    ]

    return (
        <div className="bg-black w-full" id="projects">
            <h1 className="text-center text-white mb-10 text-4xl my-12">
                My 
                <span className="font-bold ml-2">
                    Projects
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
        </div>
    )
}
