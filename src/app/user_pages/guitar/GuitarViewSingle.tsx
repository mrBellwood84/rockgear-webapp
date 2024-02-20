import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { guitarStore } from "../../../lib/state/slices/guitarState";
import { Fragment } from "react";
import { TopbarPage } from "../../../components/shared/TopbarPage";

export const GuitarViewSingle = () => {
  const [dataT] = useTranslation("translation", { keyPrefix: "data" });
  const selected = useAppSelector((state) => state.guitar.selected);
  const dispatch = useAppDispatch();
  const navigateBack = () => dispatch(guitarStore.actions.displayAll());

  return (
    <Fragment>
      <TopbarPage title={dataT("guitar")} navBack={navigateBack} />
      <h3>
        SELECTED GUITAR: {selected?.brand.name} {selected?.model}
      </h3>
    </Fragment>
  );
};
