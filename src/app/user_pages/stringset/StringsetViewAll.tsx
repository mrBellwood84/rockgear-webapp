import { ChangeEvent, Fragment } from "react";
import { TopbarPage } from "../../../components/shared/TopbarPage";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../lib/state/hooks";
import { Divider, Grid, List } from "@mui/material";
import { useDispatch } from "react-redux";
import { stringsetStore } from "../../../lib/state/slices/stringsetState";
import { StringsetCard } from "../../../components/stringset/StringsetCard";
import { StringsetListItem } from "../../../components/stringset/StringsetListItem";
import { ToolbarPage } from "../../../components/shared/ToolbarPage";
import { AddButtonResponsive } from "../../../components/shared/AddButtonResponsive";

export const StringsetViewAll = () => {
  const [dataT] = useTranslation("translation", { keyPrefix: "data" });
  const [interT] = useTranslation("translation", { keyPrefix: "interactive" });
  const isAdmin = useAppSelector((state) => state.user.userRole) === "admin";
  const filtered = useAppSelector((state) => state.stringset.filteredData);
  const dispatch = useDispatch();

  const createClick = () => dispatch(stringsetStore.actions.displayCreate());

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(stringsetStore.actions.filter(event.currentTarget.value));

  return (
    <Fragment>
      <TopbarPage title={dataT("stringsetPlural")}>
        {isAdmin && (
          <AddButtonResponsive title={interT("create")} onClick={createClick} />
        )}
      </TopbarPage>

      <Divider />

      <ToolbarPage searchFieldChange={handleSearch} />

      <Grid container spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
        {filtered.map((ss) => (
          <StringsetCard key={ss.id} stringset={ss} />
        ))}
      </Grid>

      <List sx={{ display: { xs: "block", sm: "none" } }}>
        {filtered.map((ss) => (
          <StringsetListItem key={ss.id} stringset={ss} />
        ))}
      </List>
    </Fragment>
  );
};
