import { useState } from "react"
import { HeaderContext } from "./HeaderContext"
import { HeaderType, ItemType, ProviderType } from "types/appTypes"
import { useTranslation } from "react-i18next"

export const CreateHeaderProvider = ({children}: ProviderType) => {
    const { t } = useTranslation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems: ItemType[] = [
        {name: t("header.about"), href: "about"},
        {name: t("header.skills"), href: "skills"},
        {name: t("header.projects"), href: "projects"}
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
