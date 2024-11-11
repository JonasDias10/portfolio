import { ProjectType } from '@/types/global';
import { Iconify } from '../iconify';

type Props = {
  project: ProjectType;
};

export const Project = ({ project }: Props) => {
  const projectSide = project.index % 2 === 0 ? 'flex-row' : 'flex-row-reverse';

  return (
    <div className={`flex flex-wrap gap-8 justify-center items-end max-w-4xl ${projectSide}`}>
      <div className="max-w-80 text-white mb-6 hover:scale-105 transition-all hover:text-gray-400">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <Iconify icon="mdi:source-repository-multiple" width="80px" />
        </a>
      </div>

      <div className="text-white max-w-xl">
        <h1 className="font-bold text-xl">{project.title}</h1>
        <p className="text-zinc-500 my-4 text-justify">{project.description}</p>
      </div>
    </div>
  );
};
