import { useTranslation } from 'react-i18next';
import { ExperienceType } from '@/types/global';
import { Experience } from '@/components/experience';

export const Experiences = () => {
  const { t } = useTranslation();

  const experiences: ExperienceType[] = [
    {
      title: t('experience.stringhini.title'),
      begin: t('experience.stringhini.begin'),
      end: t('experience.stringhini.end'),
      description: t('experience.stringhini.description', {
        returnObjects: true,
      }) as string[],
      icon: '/assets/stringhini-logo.jpg',
    },
  ];

  return (
    <section className="bg-black w-full">
      <h1 className="text-center mb-10 text-3xl text-white my-12">
        {t('titles.my2')}
        <span className="font-bold ml-2">{t('titles.experiences')}</span>
      </h1>
      <div className="px-8">
        {experiences.map((experience) => (
          <Experience key={experience.title} experience={experience} />
        ))}
      </div>
    </section>
  );
};
