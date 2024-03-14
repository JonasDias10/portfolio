import { ExperienceType } from "types/appTypes";

export const Experience = (experience: ExperienceType) => {
  return (
    <div className="text-white p-4 border-zinc-500 border-2 rounded-md mb-6 hover:bg-zinc-800 hover:border-zinc-800">
      <div className="flex justify-between flex-wrap mb-4 gap-2">
        <div className="flex gap-4 items-center">
          {experience.icon}
          <h1 className="font-bold text-lg">{experience.title}</h1>
        </div>
        <h2>
          {experience.begin} - {experience.end}
        </h2>
      </div>
      <p className="text-zinc-300-300">{experience.description}</p>
    </div>
  );
};
