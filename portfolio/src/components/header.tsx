import { useHeader } from "@/hooks/useHeader"
import { Iconify } from "./iconify"
import { AppLogo } from "./logo"
import { MenuItems } from "./menu-items"
import { NavLinks } from "./nav-links"
import { SwitchLanguage } from "./switch-language"

export const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useHeader()

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className="w-full bg-white sticky top-0">
      <div className="max-w-full mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-1">
              <AppLogo width="50px" height="50px" color="#000000" />
              <h1 className="font-bold text-black">Portfolio</h1>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-4 text-black font-semibold">
            <NavLinks />

            <div className="ml-4">
              <SwitchLanguage />
            </div>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Iconify icon="material-symbols:menu" width="26px" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white py-2 space-y-2">
            <MenuItems />

            <SwitchLanguage mobile />
          </div>
        )}
      </div>
    </header>
  )
}
