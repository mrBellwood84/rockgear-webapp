import { Search } from "@mui/icons-material";
import {
  InputAdornment,
  TextField,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  searchFieldChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ToolbarPage = ({ searchFieldChange }: IProps) => {
  const [interT] = useTranslation("translation", { keyPrefix: "interactive" });

  const theme = useTheme();
  const smBreak = useMediaQuery(theme.breakpoints.down("sm"));

  return (
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
  );
};
