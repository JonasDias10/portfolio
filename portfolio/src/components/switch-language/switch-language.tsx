import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Iconify } from "../iconify"
import { allLangs } from "./all-langs"

type Props = {
  mobile?: boolean
}

export default function SwitchLanguage({ mobile = false }: Props) {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = allLangs.find((lang) => lang.value === i18n.language) || allLangs[0]

  const handleChangeLang = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsOpen(false)
  }

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={`relative`}>
      <button
        onClick={handleToggleMenu}
        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
      >
        <Iconify icon={currentLang.icon} className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className={`absolute ${mobile ? "left-0" : "right-0"} mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200`}
        >
          <div className="flex flex-col px-0 py-2 gap-1">
            {allLangs.map((option) => (
              <button
                key={option.value}
                className={`flex items-center px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                  option.value === currentLang.value ? "bg-gray-100" : ""
                }`}
                onClick={() => handleChangeLang(option.value)}
              >
                <Iconify icon={option.icon} className="w-5 h-5 mr-2" />
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
