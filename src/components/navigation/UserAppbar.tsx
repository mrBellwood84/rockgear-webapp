"use client";

import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  SxProps,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { LanguageSelect } from "./LanguageSelect";
import { UserAccountMenu } from "./UserAccountMenu";
import { useScopedI18n } from "@/lib/locales/client";
import { ThemeSelect } from "./ThemeSelect";

interface IProps {
  menuClick: () => void;
}

export const UserAppbar = ({ menuClick }: IProps) => {
  const t = useScopedI18n("nav");

  return (
    <Box component="nav" sx={{ userSelect: "none" }}>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title={t("menu")} arrow>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={menuClick}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography
            variant="h5"
            component="a"
            href="/dashboard"
            noWrap
            sx={{
              ml: 2,
              p: 1,
              color: "inherit",
              textDecoration: "none",
              fontWeight: 600,
              letterSpacing: 2.5,
            }}
          >
            RockGear
          </Typography>
          <Box
            sx={{
              ml: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ThemeSelect />
            <LanguageSelect />
            <UserAccountMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
