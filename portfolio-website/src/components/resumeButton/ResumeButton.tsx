import { Icon } from "@iconify/react/dist/iconify.js"
import { Button } from "@nextui-org/react"

export const ResumeButton = () => {
    return (
        <Button className="bg-black text-white font-semibold hover:text-black hover:bg-white border-2 border-black h-10 rounded-md">
            Resume
            <Icon icon="material-symbols:download" width="22px"/>
        </Button>
    )
}