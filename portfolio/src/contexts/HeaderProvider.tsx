import { useState } from "react"
import { HeaderContext } from "./HeaderContext"
import { HeaderType, ItemType, ProviderType } from "types/appTypes"

export const CreateHeaderProvider = ({children}: ProviderType) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems: ItemType[] = [
        {name: "About Me", href: "about"},
        {name: "Skills", href: "skills"},
        {name: "Projects", href: "projects"},
        {name: "Contact Me", href: "contact"},
    ]

    const headerContextValue: HeaderType = {
        isMenuOpen: isMenuOpen,
        setIsMenuOpen: setIsMenuOpen,
        menuItems: menuItems
    }

    return (
        <HeaderContext.Provider value={headerContextValue}>
            {children}
        </HeaderContext.Provider>
    )
}
