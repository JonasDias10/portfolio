import { SocialLinkType } from '@/types/global';
import { Iconify } from '../iconify';

type Props = {
  socialLink: SocialLinkType;
};

export const SocialLink = ({ socialLink }: Props) => {
  return (
    <a
      href={socialLink.url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md border-2 border-black w-12 h-12 flex flex-col items-center justify-center hover:bg-black cursor-pointer hover:text-white"
    >
      <Iconify icon={socialLink.icon} width="28px" />
    </a>
  );
};
