import { useHeader } from '@/hooks/useHeader';
import { NavbarMenuItem } from '@nextui-org/react';

export const MenuItems = () => {
  const { setIsMenuOpen, menuItems } = useHeader();

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (!sectionRef.current) return;

    setIsMenuOpen(false);

    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return menuItems.map(({ name, ref }, index) => (
    <NavbarMenuItem key={index} onClick={() => scrollToSection(ref)} className="cursor-pointer ml-2">
      {name}
    </NavbarMenuItem>
  ));
};
