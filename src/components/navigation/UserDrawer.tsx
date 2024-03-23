"use client";

import { useScopedI18n } from "@/lib/locales/client";
import { primaryNavLinks, secondaryNavLinks } from "@/lib/navlinks";
import { ChevronLeft } from "@mui/icons-material";
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
import { UserDrawerItem } from "./UserDrawerItem";

interface IProps {
  open: boolean;
  closeDrawer: () => void;
}

export const UserDrawer = ({ open, closeDrawer }: IProps) => {
  const t = useScopedI18n("nav");
  return (
    <Drawer open={open} sx={{ userSelect: "none" }}>
      <Box
        onClick={closeDrawer}
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

          {primaryNavLinks.map((pl) => (
            <UserDrawerItem
              key={`navlink-${pl.textKey}`}
              textKey={pl.textKey}
              href={pl.href}
            />
          ))}

          <Divider />

          {secondaryNavLinks.map((sl) => (
            <UserDrawerItem
              key={`navlink-${sl.textKey}`}
              textKey={sl.textKey}
              href={sl.href}
            />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
