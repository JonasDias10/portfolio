import { ExperienceType } from "@/types/app"
import { useTranslation } from "react-i18next"
import { ExperienceCard } from "./experience-card"

export const Experiences = () => {
  const { t } = useTranslation()

  const experiences: ExperienceType[] = [
    {
      title: t("experience.tudeDinizFulltime.title"),
      begin: t("experience.tudeDinizFulltime.begin"),
      end: t("experience.tudeDinizFulltime.end"),
      description: t("experience.tudeDinizFulltime.description", {
        returnObjects: true,
      }) as string[],
      icon: "/assets/tude-diniz-logo.png",
    },
    {
      title: t("experience.tudeDinizInternship.title"),
      begin: t("experience.tudeDinizInternship.begin"),
      end: t("experience.tudeDinizInternship.end"),
      description: t("experience.tudeDinizInternship.description", {
        returnObjects: true,
      }) as string[],
      icon: "/assets/tude-diniz-logo.png",
    },
    {
      title: t("experience.stringhini.title"),
      begin: t("experience.stringhini.begin"),
      end: t("experience.stringhini.end"),
      description: t("experience.stringhini.description", {
        returnObjects: true,
      }) as string[],
      icon: "/assets/stringhini-logo.jpg",
    },
  ]

  return (
    <section className="bg-black w-full">
      <h1 className="text-center mb-10 text-3xl text-white my-12">
        <span className="font-bold ml-2">{t("titles.experiences")}</span>
      </h1>

      <div className="px-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </div>
    </section>
  )
}
