import { HeaderContext } from "@/contexts/HeaderContext"
import { HeaderType } from "@/types/app"
import { useContext } from "react"

export const useHeader = (): HeaderType => {
  const context = useContext(HeaderContext)

  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider")
  }

  return context
}
