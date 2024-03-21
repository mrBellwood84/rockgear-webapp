import { createTheme } from "@mui/material/styles";

export type ThemeType = "dark" | "light";
export type ThemeOptionsType = ThemeType | "system";

export const lightTheme = createTheme({});

export const darkTheme = createTheme({
  ...lightTheme,
  palette: { mode: "dark" },
});
