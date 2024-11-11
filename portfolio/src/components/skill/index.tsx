import { SkillType } from '@/types/global';
import { Iconify } from '../iconify';

type Props = {
  skill: SkillType;
};

export const Skill = ({ skill }: Props) => {
  return (
    <div className="rounded-md border-2 border-black w-36 h-36 flex flex-col items-center justify-center hover:bg-black cursor-pointer hover:text-white sm:w-44 sm:h-44">
      <Iconify icon={skill.icon} width="30px" />
      <p>{skill.name}</p>
    </div>
  );
};
