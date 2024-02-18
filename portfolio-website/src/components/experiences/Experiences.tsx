import { Experience } from "@components/experience/Experience"
import { ExperienceType } from "types/appTypes"
import StringhiniLogo from "@assets/StringhiniLogo.jpg"

export const Experiences = () => {

    const experiences: ExperienceType[] = [
        {
            title: "Data Quality at Stringhini",
            begin: "Set 2022",
            end: "Present",
            description: "As the Data Quality, my responsibilities include recording, identifying, and categorizing products within the company's system. Additionally, I am committed to ensuring the integrity and accuracy of information.",
            icon: <img src={StringhiniLogo} alt="Stringhini logo." width="24px" />
        },
    ]

    return (
        <div className="bg-black w-full">
            <h1 className="text-center mb-10 text-4xl text-white my-12">
                My 
                <span className="font-bold ml-2">
                    Experience
                </span>
            </h1>
            <div className="px-8">
                {
                    experiences.map(experience => (
                        <Experience 
                            key={experience.title}  
                            icon={experience.icon}
                            title={experience.title}
                            begin={experience.begin} 
                            end={experience.end}
                            description={experience.description}
                        />
                    ))
                }
            </div>
        </div>
    )
}