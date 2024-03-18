import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          "posts": "post",
          "seguidores": "followers",
          "seguidos": "following",
          "userName": "User Name",
          "nombre": "Full Name",
          "descripcion": "Profile Description",
          "url": "Personal blog URL",
          "saveChanges": "Save Changes"
        }
      },
      es: {
        translation: {
          "post": "publicaciones",
          "seguidores": "seguidores",
          "seguidos": "seguidos",
          "username": "Nombre de usuario",
          "nombre": "Nombre completo",
          "descripcion": "Descripción de perfil",
          "url": "URL de blog personal",
          "saveChanges": "Guardar Cambios"
        }
      }
    }
  });

export default i18n;