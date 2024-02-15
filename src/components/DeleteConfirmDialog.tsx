import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  itemName: string;
  open: boolean;
  cancelClick: () => void;
  confirmClick: () => void;
}

export const DeleteConfirmDialog = ({
  itemName,
  open,
  cancelClick,
  confirmClick,
}: IProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "interactive" });
  const [checked, setChecked] = useState<boolean>(false);

  const checkboxEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Dialog open={open} onClose={cancelClick}>
      <DialogTitle>
        {t("deleteDialogTitle")} <b>{itemName}?</b>
      </DialogTitle>

      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          {t("deleteDialogText")}
        </DialogContentText>

        <FormControlLabel
          label={t("deleteDialogConfirm")}
          control={<Checkbox onChange={checkboxEvent} />}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={cancelClick} variant="contained" color="error">
          {t("cancel")}
        </Button>
        <Button
          onClick={confirmClick}
          variant="outlined"
          size="small"
          disabled={!checked}
        >
          {t("delete")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
