import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../lib/state/hooks";
import { ChangeEvent, Fragment } from "react";
import { guitarStore } from "../../../lib/state/slices/guitarState";
import { TopBar } from "../../../components/shared/TopBar";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { CardBox } from "../../../components/CardBox";
import { GuitarCard } from "../../../components/guitar/GuitarCard";

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
      <TopBar title={dataT("guitarPlural")}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={createClick}
        >
          {interT("create")}
        </Button>
      </TopBar>
      <CardBox searchFieldChange={searchFilter}>
        {filtered.map((g) => (
          <GuitarCard key={g.id} guitar={g} />
        ))}
      </CardBox>
    </Fragment>
  );
};
