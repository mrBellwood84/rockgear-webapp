import { Add, AddCircle } from "@mui/icons-material";
import { Button, IconButton, Tooltip } from "@mui/material";
import { Fragment } from "react";

interface IProps {
  title: string;
  onClick: () => void;
}

export const AddButtonResponsive = ({ title, onClick }: IProps) => {
  return (
    <Fragment>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={onClick}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      >
        {title}
      </Button>

      <Tooltip title={title}>
        <IconButton
          color="primary"
          onClick={onClick}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
          }}
        >
          <AddCircle fontSize="large" />
        </IconButton>
      </Tooltip>
    </Fragment>
  );
};
