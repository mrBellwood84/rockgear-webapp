"use client";

import {
  ThemeOptionsType,
  ThemeType,
  darkTheme,
  lightTheme,
} from "@/lib/theme/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, useMediaQuery } from "@mui/material";
import { ReactNode } from "react";
import { useAppDispatch, useAppSelector, useAppStore } from "../states/hooks";
import { useClientSideCookie } from "../cookie/clientSideCookies";
import { settingsStore } from "../states/configs/settingsSlice";

interface IProps {
  children: ReactNode;
}

export const MuiThemeProvider = ({ children }: IProps) => {
  const { getTheme, setTheme } = useClientSideCookie();

  const dispatch = useAppDispatch();
  const selectedTheme = useAppSelector((state) => state.settings.themeSelected);
  const clientPreferDark = useMediaQuery("(prefers-color-scheme: dark)");

  const themeFromString = (selected: ThemeOptionsType) => {
    if (selected !== "system")
      return selected === "dark" ? darkTheme : lightTheme;
    return clientPreferDark ? darkTheme : lightTheme;
  };

  const resolveTheme = () => {
    if (selectedTheme) return themeFromString(selectedTheme);

    const fromCookie = getTheme() as ThemeType | undefined;
    if (fromCookie) {
      dispatch(settingsStore.actions.setThemeSelected(fromCookie));
      return themeFromString(fromCookie);
    }

    dispatch(settingsStore.actions.setThemeSelected("system"));
    setTheme("system");
    return themeFromString("system");
  };

  return (
    <ThemeProvider theme={() => resolveTheme()}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
