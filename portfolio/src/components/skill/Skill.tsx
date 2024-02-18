import { Icon } from "@iconify/react/dist/iconify.js"
import { SkillType } from "types/appTypes"

export const Skill = (skill: SkillType) => {
    return (
        <div className="rounded-md border-2 border-black w-36 h-36 flex flex-col items-center justify-center hover:bg-black cursor-pointer hover:text-white sm:w-44 sm:h-44">
            <Icon icon={skill.icon} width="30px" />
            <p>
                {skill.name}
            </p>
        </div>
    )
}