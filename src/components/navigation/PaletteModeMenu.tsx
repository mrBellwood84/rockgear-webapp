import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import { Fragment, MouseEvent, ReactElement, useEffect, useState } from "react";
import { ThemeModeSettingType, ThemeModeType } from "../../theme";
import {
  BrightnessMedium,
  DarkMode,
  LightMode,
  SettingsBrightness,
} from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { appSettingsStore } from "../../lib/redux/slices/appSettings";
import { useTranslation } from "react-i18next";

interface IMenuItem {
  key: ThemeModeSettingType;
  icon: ReactElement;
}

const menuItems: IMenuItem[] = [
  {
    key: "light",
    icon: <LightMode />,
  },
  {
    key: "dark",
    icon: <DarkMode />,
  },
  {
    key: "system",
    icon: <SettingsBrightness />,
  },
];

export const PaletteModeMenu = () => {
  const { t } = useTranslation("translation", { keyPrefix: "nav" });

  const [anc, setAnc] = useState<null | HTMLElement>(null);
  const open = Boolean(anc);
  const handleOpen = (e: MouseEvent<HTMLElement>) => setAnc(e.currentTarget);
  const handleClose = () => setAnc(null);

  const settings = useAppSelector((state) => state.appSettings);
  const dispatch = useAppDispatch();

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const setPaletteMode = (mode: ThemeModeSettingType) => {
    const theme: ThemeModeType =
      mode === "system" ? (prefersDarkMode ? "dark" : "light") : mode;
    dispatch(appSettingsStore.actions.setThemeMode(theme));
  };

  const loadPageTheme = () => {
    if (settings.themeSysPreferenceChecked) return;

    const theme =
      settings.themeModeSetting === "system"
        ? prefersDarkMode
          ? "dark"
          : "light"
        : settings.themeModeSetting;

    dispatch(appSettingsStore.actions.loadThemeMode(theme));
  };

  useEffect(() => {
    loadPageTheme();
  });

  return (
    <Fragment>
      <Tooltip title={t("modeHelper")} arrow>
        <Button onClick={handleOpen} sx={{ color: "inherit" }}>
          <BrightnessMedium fontSize="small" />
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anc}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        {menuItems.map((m) => (
          <MenuItem key={m.key} onClick={() => setPaletteMode(m.key)}>
            <ListItemIcon>{m.icon}</ListItemIcon>
            <ListItemText>{t(m.key)}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};
