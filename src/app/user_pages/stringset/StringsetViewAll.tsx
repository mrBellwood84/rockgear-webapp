import { ChangeEvent, Fragment } from "react";
import { TopBar } from "../../../components/shared/TopBar";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../../lib/state/hooks";
import { Button, Grid } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { stringsetStore } from "../../../lib/state/slices/stringsetState";
import { StringsetCard } from "../../../components/stringset/StringsetCard";

export const StringsetViewAll = () => {
  const [dataT] = useTranslation("translation", { keyPrefix: "data" });
  const [interT] = useTranslation("translation", { keyPrefix: "interactive" });
  const isAdmin = useAppSelector((state) => state.user.userRole) === "admin";
  const filtered = useAppSelector((state) => state.stringset.filteredData);
  const dispatch = useDispatch();

  const createClick = () => dispatch(stringsetStore.actions.displayCreate());

  const searchFilter = (event: ChangeEvent<HTMLInputElement>) =>
    dispatch(stringsetStore.actions.filter(event.currentTarget.value));

  return (
    <Fragment>
      <TopBar title={dataT("stringsetPlural")} searchFieldChange={searchFilter}>
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
        {filtered.map((ss) => (
          <StringsetCard key={ss.id} stringset={ss} />
        ))}
      </Grid>
    </Fragment>
  );
};
