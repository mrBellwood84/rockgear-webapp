import { useSettingsStorage } from "@/lib/localStorage/settingsStorage";
import { useScopedI18n } from "@/lib/locales/client";
import { ThemeOptionType } from "@/lib/theme";
import {
  BrightnessMedium,
  DarkMode,
  LightMode,
  SettingsBrightness,
} from "@mui/icons-material";
import {
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Fragment, MouseEvent, ReactElement, useState } from "react";

interface IMenuItem {
  key: ThemeOptionType;
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

export const ThemeSelect = () => {
  const t = useScopedI18n("nav");
  const { getSettings, setSettings } = useSettingsStorage();

  const [anc, setAnc] = useState<null | HTMLElement>(null);
  const open = Boolean(anc);
  const handleOpen = (e: MouseEvent<HTMLElement>) => setAnc(e.currentTarget);
  const handleClose = () => setAnc(null);

  const setThemeClick = (option: ThemeOptionType) => {
    const settings = getSettings();
    settings.theme = option;
    setSettings(settings);
    location.reload();
  };

  return (
    <Fragment>
      <Tooltip title={t("themeSelect")}>
        <Button
          size="large"
          onClick={handleOpen}
          sx={{ color: "inherit", mr: 1 }}
        >
          <BrightnessMedium fontSize="medium" />
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
          <MenuItem key={m.key} onClick={() => setThemeClick(m.key)}>
            <ListItemIcon>{m.icon}</ListItemIcon>
            <ListItemText>{t(`theme.${m.key}`)}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};
