"use server";

import { ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkThemeOrgin, lightThemeOrgin } from "./theme";
import { useServerSideCookie } from "../cookie/serverSideCookies";
import { ClientThemeResolver } from "./ClientThemeResolver";

interface IProps {
  children: ReactNode;
}

export const AppThemeProvider = async ({ children }: IProps) => {
  const { getSetting } = useServerSideCookie();

  const darkTheme = darkThemeOrgin;
  const lightTheme = lightThemeOrgin;

  const cookieSettings = getSetting();

  const preferDark = cookieSettings.systemPreferDark ?? false;
  const selectedTheme = cookieSettings.themeOptionSelected ?? "system";

  const themeStr =
    selectedTheme !== "system" ? selectedTheme : preferDark ? "dark" : "light";

  const theme = themeStr === "dark" ? darkTheme : lightTheme;

  const updateCookie: boolean =
    !cookieSettings ||
    !cookieSettings.themeOptionSelected ||
    !cookieSettings.systemPreferDark ||
    !cookieSettings.themeUsed ||
    cookieSettings.themeOptionSelected === "system";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ClientThemeResolver cookieShouldUpdate={updateCookie} />
      {children}
    </ThemeProvider>
  );
};
