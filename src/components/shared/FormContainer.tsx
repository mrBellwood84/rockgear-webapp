import { Alert, Box, Button, IconButton } from "@mui/material";
import { ReactNode } from "react";
import { IAlertMessage } from "../../lib/types/alertTypes";
import { Close } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { ComponentLoader } from "../loaders/ComponentLoader";

interface IProps {
  loading: boolean;
  alert: IAlertMessage | null;
  removeAlert: () => void;
  onSubmit: () => void;
  children?: ReactNode;
}

export const FormContainer = ({
  loading,
  alert,
  removeAlert,
  onSubmit,
  children,
}: IProps) => {
  const [interT] = useTranslation("translation", { keyPrefix: "interactive" });

  if (loading) {
    return (
      <Box sx={{ height: "25vh" }}>
        <ComponentLoader spinnerCount={5} text={interT("createPresent")} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        mt: 2,
        width: "100%",
        height: "max-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box component="form" onSubmit={onSubmit} noValidate autoComplete="off">
        {alert && (
          <Alert
            severity={alert.type}
            action={
              <IconButton size="small" onClick={removeAlert}>
                <Close fontSize="small" />
              </IconButton>
            }
          >
            {interT(alert.message)}
          </Alert>
        )}
        {children}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          {interT("create")}
        </Button>
      </Box>
    </Box>
  );
};
