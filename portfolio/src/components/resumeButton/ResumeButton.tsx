import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

export const ResumeButton = () => {
  const { t } = useTranslation();

  return (
    <a href="https://drive.usercontent.google.com/download?id=17Zbdo_-p_jM4V-kK5FnePhI0ApazUgI1&export=download&authuser=0&confirm=t&uuid=0a5d1024-602f-4bac-b9d7-4090d4bdb8ee&at=APZUnTWpm6kuqyDIvdQ5B7SAV9LX:1710422631231">
      <Button className="bg-black text-white font-semibold hover:text-black hover:bg-white border-2 border-black h-10 rounded-md">
        {t("buttons.resume")}
        <Icon icon="material-symbols:download" width="22px" />
      </Button>
    </a>
  );
};
