import { HeaderContext } from "@contexts/HeaderContext"
import { useContext } from "react"
import { HeaderType } from "types/appTypes"

export const useHeader = (): HeaderType => {
    const context = useContext(HeaderContext)

    if (!context) {
        throw new Error("useHeader must be used within a HeaderProvider")
    }
    
    return context
}
