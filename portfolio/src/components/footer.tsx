import { useTranslation } from "react-i18next"
import { AppLogo } from "./logo"

const links = [
  {
    name: "Jonas Dias",
    url: "https://github.com/JonasDias10",
    title: "footer.developerBy",
  },
  {
    name: "Jhanvi Shah",
    url: "https://www.behance.net/jhanvishah2",
    title: "footer.designBy",
  },
]

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-black w-full flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between px-4 py-6">
      <div className="text-white flex gap-1 items-center">
        <AppLogo width="50px" height="50px" color="#FFF" />
        <h1 className="font-bold">Portfolio</h1>
      </div>

      <div className="text-white text-right text-sm flex flex-wrap justify-center items-center gap-2">
        {links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" className="hover:text-slate-400" rel="noreferrer">
            <div className="inline-flex items-center gap-1">
              <span>{t(link.title)}</span>
              <span>{link.name}</span>
              <span className="hidden sm:inline-block">{index < links.length - 1 ? " | " : ""}</span>
            </div>
          </a>
        ))}
      </div>

      <div className="text-white text-sm">
        <span>{new Date().getFullYear()} &copy; Jonas Dias</span>
      </div>
    </footer>
  )
}
