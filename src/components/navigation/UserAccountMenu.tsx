import { AccountCircle, Logout, Settings } from "@mui/icons-material";
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
import { useTranslation } from "react-i18next";

export const UserAccountMenu = () => {
  const { t } = useTranslation("translation", { keyPrefix: "nav" });

  const [anc, setAnc] = useState<null | HTMLElement>(null);
  const open = Boolean(anc);
  const handleOpen = (e: MouseEvent<HTMLElement>) => setAnc(e.currentTarget);
  const handleClose = () => setAnc(null);

  const avatarSize = 28;
  return (
    <Fragment>
      <Tooltip title={t("accountHelper")} arrow>
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
        <MenuItem component="a" href="#signout">
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText>{t("logout")}</ListItemText>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};
