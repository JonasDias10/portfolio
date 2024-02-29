import { SocialLink } from "@components/socialLink/SocialLink"
import { SocialLinkType } from "types/appTypes"
import { useTranslation } from "react-i18next"
import heroImage from "@assets/hero-image.svg"

export const Hero = () => {
    const { t } = useTranslation()

    const socialLinks: SocialLinkType[] = [
        {
            url: "https://www.linkedin.com/in/jonasdias18/",
            icon: "ri:linkedin-fill",
        },
        {
            url: "https://github.com/JonasDias10",
            icon: "ri:github-fill",
        },
        {
            url: "https://www.instagram.com/zdias_z3/",
            icon: "ri:instagram-fill",
        }
    ]

    return (
        <section className="flex gap-6 flex-col-reverse items-center lg:flex-row lg:items-stretch">
            <div className="flex gap-4 flex-col justify-between p-4 max-w-lg">
                <div>
                    <div className="mb-4 text-3xl">
                        <p className="mb-2">
                            {t("hero.title.hello")} <span className="font-bold">{t("hero.title.name")}</span>
                        </p>
                        <p className="mb-2">{t("hero.title.job")}</p>
                        <p>
                            {t("hero.title.from")} <span className="font-bold">{t("hero.title.country")}</span>.
                        </p>
                    </div>
                    <p className="text-sm text-justify">
                        {t("hero.about")}
                    </p>
                </div>
                <div className="flex gap-2">
                    {
                        socialLinks.map(socialLink => (
                            <SocialLink 
                                key={socialLink.url} 
                                url={socialLink.url} 
                                icon={socialLink.icon} 
                            />
                        ))
                    }
                </div>
            </div>
            <div className="flex p-4 h-96">
                <img src={heroImage} alt="Hero image." width="540px" className="self-end" />
            </div>
        </section>
    )
}