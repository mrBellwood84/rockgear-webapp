"use client";

import { useScopedI18n } from "@/lib/locales/client";
import { INavLink } from "@/lib/models/INavlink";
import { useAppSelector } from "@/lib/states/hooks";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface IProps extends INavLink {}

export const UserDrawerItem = ({ textKey, href }: IProps) => {
  const t = useScopedI18n("nav.link");

  const theme = useAppSelector((state) => state.settings.themeUsed);

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
