import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './locales/en';
import { pt } from './locales/pt';

const resources = {
  en: {
    translation: en,
  },
  'pt-BR': {
    translation: pt,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'pt-BR',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
