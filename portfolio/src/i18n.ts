import i18next from "i18next"
import { initReactI18next } from "react-i18next"

import translationPortuguese from "../public/locales/pt/translation.json"
import translationEnglish from "../public/locales/en/translation.json"

const resources = {
    'en': {
        translation: translationEnglish
    },
    'pt-BR': {
        translation: translationPortuguese
    }
}

i18next
.use(initReactI18next)
.init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false
    }
})

export default i18next