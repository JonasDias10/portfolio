import { Dispatch, ReactElement, SetStateAction } from "react"

interface ProviderType {
    children: React.ReactNode
}

interface ItemType {
    name: string
    href: string
}

interface HeaderType {
    isMenuOpen: boolean
    setIsMenuOpen: (boolean: boolean) => void
    menuItems: ItemType[]
}

interface SkillType {
    icon: string
    name: string
}

interface SocialLinkType {
    url: string
    icon: string
}

interface SvgSize {
    width: string
    height: string
    color: string
}

interface ExperienceType {
    icon: ReactElement 
    title: string
    begin: string
    end: string
    description: string
}

interface ProjectType {
    image: ReactElement 
    title: string
    description: string
    index: number
    url: string
}

interface SwitchLanguageType {
    isSelected: boolean
    setIsSelected: Dispatch<SetStateAction<boolean>>
}

export type { ProviderType, ItemType, HeaderType, SvgSize, SkillType, SocialLinkType, ExperienceType, ProjectType, SwitchLanguageType }