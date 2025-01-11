import { useTranslation } from 'react-i18next';
import { Skill } from '@/components/skill';
import { skills } from './skills-data';
import { useHeader } from '@/hooks/useHeader';

export const Skills = () => {
  const { t } = useTranslation();
  const { skillsRef } = useHeader();

  return (
    <section ref={skillsRef}>
      <h1 className="text-center mb-10 text-3xl">
        {t('titles.my2')}
        <span className="font-bold ml-2">{t('titles.skills')}</span>
      </h1>
      <div className="grid grid-cols-2 gap-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:gap-6">
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};
