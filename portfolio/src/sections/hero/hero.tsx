import { SocialLink } from "@/components/social-link"
import { SocialLinkType } from "@/types/app"
import { useTranslation } from "react-i18next"

const socialLinks: SocialLinkType[] = [
  {
    url: "https://www.linkedin.com/in/jonasdias10/",
    icon: "ri:linkedin-fill",
  },
  {
    url: "https://github.com/JonasDias10",
    icon: "ri:github-fill",
  },
  {
    url: "https://www.instagram.com/zdias_z3/",
    icon: "ri:instagram-fill",
  },
]

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="flex gap-6 flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-stretch w-full">
      <div className="flex gap-4 flex-col justify-between p-4 max-w-xl">
        <div>
          <div className="mb-4 text-3xl">
            <p className="mb-2">
              {t("hero.title.hello")} <span className="font-bold">{t("hero.title.name")}</span>
            </p>

            <p className="mb-2">{t("hero.title.position")}</p>
          </div>

          <p className="text-sm text-justify">{t("hero.about")}</p>
        </div>

        <div className="flex gap-2">
          {socialLinks.map((socialLink) => (
            <SocialLink key={socialLink.url} socialLink={socialLink} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center max-w-80 max-h-80 rounded-full">
        <img src="/assets/hero-image.webp" alt="Hero image." className="rounded-full max-w-80 max-h-80 p-2" />
      </div>
    </section>
  )
}
