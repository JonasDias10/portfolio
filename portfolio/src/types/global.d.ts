import { Dispatch, ReactElement, SetStateAction } from 'react';

interface ProviderType {
  children: React.ReactNode;
}

interface ItemType {
  name: string;
  ref: React.RefObject<HTMLElement>;
  link?: string;
}

interface HeaderType {
  isMenuOpen: boolean;
  setIsMenuOpen: (boolean: boolean) => void;
  menuItems: ItemType[];
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
}

interface SkillType {
  icon: string;
  name: string;
}

interface SocialLinkType {
  url: string;
  icon: string;
}

interface SvgSize {
  width: string;
  height: string;
  color: string;
}

interface ExperienceType {
  icon: ReactElement | string;
  title: string;
  begin: string;
  end: string;
  description: string[];
}

interface ProjectType {
  title: string;
  description: string;
  index: number;
  url: string;
}

interface SwitchLanguageType {
  isSelected: boolean;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
}

export type {
  ProviderType,
  ItemType,
  HeaderType,
  SvgSize,
  SkillType,
  SocialLinkType,
  ExperienceType,
  ProjectType,
  SwitchLanguageType,
};
