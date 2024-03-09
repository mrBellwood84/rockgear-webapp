import { ChangeEvent, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { brandStore } from "../../../lib/state/slices/brandState";
import { List } from "@mui/material";
import { BrandListItem } from "../../../components/brand/BrandListItem";
import { TopbarPage } from "../../../components/shared/TopbarPage";
import { ToolbarPage } from "../../../components/shared/ToolbarPage";
import { AddButtonResponsive } from "../../../components/shared/AddButtonResponsive";

export const BrandViewAll = () => {
  const isAdmin = useAppSelector((state) => state.user.userRole) === "admin";
  const brandsFiltered = useAppSelector((state) => state.brand.filteredData);
  const [dataT] = useTranslation("translation", { keyPrefix: "data" });
  const [interT] = useTranslation("translation", { keyPrefix: "interactive" });
  const dispatch = useAppDispatch();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(brandStore.actions.filter(event.currentTarget.value));

  const createClick = () => dispatch(brandStore.actions.displayCreate());

  return (
    <Fragment>
      <TopbarPage title={dataT("brandPlural")}>
        {isAdmin && (
          <AddButtonResponsive title={interT("create")} onClick={createClick} />
        )}
      </TopbarPage>
      <ToolbarPage searchFieldChange={handleSearch} />
      <List>
        {brandsFiltered.map((b) => (
          <BrandListItem key={b.id} brand={b} />
        ))}
      </List>

      {/* <Grid container spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
        {brandsFiltered.map((b) => (
          <BrandCard key={b.id} brand={b} />
        ))}
      </Grid>

      <List sx={{ display: { xs: "block", sm: "none" } }}>
        {brandsFiltered.map((b) => (
          <BrandListItem key={b.id} brand={b} />
        ))}
      </List> */}
    </Fragment>
  );
};
