import i18n from 'i18next';
import Fetch from 'i18next-fetch-backend';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';
import translations from './assets/translation';

i18n
  .use(Fetch)
  .use(LngDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: translations,
    fallbackLng: 'en', // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    nsSeparator: '|',
    saveMissing: true,
    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    // backend: {
    //   addPath: 'http://localhost:3000/locales/add/{{lng}}/{{ns}}.json',
    //   jsonIndent: 2,
    //   requestOptions: {
    //     mode: 'cors',
    //     credentials: 'same-origin',
    //     cache: 'default',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // },
    react: {
      bindI18n: 'languageChanged',
      // bindI18nStore: '',
      transEmptyNodeValue: '',
      // transSupportBasicHtmlNodes: true,
      // transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false,
    }
  }, () => {
    console.error('callback!!!');
  }).then(data => {
    console.error('data', data);
});

export default i18n;
