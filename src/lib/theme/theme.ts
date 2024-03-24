"use client";
import { createTheme } from "@mui/material";

export type ThemeType = "dark" | "light";
export type ThemeOptionType = ThemeType | "system";

export const lightThemeOrgin = createTheme({});

export const darkThemeOrgin = createTheme({
  ...lightThemeOrgin,
  palette: { mode: "dark" },
});
