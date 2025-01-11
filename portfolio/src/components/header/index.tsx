import { useHeader } from '@/hooks/useHeader';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, Link } from '@nextui-org/react';
import { useState } from 'react';
import { AppLogo } from '../logo';
import { NavLinks } from '../nav-links';
import { SwitchLanguage } from '../switch-language';
import { MenuItems } from '../menu-items';
import { Iconify } from '../iconify';

export const Header = () => {
  const [isSelected, setIsSelected] = useState(false);
  const { isMenuOpen, setIsMenuOpen } = useHeader();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      classNames={{
        wrapper: 'p-4 md:p-0',
      }}
    >
      <NavbarBrand>
        <a href="/" className="flex items-center gap-1">
          <AppLogo width="50px" height="50px" color="#000000" />
          <h1 className="font-bold">Portfolio</h1>
        </a>
      </NavbarBrand>

      <NavbarContent justify="end" className="hidden md:flex gap-6 text-black font-semibold">
        <NavLinks />

        <Link target="_blank" rel="noopener noreferrer" href="/" className="text-black">
          Blog
        </Link>

        <NavbarItem>
          <SwitchLanguage isSelected={isSelected} setIsSelected={setIsSelected} />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="md:hidden">
        <NavbarMenuToggle icon={<Iconify icon="material-symbols:menu" width="26px" />} />
      </NavbarContent>

      <NavbarMenu className="bg-white">
        <MenuItems />

        <NavbarItem>
          <SwitchLanguage isSelected={isSelected} setIsSelected={setIsSelected} />
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};
