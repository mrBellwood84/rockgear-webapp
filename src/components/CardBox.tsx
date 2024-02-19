import {
  Divider,
  Grid,
  InputAdornment,
  TextField,
  useTheme,
  useMediaQuery,
  Toolbar,
} from "@mui/material";
import { ChangeEvent, Fragment, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Search } from "@mui/icons-material";

interface IProps {
  searchFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}

export const CardBox = ({ searchFieldChange, children }: IProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "interactive" });

  const theme = useTheme();
  const smBreak = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <Divider />
      <Toolbar disableGutters sx={{}}>
        <TextField
          label={smBreak ? null : t("search")}
          variant="standard"
          size="small"
          margin="dense"
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
      </Toolbar>

      <Grid container spacing={1} sx={{ mt: 1 }}>
        {children}
      </Grid>
    </Fragment>
  );
};
