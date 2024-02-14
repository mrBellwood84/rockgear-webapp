import { ITextLocale } from "../../models/ITextLocale";

export const getLocaleText = (currentLang: string, locales: ITextLocale[]) => {
  const defaultLang = "en";

  if (locales.length === 0) return null;

  let i = locales.findIndex((l) => l.code === currentLang);
  if (i === -1) locales.findIndex((l) => l.code === defaultLang);
  if (i === -1) i = 0;

  return locales[i].text;
};
