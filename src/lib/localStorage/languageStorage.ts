import { LanguageSupportType } from "../locales/language";

const key = "language";

export const useLanguageStorage = () => {
  return {
    setLanguage: (code: LanguageSupportType) => {
      localStorage.setItem(key, code);
    },
    getLanguage: () => {
      return localStorage.getItem(key) as LanguageSupportType;
    },
  };
};
