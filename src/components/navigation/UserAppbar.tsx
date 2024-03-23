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

interface IProps {
  sx?: SxProps;
}

export const UserAppbar = ({ sx }: IProps) => {
  console.warn("DEV :: Translation missing");

  const toggleDrawer = () => {};

  return (
    <Box component="nav" sx={{ userSelect: "none" }}>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="DEV :: menu button" arrow>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Typography
            variant="h5"
            component="a"
            href="/"
            noWrap
            sx={{
              ml: 2,
              color: "inherit",
              textDecoration: "none",
              fontWeight: 600,
              flexGrow: 1,
            }}
          >
            RockGear
          </Typography>
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <LanguageSelect />
            <UserAccountMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
