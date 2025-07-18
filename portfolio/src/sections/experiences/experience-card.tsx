import { ExperienceType } from "@/types/app"

type Props = {
  experience: ExperienceType
}

export const ExperienceCard = ({ experience }: Props) => {
  const isIconString = typeof experience.icon === "string"

  const renderIcon = () => {
    if (isIconString) {
      return <img src={`${experience.icon}`} alt={experience.title} className="w-12 rounded-sm bg-slate-100" />
    }
    return experience.icon
  }

  return (
    <div className="text-white p-4 border-zinc-500 border-2 rounded-md mb-6 hover:bg-zinc-800 hover:border-zinc-800 transition-all">
      <div className="flex justify-between flex-wrap mb-4 gap-2">
        <div className="flex gap-4 items-center">
          {renderIcon()}
          <h1 className="font-bold text-lg">{experience.title}</h1>
        </div>

        <h2>
          {experience.begin} - {experience.end}
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {experience.description.map((content, index) => (
          <p className="text-zinc-300-300" key={index}>
            {index + 1}. {content}
          </p>
        ))}
      </div>
    </div>
  )
}
