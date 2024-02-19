import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  /** title to be displayed in top bar */
  title: string;
  /** set link to enable back arrow */
  navBack?: string;
  /** children of componen are placed in a box to the right in toolbar */
  children?: ReactNode;
}

export const TopBar = ({ title, navBack, children }: IProps) => {
  const navigate = useNavigate();

  return (
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
  );
};
