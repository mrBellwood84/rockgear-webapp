import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import { IBrand } from "../../models/brand/IBrand";
import { useAppDispatch, useAppSelector } from "../../lib/state/hooks";
import { getLocaleText } from "../../lib/locale/getTextLocale";
import { useTranslation } from "react-i18next";
import { brandStore } from "../../lib/state/slices/brandState";
import { Fragment, useState } from "react";
import { DeleteConfirmDialog } from "../DeleteConfirmDialog";
import { ComponentLoader } from "../loaders/ComponentLoader";
import { brandApiAgent } from "../../lib/apiAgent/brandApiAgent";
import { Close } from "@mui/icons-material";

interface IProps {
  brand: IBrand;
}

export const BrandCard = ({ brand }: IProps) => {
  const minCardHeight = 200;
  const cardImageHeight = 150;
  console.warn(
    "DEV :: Brand card get size from local variable. Cards or props should be sentralize for consistency"
  );

  const [deleteDialogOpen, setDeletedialogOpen] = useState<boolean>(false);

  const lang = useAppSelector((state) => state.settings.languageSelected);
  const userRole = useAppSelector((state) => state.user.userRole);
  const { t } = useTranslation("translation", { keyPrefix: "interactive" });
  const dispatch = useAppDispatch();

  const [deleteSpinner, setDeleteSpinner] = useState<boolean>(false);
  const [showDeleteErrorAlert, setShowDeleteErrorAlert] =
    useState<boolean>(false);

  const editClick = () => {
    dispatch(brandStore.actions.displayEditBrand(brand));
  };

  const deleteClick = () => setDeletedialogOpen(true);
  const deleteCancelClick = () => setDeletedialogOpen(false);

  const deleteConfirmClick = async () => {
    setDeleteSpinner(true);
    setDeletedialogOpen(false);

    const success = await brandApiAgent.delete(brand.id);
    if (!success) {
      setDeleteSpinner(false);
      setShowDeleteErrorAlert(true);
      return;
    }
    dispatch(brandStore.actions.removeSingleBrand(brand.id));
  };

  if (deleteSpinner)
    return (
      <Grid
        item
        sx={{
          minHeight: minCardHeight,
          width: {
            xs: "100%",
            sm: "50%",
            md: "33.3%",
            lg: "25%",
          },
        }}
      >
        <Card
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <ComponentLoader text={`${t("deletePresent")} "${brand.name}"`} />
        </Card>
      </Grid>
    );

  return (
    <Fragment>
      <DeleteConfirmDialog
        itemName={brand.name}
        open={deleteDialogOpen}
        cancelClick={deleteCancelClick}
        confirmClick={deleteConfirmClick}
      />
      <Grid
        item
        sx={{
          width: {
            xs: "100%",
            sm: "50%",
            md: "33.3%",
            lg: "25%",
          },
        }}
      >
        <Card>
          <Skeleton variant="rectangular" height={cardImageHeight} />
          <CardContent>
            <Typography variant="h6" component="div">
              {brand.name}
            </Typography>
            <Typography variant="body2" component="div">
              {getLocaleText(lang, brand.comment)}
            </Typography>
          </CardContent>
          {userRole === "admin" && (
            <Fragment>
              <Collapse in={showDeleteErrorAlert}>
                <Alert
                  severity="error"
                  action={
                    <IconButton
                      size="small"
                      onClick={() => setShowDeleteErrorAlert(false)}
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  }
                >
                  {t("deleteError")}
                </Alert>
              </Collapse>

              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button variant="text" color="primary" onClick={editClick}>
                  {t("edit")}
                </Button>
                <Button variant="text" color="error" onClick={deleteClick}>
                  {t("delete")}
                </Button>
              </CardActions>
            </Fragment>
          )}
        </Card>
      </Grid>
    </Fragment>
  );
};
