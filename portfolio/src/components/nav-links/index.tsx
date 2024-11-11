import { useHeader } from '@/hooks/useHeader';
import { Link, NavbarItem } from '@nextui-org/react';

export const NavLinks = () => {
  const { menuItems } = useHeader();

  return menuItems.map((item, index) => (
    <NavbarItem key={`${item.href}-${index}`}>
      <Link href={`#${item.href}`} className="text-black hover:text-gray-700">
        {item.name}
      </Link>
    </NavbarItem>
  ));
};
