import { HeaderType, ItemType, ProviderType } from '@/types/global';
import { useRef, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { HeaderContext } from './HeaderContext';

export const HeaderProvider = ({ children }: ProviderType) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skillsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const menuItems: ItemType[] = [
    { name: t('header.about'), ref: aboutRef },
    { name: t('header.skills'), ref: skillsRef },
    { name: t('header.projects'), ref: projectsRef },
  ];

  const headerContextValue: HeaderType = {
    isMenuOpen: isMenuOpen,
    setIsMenuOpen: setIsMenuOpen,
    menuItems: menuItems,
    aboutRef,
    skillsRef,
    projectsRef,
  };

  return <HeaderContext.Provider value={headerContextValue}>{children}</HeaderContext.Provider>;
};
