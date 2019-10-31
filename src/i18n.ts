import i18n from 'i18next';
import Fetch from 'i18next-fetch-backend';
import { initReactI18next } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';

import en from './assets/locales/en/translation.json';
import uk from './assets/locales/uk/translation.json';

i18n
  .use(Fetch)
  .use(LngDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en, uk
    },
    ns: 'homePage',
    fallbackLng: 'en', // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    nsSeparator: '|',
    saveMissing: true,
    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    backend: {
      addPath: 'i18n-server/locales/add/{{lng}}/{{ns}}',
      jsonIndent: 2,
      requestOptions: {
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'default',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    },
    react: {
      bindI18n: 'languageChanged',
      transEmptyNodeValue: '',
      useSuspense: false
    }
  });

export default i18n;
