import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

export const ResumeButton = () => {
  const { t } = useTranslation();

  return (
    <a href="https://drive.usercontent.google.com/download?id=1GT4hvhe_nyF8l-bxZ80NgeCkq3CVSi33&export=download&authuser=0&confirm=t&uuid=d201cac8-a531-41e5-9b7f-5bf819e64fec&at=APZUnTWW1F5oY1kHezlrv4wwEKsU:1710419565848">
      <Button className="bg-black text-white font-semibold hover:text-black hover:bg-white border-2 border-black h-10 rounded-md">
        {t("buttons.resume")}
        <Icon icon="material-symbols:download" width="22px" />
      </Button>
    </a>
  );
};
