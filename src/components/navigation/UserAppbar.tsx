import {
  AppBar,
  Box,
  IconButton,
  SxProps,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { LanguageMenu } from "./LanguageMenu";
import { PaletteModeMenu } from "./PaletteModeMenu";
import { UserAccountMenu } from "./UserAccountMenu";
import { useTranslation } from "react-i18next";

interface IProps {
  toggleDrawer: () => void;
  sx?: SxProps;
}

export const UserAppbar = ({ toggleDrawer, sx }: IProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "nav" });

  return (
    <Box sx={{ cursor: "default", userSelect: "none", ...sx }}>
      <AppBar position="static" component={"nav"}>
        <Toolbar>
          <Tooltip title={t("menu")} arrow>
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
              fontWeight: 500,
              flexGrow: 1,
            }}
          >
            RockGear
          </Typography>
          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <PaletteModeMenu />
            <LanguageMenu />
            <UserAccountMenu />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
