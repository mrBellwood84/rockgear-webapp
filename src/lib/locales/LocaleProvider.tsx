"use client";

import { ReactNode, useRef } from "react";
import { I18nProviderClient, useChangeLocale } from "./client";
import { LanguageSupported } from "./language";
import { useLanguageStorage } from "../localStorage/languageStorage";

interface IProps {
  children: ReactNode;
  locale: LanguageSupported;
}

export const LocaleProvider = ({ children, locale }: IProps) => {
  const languageResolved = useRef<boolean>(false);
  const { getLanguage } = useLanguageStorage();
  const changeLocale = useChangeLocale();

  const resolveLanguage = () => {
    if (languageResolved.current) return;
    languageResolved.current = true;
    const lang = getLanguage();
    if (!lang) return;
    changeLocale(lang);
  };

  resolveLanguage();

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
};
