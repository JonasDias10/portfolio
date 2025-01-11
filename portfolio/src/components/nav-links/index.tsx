import { NavbarItem } from '@nextui-org/react';
import { useHeader } from '@/hooks/useHeader';

export const NavLinks = () => {
  const { menuItems } = useHeader();

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (!sectionRef.current) return;

    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return menuItems.map(({ name, ref }, index) => (
    <NavbarItem key={index} onClick={() => scrollToSection(ref)} className="cursor-pointer">
      {name}
    </NavbarItem>
  ));
};
