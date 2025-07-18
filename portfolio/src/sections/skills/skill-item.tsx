import { Iconify } from "@/components/iconify"
import { SkillType } from "@/types/app"

type Props = {
  skill: SkillType
}

export const SkillItem = ({ skill }: Props) => {
  return (
    <div className="rounded-md border-2 border-black w-36 h-36 flex flex-col items-center justify-center hover:bg-black cursor-pointer hover:text-white sm:w-48 sm:h-48">
      <Iconify icon={skill.icon} width="30px" />

      <p>{skill.name}</p>
    </div>
  )
}
