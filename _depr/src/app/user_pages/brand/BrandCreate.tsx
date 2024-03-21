import { Fragment } from "react";
import { BrandForm } from "../../../components/brand/BrandForm";
import { useAppDispatch } from "../../../lib/state/hooks";
import { brandStore } from "../../../lib/state/slices/brandState";
import { useTranslation } from "react-i18next";
import { TopbarPage } from "../../../components/shared/TopbarPage";

export const BrandCreate = () => {
  const { t } = useTranslation("translation");
  const dispatch = useAppDispatch();

  const title = `${t("interactive.create")} ${t("data.brand")}`;

  const toMainClick = () => dispatch(brandStore.actions.displayAll());

  return (
    <Fragment>
      <TopbarPage title={title} navBack={toMainClick} />
      <BrandForm />
    </Fragment>
  );
};
