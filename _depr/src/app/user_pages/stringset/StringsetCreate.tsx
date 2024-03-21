import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../../lib/state/hooks";
import { stringsetStore } from "../../../lib/state/slices/stringsetState";
import { Fragment } from "react";
import { TopbarPage } from "../../../components/shared/TopbarPage";
import { StringsetForm } from "../../../components/stringset/StringsetForm";

export const StringsetCreate = () => {
  const { t } = useTranslation("translation");
  const dispatch = useAppDispatch();

  const title = `${t("interactive.create")} ${t("data.stringset")}`;

  const toMainClick = () => dispatch(stringsetStore.actions.displayAll());

  return (
    <Fragment>
      <TopbarPage title={title} navBack={toMainClick} />
      <StringsetForm />
    </Fragment>
  );
};
