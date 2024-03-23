"use client";

import { ReactNode, useRef } from "react";
import { I18nProviderClient, useChangeLocale } from "./client";
import { LanguageSupportType } from "./language";
import { useSettingsStorage } from "../localStorage/settingsStorage";

interface IProps {
  children: ReactNode;
  locale: LanguageSupportType | string;
}

export const LocaleProvider = ({ children, locale }: IProps) => {
  const languageResolved = useRef<boolean>(false);
  const { getSettings } = useSettingsStorage();
  const changeLocale = useChangeLocale();

  const resolveLanguage = () => {
    if (languageResolved.current) return;
    languageResolved.current = true;
    const lang = getSettings().language;
    if (!lang) return;
    changeLocale(lang);
  };

  resolveLanguage();

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
};
