'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import enHome from '../public/locales/en/home.json';
import thHome from '../public/locales/th/home.json';
import enLayout from '../public/locales/en/layout.json';
import thLayout from '../public/locales/th/layout.json';
import enForm from '../public/locales/en/form.json';
import thForm  from '../public/locales/th/form.json';
import enTable from '../public/locales/en/table.json';
import thTable from '../public/locales/th/table.json';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: enHome,
        layout: enLayout,
        form: enForm,
        table: enTable,
      },
      th: {
        home: thHome,
        layout: thLayout,
        form: thForm,
        table: thTable,
      }
    },
    lng: 'en', 
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;


