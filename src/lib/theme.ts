import { createTheme } from "@mui/material";

export type ThemeType = "dark" | "light";
export type ThemeOptionType = ThemeType | "system";

export const useTheme = (mode: ThemeType) => {
  return createTheme({
    palette: {
      mode,
    },
  });
};
