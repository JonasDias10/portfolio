import { useHeader } from "@hooks/useHeader";
import { Link, NavbarMenuItem } from "@nextui-org/react";

export const MenuItems = () => {
  const { setIsMenuOpen, menuItems } = useHeader();

  return menuItems.map((item, index) => (
    <NavbarMenuItem key={`${item.href}-${index}`}>
      <Link
        className="w-full px-2 text-right text-black hover:text-gray-700"
        href={`#${item.href}`}
        onClick={() => setIsMenuOpen(false)}
      >
        {item.name}
      </Link>
    </NavbarMenuItem>
  ));
};
