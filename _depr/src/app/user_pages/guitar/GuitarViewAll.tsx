import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../lib/state/hooks";
import { ChangeEvent, Fragment } from "react";
import { guitarStore } from "../../../lib/state/slices/guitarState";
import { TopbarPage } from "../../../components/shared/TopbarPage";
import { Grid, List } from "@mui/material";
import { GuitarCard } from "../../../components/guitar/GuitarCard";
import { GuitarListItem } from "../../../components/guitar/GuitarListItem";
import { ToolbarPage } from "../../../components/shared/ToolbarPage";
import { AddButtonResponsive } from "../../../components/shared/AddButtonResponsive";

export const GuitarViewAll = () => {
  const [dataT] = useTranslation("translation", { keyPrefix: "data" });
  const [interT] = useTranslation("translation", { keyPrefix: "interactive" });
  const filtered = useAppSelector((state) => state.guitar.filteredData);
  const dispatch = useDispatch();

  const createClick = () => dispatch(guitarStore.actions.displayCreate());

  const searchFilter = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(guitarStore.actions.filter(event.target.value));

  return (
    <Fragment>
      <TopbarPage title={dataT("guitarPlural")}>
        <AddButtonResponsive title={interT("create")} onClick={createClick} />
      </TopbarPage>

      <ToolbarPage searchFieldChange={searchFilter} />

      <Grid container spacing={1} sx={{ display: { xs: "none", sm: "flex" } }}>
        {filtered.map((g) => (
          <GuitarCard key={g.id} guitar={g} />
        ))}
      </Grid>

      <List sx={{ display: { xs: "block", sm: "none" } }}>
        {filtered.map((g) => (
          <GuitarListItem key={g.id} guitar={g} />
        ))}
      </List>
    </Fragment>
  );
};
