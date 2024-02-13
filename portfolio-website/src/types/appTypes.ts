interface ProviderType {
    children: React.ReactNode
}

interface ItemType {
    name: string
    href: string
}

interface HeaderType {
    isMenuOpen: boolean
    setIsMenuOpen: (boolean: boolean) => void
    menuItems: ItemType[]
}

interface SvgSize {
    width: string
    height: string
}

export type { ProviderType, ItemType, HeaderType, SvgSize }