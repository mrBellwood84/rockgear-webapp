import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  primary: string;
  secondary?: string;
  allowAction: boolean;
  clickSelect?: () => void;
  clickDelete?: () => void;
}

export const ListItemBase = ({
  primary,
  secondary,
  allowAction,
  clickSelect,
  clickDelete,
}: IProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "interactive" });

  return (
    <Fragment>
      <ListItem
        divider
        disablePadding
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        {/* small list item with edit action on click */}
        {allowAction && (
          <ListItemButton onClick={clickSelect}>
            <ListItemText
              primary={primary}
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItemButton>
        )}
        {/* small list item with no click action */}
        {!allowAction && (
          <ListItemText
            primary={primary}
            primaryTypographyProps={{ fontWeight: 600 }}
            sx={{ p: 1 }}
          />
        )}
      </ListItem>

      <ListItem
        divider
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        <ListItemText
          primary={primary}
          secondary={secondary}
          primaryTypographyProps={{ fontWeight: 600, fontSize: "1.35rem" }}
        />
        <Box>
          <Tooltip title={t("edit")}>
            <IconButton color="primary" size="large" onClick={clickSelect}>
              <Edit fontSize="inherit" />
            </IconButton>
          </Tooltip>

          <Tooltip title={t("delete")}>
            <IconButton color="warning" size="large" onClick={clickDelete}>
              <Delete fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Box>
      </ListItem>
    </Fragment>
  );
};
