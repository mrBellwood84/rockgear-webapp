import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { INavLink } from "../../lib/navlinks";
import { dark } from "@mui/material/styles/createPalette";

interface IProps extends INavLink {}

export const DrawerItem = ({ textkey, href, iconPath }: IProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={href} sx={{ pl: 3, pr: 6 }}>
        <ListItemAvatar>
          <Avatar
            alt={textkey}
            src={iconPath}
            variant="square"
            sx={{ filter: dark ? "invert()" : "none" }}
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
