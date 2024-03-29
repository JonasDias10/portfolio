import { Skill } from "@components/skill/Skill";
import { useTranslation } from "react-i18next";
import { SkillType } from "types/appTypes";

export const Skills = () => {
  const { t } = useTranslation();

  const skills: SkillType[] = [
    {
      name: "Java",
      icon: "nonicons:java-16",
    },
    {
      name: "Spring Boot",
      icon: "simple-icons:springboot",
    },
    {
      name: "React",
      icon: "nonicons:react-16",
    },
    {
      name: "Angular",
      icon: "simple-icons:angular",
    },
    {
      name: "Git",
      icon: "bi:git",
    },
    {
      name: "TypeScript",
      icon: "nonicons:typescript-16",
    },
    {
      name: "PostgreSQL",
      icon: "simple-icons:postgresql",
    },
    {
      name: "MySQL",
      icon: "tabler:brand-mysql",
    },
    {
      name: "Flutter",
      icon: "ri:flutter-fill",
    },
    {
      name: "Tailwind",
      icon: "teenyicons:tailwind-solid",
    },
  ];

  return (
    <section id="skills">
      <h1 className="text-center mb-10 text-3xl">
        {t("titles.my2")}
        <span className="font-bold ml-2">{t("titles.skills")}</span>
      </h1>
      <div className="grid grid-cols-2 gap-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:gap-6">
        {skills.map((skill) => (
          <Skill key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
};
