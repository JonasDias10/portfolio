import { useHeader } from "@/hooks/useHeader"

export const MenuItems = () => {
  const { setIsMenuOpen, menuItems } = useHeader()

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (!sectionRef.current) return

    setIsMenuOpen(false)

    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <>
      {menuItems.map(({ name, ref }, index) => (
        <a
          key={index}
          onClick={() => scrollToSection(ref)}
          className="block p-2 text-sm font-medium hover:bg-gray-100 cursor-pointer transition-colors rounded-md"
        >
          {name}
        </a>
      ))}
    </>
  )
}
