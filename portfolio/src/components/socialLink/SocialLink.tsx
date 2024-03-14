import { Icon } from "@iconify/react/dist/iconify.js";
import { SocialLinkType } from "types/appTypes";

export const SocialLink = (socialLink: SocialLinkType) => {
  return (
    <a
      href={socialLink.url}
      target="_blank"
      className="rounded-md border-2 border-black w-12 h-12 flex flex-col items-center justify-center hover:bg-black cursor-pointer hover:text-white"
    >
      <Icon icon={socialLink.icon} width="28px" />
    </a>
  );
};
