import { Switch } from '@nextui-org/react';
import { useTranslation } from 'react-i18next';
import { SwitchLanguageType } from '@/types/global';

export const SwitchLanguage = ({ isSelected, setIsSelected }: SwitchLanguageType) => {
  const { i18n } = useTranslation();

  const handleSwitchChange = () => {
    setIsSelected((prev) => !prev);
    i18n.changeLanguage(isSelected ? 'pt-BR' : 'en');
  };

  return (
    <Switch
      isSelected={isSelected}
      onValueChange={handleSwitchChange}
      startContent={<span>PT</span>}
      endContent={<span>EN</span>}
      classNames={{
        base: 'px-2 md:px-0',
        wrapper: 'bg-black w-16 h-5 rounded-sm group-data-[selected=true]:bg-black',
        thumb: 'group-data-[selected=true]:ml-11 w-3 h-3 rounded-sm',
        startContent: 'text-sm p-1 text-white',
        endContent: 'text-sm p-1 text-white',
      }}
    />
  );
};
