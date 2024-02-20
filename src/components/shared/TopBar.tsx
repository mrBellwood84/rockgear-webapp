import { ArrowBack, Search } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ChangeEvent, Fragment, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface IProps {
  /** title to be displayed in top bar */
  title: string;
  /** set link to enable back arrow */
  navBack?: string;
  /** handle text change in search field */
  searchFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /** children of componen are placed in a box to the right in toolbar */
  children?: ReactNode;
}

export const TopBar = ({
  title,
  navBack,
  children,
  searchFieldChange,
}: IProps) => {
  const navigate = useNavigate();
  const [interT] = useTranslation("translation", { keyPrefix: "interactive" });

  const theme = useTheme();
  const smBreak = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <Toolbar disableGutters>
        {navBack && (
          <IconButton
            color="primary"
            size="large"
            sx={{ mr: 2 }}
            onClick={() => navigate(navBack)}
          >
            <ArrowBack fontSize="inherit" />
          </IconButton>
        )}
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {children && <Box>{children}</Box>}
      </Toolbar>
      <Divider />
      <Toolbar disableGutters>
        <TextField
          label={interT("search")}
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
    </Fragment>
  );
};
