import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { brandStore } from "../../../lib/state/slices/brandState";
import { TopbarPage } from "../../../components/shared/TopbarPage";

export const BrandViewSingle = () => {
  const [dataT] = useTranslation("translation", { keyPrefix: "data" });
  const selected = useAppSelector((state) => state.brand.selected);
  const dispatch = useAppDispatch();

  const navigateBack = () => dispatch(brandStore.actions.displayAll());

  return (
    <Fragment>
      <TopbarPage title={dataT("brand")} navBack={navigateBack} />
      <h3>SELECTED BRAND: {selected?.name}</h3>
    </Fragment>
  );
};
