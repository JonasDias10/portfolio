import { ProjectType } from '@/types/global';
import { useTranslation } from 'react-i18next';
import { Project } from '@/components/project';
import { useHeader } from '@/hooks/useHeader';

export const Projects = () => {
  const { t } = useTranslation();
  const { projectsRef } = useHeader();

  const projects: ProjectType[] = [
    {
      title: t('projects.noteCards.title'),
      description: t('projects.noteCards.description'),
      url: 'https://github.com/JonasDias10/note-cards',
      index: 1,
    },
    {
      title: t('projects.techStore.title'),
      description: t('projects.techStore.description'),
      url: 'https://github.com/JonasDias10/tech-store',
      index: 2,
    },
    {
      title: t('projects.webChat.title'),
      description: t('projects.webChat.description'),
      url: 'https://github.com/JonasDias10/web-chat',
      index: 3,
    },
    {
      title: t('projects.linkAggregator.title'),
      description: t('projects.linkAggregator.description'),
      url: 'https://jonas-dias.netlify.app',
      index: 4,
    },
    {
      title: t('projects.unitTests.title'),
      description: t('projects.unitTests.description'),
      url: 'https://github.com/JonasDias10/unit-tests',
      index: 5,
    },
    {
      title: t('projects.progressTrack.title'),
      description: t('projects.progressTrack.description'),
      url: 'https://github.com/micaelomota/live-youtube-web-app',
      index: 6,
    },
  ];

  return (
    <section ref={projectsRef} className="bg-black w-full">
      <h1 className="text-center text-white mb-10 text-3xl my-12">
        {t('titles.my1')}
        <span className="font-bold ml-2">{t('titles.projects')}</span>
      </h1>
      <div className="flex gap-10 flex-col p-8">
        {projects.map((project) => (
          <Project key={project.index} project={project} />
        ))}
      </div>
    </section>
  );
};
