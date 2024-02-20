import { AppLogo } from "@assets/AppLogo"

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black w-full flex items-center justify-between px-4 py-6">
            <div className="text-white flex gap-1 items-center">
                <AppLogo width="50px" height="50px" color="#FFF" />
                <h1 className="font-bold">Portfolio</h1>
            </div>
            <div className="text-white text-right text-sm">
                <h1>
                    {currentYear} &copy; 
                </h1>
                <h2>
                    Created by Jonas Dias
                </h2>
            </div>
        </footer>
    )
}