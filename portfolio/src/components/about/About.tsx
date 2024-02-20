import AboutImage from "@assets/AboutImage.svg"

export const About = () => {
    return (
        <div className="flex flex-wrap gap-10 justify-center w-full px-4 lg:justify-between lg:px-0" id="about">
            <div className="max-w-sm">
                <img src={AboutImage} alt="About image." className="w-full" />
            </div>
            <div className="max-w-lg">
                <h1 className="text-4xl mb-6">
                    About <span className="font-bold">Me</span>
                </h1>
                <div className="flex flex-col gap-5 text-justify">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem ipsum dolorem totam quos. Unde dignissimos praesentium corporis. Reprehenderit dolor pariatur temporibus perferendis repellendus, commodi voluptatibus voluptate tempore enim error tenetur?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, reiciendis quae. Minus nesciunt nisi expedita eius. Odit debitis doloremque enim illum eligendi dolor cumque veniam deleniti minus? Beatae, cum tempore.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, reiciendis quae. Minus nesciunt nisi expedita eius. Odit debitis doloremque enim illum eligendi dolor cumque veniam deleniti minus? Beatae, cum tempore.
                    </p>
                </div>
            </div>
        </div>
    )
}