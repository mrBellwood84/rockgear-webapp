import { ArrowBack } from "@mui/icons-material";
import { Box, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import { Fragment, ReactNode } from "react";

interface IProps {
  /** title to be displayed in top bar */
  title: string;
  /** set link to enable back arrow */
  navBack?: () => void;
  /** children of componen are placed in a box to the right in toolbar */
  children?: ReactNode;
}

export const TopbarPage = ({ title, navBack, children }: IProps) => {
  return (
    <Fragment>
      <Toolbar disableGutters>
        {navBack && (
          <IconButton
            color="primary"
            size="large"
            sx={{ mr: 2 }}
            onClick={navBack}
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
    </Fragment>
  );
};
