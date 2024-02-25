import AboutImage from "@assets/AboutImage.svg"
import { useTranslation } from "react-i18next"

export const About = () => {
    const { t } = useTranslation()

    return (
        <section className="flex flex-wrap gap-10 justify-center w-full px-4 lg:justify-between lg:px-0" id="about">
            <div className="max-w-sm">
                <img src={AboutImage} alt="About image." className="w-full" />
            </div>
            <div className="max-w-lg">
                <h1 className="text-4xl mb-6">
                    {t("titles.about")} <span className="font-bold">{t("titles.me")}</span>
                </h1>
                <div className="flex flex-col gap-5 text-justify">
                    <p>
                        {t("about.description1")}
                    </p>
                    <p>
                        {t("about.description2")}
                    </p>
                    <p>
                        {t("about.description3")}
                    </p>
                </div>
            </div>
        </section>
    )
}