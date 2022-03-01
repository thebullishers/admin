import polyglotI18nProvider from 'ra-i18n-polyglot'
import englishMessages from 'ra-language-english'

export enum LOCALES {
  EN = 'en',
  FR = 'fr',
}

export const initialLocale = LOCALES.EN

export const i18nProvider = polyglotI18nProvider((locale) => {
  if (locale === initialLocale) {
    // initial call, must return synchronously
    return englishMessages;
  }
  if (locale === LOCALES.FR) {
    // return import('../i18n/fr.js').then((messages) => messages.default) // for later
    return import('ra-language-french').then((messages) => messages.default)
  }
  return englishMessages
}, initialLocale)



