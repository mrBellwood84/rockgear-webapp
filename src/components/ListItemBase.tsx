import { ListItem, ListItemButton, ListItemText } from "@mui/material";

interface IProps {
  primary: string;
  secondary?: string;
  allowClick: boolean;
  onClick: () => void;
}

export const ListItemBase = ({
  primary,
  secondary,
  allowClick,
  onClick,
}: IProps) => {
  const handleClick = allowClick ? onClick : () => null;

  return (
    <ListItem divider disablePadding>
      <ListItemButton
        onClick={handleClick}
        sx={{ cursor: allowClick ? "pointer" : "default" }}
      >
        <ListItemText
          primary={primary}
          secondary={secondary ? secondary : ""}
          primaryTypographyProps={{
            fontWeight: 600,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};
