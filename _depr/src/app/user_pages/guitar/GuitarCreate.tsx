import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { TopbarPage } from "../../../components/shared/TopbarPage";
import { useAppDispatch } from "../../../lib/state/hooks";
import { guitarStore } from "../../../lib/state/slices/guitarState";
import { GuitarForm } from "../../../components/guitar/GuitarForm";

export const GuitarCreate = () => {
  const { t } = useTranslation("translation");
  const dispatch = useAppDispatch();

  const title = `${t("interactive.create")} ${t("data.guitar")}`;

  const toMainClick = () => dispatch(guitarStore.actions.displayAll());

  return (
    <Fragment>
      <TopbarPage title={title} navBack={toMainClick} />
      <GuitarForm />
    </Fragment>
  );
};
