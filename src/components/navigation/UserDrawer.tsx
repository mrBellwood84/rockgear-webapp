import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { navlinks_user } from "../../lib/navlinks";
import { DrawerItem } from "./DrawerItem";
import { useTranslation } from "react-i18next";
import { ChevronLeft } from "@mui/icons-material";

interface IProps {
  open: boolean;
  toggleOpen: () => void;
}

export const UserDrawer = ({ open, toggleOpen }: IProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "nav" });

  return (
    <Drawer variant="temporary" open={open} sx={{ userSelect: "none" }}>
      <Box
        onClick={toggleOpen}
        sx={{
          overflow: "auto",
          minWidth: { xs: "100vw", sm: "50vw", md: "33vw" },
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton
              sx={{ pl: 3, pr: 6, display: "flex", justifyContent: "flex-end" }}
            >
              <ListItemIcon>
                <ChevronLeft />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6" sx={{ fontWeight: 400 }}>
                  {t("close")}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <Divider />

          {navlinks_user.primary.map((p) => (
            <DrawerItem
              key={`user-drawer-item-${p.textkey}`}
              textkey={t(p.textkey)}
              href={p.href}
              iconPath={p.iconPath}
            />
          ))}

          <Divider />

          {navlinks_user.secondary.map((s) => (
            <DrawerItem
              key={`user-drawer-item-${s.textkey}`}
              textkey={t(s.textkey)}
              href={s.href}
              iconPath={s.iconPath}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
