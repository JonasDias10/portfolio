import { useHeader } from "@/hooks/useHeader"

export const NavLinks = () => {
  const { menuItems } = useHeader()

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    if (!sectionRef.current) return

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
          className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 cursor-pointer transition-colors"
        >
          {name}
        </a>
      ))}
    </>
  )
}
