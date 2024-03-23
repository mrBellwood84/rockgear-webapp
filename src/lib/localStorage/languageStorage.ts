import { LanguageSupported } from "../locales/language";

const key = "language";

export const useLanguageStorage = () => {
  return {
    setLanguage: (code: LanguageSupported) => {
      localStorage.setItem(key, code);
    },
    getLanguage: () => {
      return localStorage.getItem(key) as LanguageSupported;
    },
  };
};
