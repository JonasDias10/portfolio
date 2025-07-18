import { HeaderType } from "@/types/app"
import { createContext } from "react"

export const HeaderContext = createContext<HeaderType | null>(null)
