import tr from './tr.js';
import en from './en.js';

const LANG_KEY = 'app-language';
const translations = { tr, en };

export const i18n = {
  getLang() {
    return localStorage.getItem(LANG_KEY) || 'tr';
  },

  setLang(lang) {
    localStorage.setItem(LANG_KEY, lang);
    window.dispatchEvent(new Event('language-changed'));
  },

  t(key) {
    const lang = i18n.getLang();
    return translations[lang]?.[key] || key;
  }
};
