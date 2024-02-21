import { Fragment } from "react";
import { BrandForm } from "../../../components/brand/BrandForm";
import { useAppDispatch } from "../../../lib/state/hooks";
import { brandStore } from "../../../lib/state/slices/brandState";
import { useTranslation } from "react-i18next";
import { TopbarPage } from "../../../components/shared/TopbarPage";

export const BrandCreate = () => {
  const [dataT] = useTranslation("translation", { keyPrefix: "data" });
  const [interT] = useTranslation("translation", { keyPrefix: "interactive" });

  const dispatch = useAppDispatch();

  const toMainClick = () => dispatch(brandStore.actions.displayAll());

  return (
    <Fragment>
      <TopbarPage
        title={`${interT("create")} ${dataT("brand")}`}
        navBack={toMainClick}
      />

      <BrandForm />
    </Fragment>
  );
};
