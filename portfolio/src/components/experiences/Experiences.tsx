import { Experience } from "@components/experience/Experience";
import { ExperienceType } from "types/appTypes";
import { useTranslation } from "react-i18next";
import stringhiniLogo from "@assets/stringhini-logo.jpg";

export const Experiences = () => {
  const { t } = useTranslation();

  const experiences: ExperienceType[] = [
    {
      title: t("experience.stringhini.title"),
      begin: t("experience.stringhini.begin"),
      end: t("experience.stringhini.end"),
      description: t("experience.stringhini.description"),
      icon: <img src={stringhiniLogo} alt="Stringhini logo." width="24px" />,
    },
  ];

  return (
    <section className="bg-black w-full">
      <h1 className="text-center mb-10 text-3xl text-white my-12">
        {t("titles.my2")}
        <span className="font-bold ml-2">{t("titles.experiences")}</span>
      </h1>
      <div className="px-8">
        {experiences.map((experience) => (
          <Experience
            key={experience.title}
            icon={experience.icon}
            title={experience.title}
            begin={experience.begin}
            end={experience.end}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
};
