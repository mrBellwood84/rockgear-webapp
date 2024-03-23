"use client";

import { useSettingsStorage } from "@/lib/localStorage/settingsStorage";
import { useScopedI18n } from "@/lib/locales/client";
import { INavLink } from "@/lib/models/INavlink";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";

interface IProps extends INavLink {}

export const UserDrawerItem = ({ textKey, href }: IProps) => {
  const t = useScopedI18n("nav.link");

  const settingsTheme = useSettingsStorage().getSettings().theme ?? "system";
  const perferDark = useMediaQuery("(prefers-color-scheme: dark)");
  const theme =
    settingsTheme !== "system" ? settingsTheme : perferDark ? "dark" : "light";

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={href}>
        <ListItemAvatar sx={{ mr: 1 }}>
          <Avatar
            src={`/graphic/drawer/${textKey}.png`}
            alt={`icon`}
            variant="square"
            sx={{ filter: theme === "dark" ? "invert()" : "none" }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={t(textKey)}
          primaryTypographyProps={{ variant: "body1" }}
        />
      </ListItemButton>
    </ListItem>
  );
};
