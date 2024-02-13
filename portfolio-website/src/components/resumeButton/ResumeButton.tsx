import { Button } from "@nextui-org/react"
import { Download } from "lucide-react"

export const ResumeButton = () => {
    return (
        <Button className="bg-black text-white font-semibold hover:text-black hover:bg-white border-2 border-black h-10 rounded-md">
            Resume
            <Download />
        </Button>
    )
}