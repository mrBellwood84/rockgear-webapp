import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Tooltip,
} from "@mui/material";
import { ChangeEvent, Fragment, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../lib/state/hooks";
import { AddCircle, Search } from "@mui/icons-material";

interface IProps {
  title: string;
  searchFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  addButtonClick: () => void;
  children?: ReactNode;
}

export const CardsViewBox = ({
  title,
  searchFieldChange,
  addButtonClick,
  children,
}: IProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "interactive" });
  const userRole = useAppSelector((state) => state.user.userRole);

  const theme = useTheme();
  const smBreak = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
          mb: 1,
        }}
      >
        <Typography variant={smBreak ? "h5" : "h4"} component="div">
          {title}
        </Typography>

        <TextField
          label={smBreak ? null : t("search")}
          variant="standard"
          size={smBreak ? "small" : "medium"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          onChange={searchFieldChange}
          sx={{
            width: smBreak ? 150 : 200,
          }}
        />
        {userRole === "admin" && !smBreak && (
          <Button
            variant="contained"
            color="success"
            startIcon={<AddCircle />}
            onClick={addButtonClick}
          >
            {t("create")}
          </Button>
        )}

        {userRole === "admin" && smBreak && (
          <Tooltip title={t("create")}>
            <IconButton color="success" onClick={addButtonClick}>
              <AddCircle fontSize="large" />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <Divider />
      <Grid container spacing={1} sx={{ mt: 1 }}>
        {children}
      </Grid>
    </Fragment>
  );
};
