"use client";

import { useMediaQuery } from "@mui/material";
import { useEffect, useRef } from "react";
import { useClientSideCookie } from "../cookie/clientSideCookies";
import { useAppDispatch } from "../states/hooks";
import { settingsStore } from "../states/stores/settingsStore";

interface IProps {
  cookieShouldUpdate: boolean;
}

export const ClientThemeResolver = ({ cookieShouldUpdate }: IProps) => {
  const { getSettings, setSettings } = useClientSideCookie();
  const dispatch = useAppDispatch();
  const clientPreferDark = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    const cookieSettings = getSettings();

    if (cookieShouldUpdate) {
      const { themeOptionSelected } = cookieSettings;
      cookieSettings.systemPreferDark = clientPreferDark;
      cookieSettings.themeOptionSelected = themeOptionSelected ?? "system";
      cookieSettings.themeUsed =
        themeOptionSelected !== "system"
          ? themeOptionSelected
          : clientPreferDark
          ? "dark"
          : "light";
      setSettings(cookieSettings);
    }
    dispatch(settingsStore.actions.updateTheme(cookieSettings));
  });

  return null;
};
