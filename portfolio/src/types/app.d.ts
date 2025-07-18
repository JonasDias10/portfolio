import React, { Dispatch, ReactElement, SetStateAction } from "react"

type ProviderType = {
  children: React.ReactNode
}

type MenuItemType = {
  name: string
  ref: React.RefObject<HTMLElement>
  link?: string
}

type HeaderType = {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  menuItems: MenuItemType[]
  aboutRef: React.RefObject<HTMLElement>
  skillsRef: React.RefObject<HTMLElement>
  projectsRef: React.RefObject<HTMLElement>
}

type SkillType = {
  icon: string
  name: string
}

type SocialLinkType = {
  url: string
  icon: string
}

type SvgSize = {
  width: string
  height: string
  color: string
}

type ExperienceType = {
  icon: ReactElement | string
  title: string
  begin: string
  end: string
  description: string[]
}

type ProjectType = {
  title: string
  description: string[]
  url: string
}

type SwitchLanguageType = {
  isSelected: boolean
  setIsSelected: Dispatch<SetStateAction<boolean>>
}

export type {
  ExperienceType,
  HeaderType,
  ItemType,
  ProjectType,
  ProviderType,
  SkillType,
  SocialLinkType,
  SvgSize,
  SwitchLanguageType,
}
