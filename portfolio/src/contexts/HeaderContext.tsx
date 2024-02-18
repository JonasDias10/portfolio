import { createContext } from "react"
import { HeaderType } from "types/appTypes"

export const HeaderContext = createContext<HeaderType | null>(null)
