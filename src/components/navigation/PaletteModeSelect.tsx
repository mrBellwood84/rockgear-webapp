"use client";

import {
  BrightnessMedium,
  DarkMode,
  LightMode,
  SettingsBrightness,
} from "@mui/icons-material";
import {
  Tooltip,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Fragment, MouseEvent, ReactElement, useState } from "react";
import { ThemeOptionsType } from "@/lib/theme/theme";
import { useAppDispatch } from "@/lib/states/hooks";
import { settingsStore } from "@/lib/states/configs/settingsSlice";
import { useClientSideCookie } from "@/lib/cookie/clientSideCookies";

interface IMenuItem {
  key: ThemeOptionsType;
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
  console.warn("DEV :: Translation missing");

  const { setTheme } = useClientSideCookie();

  const dispatch = useAppDispatch();

  const [anc, setAnc] = useState<null | HTMLElement>(null);
  const open = Boolean(anc);
  const handleOpen = (e: MouseEvent<HTMLElement>) => setAnc(e.currentTarget);
  const handleClose = () => setAnc(null);

  const setThemeOnChange = (option: ThemeOptionsType) => {
    setTheme(option);
    dispatch(settingsStore.actions.setThemeSelected(option));
  };

  return (
    <Fragment>
      <Tooltip title="DEV :: Change light mode" arrow>
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
          <MenuItem key={m.key} onClick={() => setThemeOnChange(m.key)}>
            <ListItemIcon>{m.icon}</ListItemIcon>
            <ListItemText>DEV :: TEXT</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};
