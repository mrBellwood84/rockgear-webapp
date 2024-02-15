import { Fragment } from "react";
import { BrandForm } from "../../../components/brand/BrandForm";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { brandStore } from "../../../lib/state/slices/brandState";
import { ArrowBack } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export const BrandCreateEditPage = () => {
  const [dataT] = useTranslation("translation", { keyPrefix: "data" });
  const [interT] = useTranslation("translation", { keyPrefix: "interactive" });

  const selectedBrand = useAppSelector((state) => state.brand.selectedBrand);
  const dispatch = useAppDispatch();

  const toMainClick = () => dispatch(brandStore.actions.displayBrandViewMain());

  return (
    <Fragment>
      <Toolbar disableGutters>
        <IconButton onClick={toMainClick} sx={{ mr: 2 }}>
          <ArrowBack />
        </IconButton>
        <Typography variant="h5">
          {selectedBrand && `${interT("edit")} ${dataT("brand")}`}
          {!selectedBrand && `${interT("create")} ${dataT("brand")}`}
        </Typography>
      </Toolbar>

      <BrandForm
        brandData={selectedBrand}
        sx={{
          ml: "auto",
          mr: "auto",
          width: { xs: "95%", sm: 500 },
        }}
      />
    </Fragment>
  );
};
