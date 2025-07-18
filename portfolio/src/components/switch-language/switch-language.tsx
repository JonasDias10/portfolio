import { Button, Popover, PopoverContent, PopoverTrigger } from "@heroui/react"
import { useCallback } from "react"
import { useTranslation } from "react-i18next"
import { Iconify } from "../iconify"
import { allLangs } from "./all-langs"

export default function SwitchLanguage() {
  const { i18n } = useTranslation()

  const currentLang = allLangs.find((lang) => lang.value === i18n.language) || allLangs[0]

  const handleChangeLang = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng)
    },
    [i18n]
  )

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button isIconOnly variant="light" className="w-10 h-10 hover:bg-default-100">
          <Iconify icon={currentLang.icon} className="w-6 h-6" />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <div className="flex flex-col px-0 py-2 gap-1">
          {allLangs.map((option) => (
            <Button
              key={option.value}
              variant="light"
              className={`justify-start ${option.value === currentLang.value ? "bg-default-100" : ""}`}
              startContent={<Iconify icon={option.icon} className="w-5 h-5" />}
              onPress={() => handleChangeLang(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
