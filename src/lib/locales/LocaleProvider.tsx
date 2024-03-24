"use client";

import { ReactNode, useEffect, useRef } from "react";
import { I18nProviderClient, useChangeLocale } from "./client";
import { LanguageSupportType, languagesSupported } from "./language";
import { useClientSideCookie } from "../cookie/clientSideCookies";

interface IProps {
  children: ReactNode;
  locale: LanguageSupportType | string;
}

export const LocaleProvider = ({ children, locale }: IProps) => {
  const changeLocale = useChangeLocale();
  const { getSettings } = useClientSideCookie();

  const resolveLocaleOnPageLoad = () => {
    const selectedLocale = getSettings().language ?? navigator.language;
    const supported = languagesSupported.includes(selectedLocale);
    const lang = (supported ? selectedLocale : "en") as LanguageSupportType;
    if (lang === locale) return;
    changeLocale(lang);
  };

  useEffect(() => {
    resolveLocaleOnPageLoad();
  });

  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
};
