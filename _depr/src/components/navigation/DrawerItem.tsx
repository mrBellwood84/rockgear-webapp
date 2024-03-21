import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { INavLink } from "../../lib/navlinks";
import { useAppSelector } from "../../lib/state/hooks";

interface IProps extends INavLink {}

export const DrawerItem = ({ textkey, href, iconPath }: IProps) => {
  const theme = useAppSelector((state) => state.settings.themeMode);

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={href} sx={{ pl: 3, pr: 6 }}>
        <ListItemAvatar>
          <Avatar
            alt={textkey}
            src={iconPath}
            variant="square"
            sx={{ filter: theme === "dark" ? "invert()" : "none" }}
          />
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="h6" sx={{ fontWeight: 400 }}>
            {textkey}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
