import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { brandStore } from "../../../lib/state/slices/brandState";
import { TopbarPage } from "../../../components/shared/TopbarPage";
import { BrandForm } from "../../../components/brand/BrandForm";

export const BrandEdit = () => {
  const [dataT] = useTranslation("translation", { keyPrefix: "data" });
  const [interT] = useTranslation("translation", { keyPrefix: "interactive" });
  const dispatch = useAppDispatch();

  const navigateBack = () => dispatch(brandStore.actions.displayAll());

  return (
    <Fragment>
      <TopbarPage
        title={`${interT("edit")} ${dataT("brand")}`}
        navBack={navigateBack}
      />
      <BrandForm />
    </Fragment>
  );
};
