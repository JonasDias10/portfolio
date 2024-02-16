import { SocialLink } from "@components/socialLink/SocialLink"
import HeroImage from "@assets/HeroImage.svg"
import { SocialLinkType } from "types/appTypes"

export const Hero = () => {

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
        <div className="flex gap-6 flex-col-reverse items-center lg:flex-row lg:items-stretch">
            <div className="flex gap-4 flex-col justify-between p-4 max-w-lg">
                <div>
                    <div className="mb-4 text-4xl">
                        <p className="mb-2">
                            Hello I'm <span className="font-bold">Jonas Dias</span>
                        </p>
                        <p className="mb-2">Software Developer</p>
                        <p>
                            From <span className="font-bold">Brazil</span>.
                        </p>
                    </div>
                    <p className="text-sm text-justify">
                        I'm Jonas Dias Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
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
                <img src={HeroImage} alt="Hero image." width="540px" className="self-end" />
            </div>
        </div>
    )
}