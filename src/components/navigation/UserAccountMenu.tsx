import { useClientSideCookie } from "@/lib/cookie/clientSideCookies";
import { useScopedI18n } from "@/lib/locales/client";
import { AccountCircle, Settings, Logout } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Fragment, MouseEvent, useState } from "react";

export const UserAccountMenu = () => {
  const t = useScopedI18n("nav");

  const [anc, setAnc] = useState<null | HTMLElement>(null);
  const open = Boolean(anc);
  const handleOpen = (e: MouseEvent<HTMLElement>) => setAnc(e.currentTarget);
  const handleClose = () => setAnc(null);

  const { deleteLogin } = useClientSideCookie();

  const logoutAction = () => {
    deleteLogin();
    window.location.replace("/");
  };

  const avatarSize = 32;

  return (
    <Fragment>
      <Tooltip title={t("user")} arrow>
        <Button size="small" onClick={handleOpen}>
          <Avatar sx={{ height: avatarSize, width: avatarSize }} />
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
        <MenuItem component="a" href="#profile">
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText>{t("profile")}</ListItemText>
        </MenuItem>
        <MenuItem component="a" href="#settings">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText>{t("settings")}</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={logoutAction}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText>{t("signout")}</ListItemText>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};
