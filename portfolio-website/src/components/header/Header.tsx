import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react"
import { NavLinks } from "@components/navLinks/NavLinks"
import { ResumeButton } from "@components/resumeButton/ResumeButton"
import { MenuItems } from "@components/menuItems/MenuItems"
import { AppLogo } from "@assets/AppLogo"
import { useHeader } from "@hooks/useHeader"
import { Icon } from "@iconify/react/dist/iconify.js"

export const Header = () => {
    const { isMenuOpen, setIsMenuOpen } = useHeader()

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
            <NavbarBrand>
                <AppLogo width="50px" height="50px" />
                <h1 className="font-bold">Portfolio</h1>
            </NavbarBrand>

            <NavbarContent className="hidden md:flex gap-6 text-black font-semibold" justify="center">
                <NavLinks />
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="hidden md:flex">
                    <ResumeButton />
                </NavbarItem>

                <NavbarMenuToggle 
                    className="md:hidden"
                    icon={<Icon icon="material-symbols:menu" width="26px" />}
                />
            </NavbarContent>
            
            <NavbarMenu className="bg-white">
                <MenuItems />
                <ResumeButton />
            </NavbarMenu>
        </Navbar>
    )
}
