import { BrandCard } from "../../../components/brand/BrandCard";
import { ChangeEvent, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { brandStore } from "../../../lib/state/slices/brandState";
import { TopBar } from "../../../components/shared/TopBar";
import { Button, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";

export const BrandViewAll = () => {
  const isAdmin = useAppSelector((state) => state.user.userRole) === "admin";
  const brandsFiltered = useAppSelector((state) => state.brand.filteredData);
  const [dataT] = useTranslation("translation", { keyPrefix: "data" });
  const [interT] = useTranslation("translation", { keyPrefix: "interactive" });
  const dispatch = useAppDispatch();

  const filterDataArr = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(brandStore.actions.filter(event.currentTarget.value));

  const createClick = () => dispatch(brandStore.actions.displayCreate());

  return (
    <Fragment>
      <TopBar title={dataT("brandPlural")} searchFieldChange={filterDataArr}>
        {isAdmin && (
          <Button
            variant="contained"
            color="success"
            startIcon={<Add />}
            onClick={createClick}
          >
            {interT("create")}
          </Button>
        )}
      </TopBar>

      <Grid container spacing={1}>
        {brandsFiltered.map((b) => (
          <BrandCard key={b.id} brand={b} />
        ))}
      </Grid>
    </Fragment>
  );
};
