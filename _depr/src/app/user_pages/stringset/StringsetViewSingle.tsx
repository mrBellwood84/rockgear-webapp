import { Fragment } from "react";
import { TopbarPage } from "../../../components/shared/TopbarPage";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { stringsetStore } from "../../../lib/state/slices/stringsetState";

export const StringsetViewSingle = () => {
  const [dataT] = useTranslation("translation", { keyPrefix: "data" });
  const selected = useAppSelector((state) => state.stringset.selected);
  const dispatch = useAppDispatch();

  const navigateBack = () => dispatch(stringsetStore.actions.displayAll());

  return (
    <Fragment>
      <TopbarPage title={dataT("stringset")} navBack={navigateBack} />
      <h3>
        SELECTED STRINGSET: {selected?.brand.name} - {selected?.name}
      </h3>
    </Fragment>
  );
};
