"use client";

import { ReactNode, useRef } from "react";
import { ThemeType, useTheme } from "./theme";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { useSettingsStorage } from "./localStorage/settingsStorage";

interface IProps {
  children: ReactNode;
}

export const AppThemeProvider = ({ children }: IProps) => {
  const { getSettings } = useSettingsStorage();
  const themeResolved = useRef<ThemeType>();
  const perferDark = useMediaQuery("(prefers-color-scheme: dark)");

  const resolveTheme = () => {
    if (themeResolved.current) return;
    const themeSetting = getSettings().theme ?? "system";
    if (themeSetting !== "system") themeResolved.current = themeSetting;
    else themeResolved.current = perferDark ? "dark" : "light";
  };

  resolveTheme();

  const theme = useTheme(themeResolved.current ?? "light");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
