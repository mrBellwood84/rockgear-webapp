import { createTheme } from "@mui/material";

export type ThemeModeType = "light" | "dark";
export type ThemeModeSettingType = "light" | "dark" | "system";

export const lightTheme = createTheme({
  typography: {
    button: {
      fontWeight: 600,
    },
  },
});

export const darkTheme = createTheme({
  ...lightTheme,
  palette: { mode: "dark" },
});
