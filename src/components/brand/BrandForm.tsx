import { TextField } from "@mui/material";
import { IBrand } from "../../models/brand/IBrand";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ITextLocale } from "../../models/ITextLocale";
import { IAlertMessage } from "../../lib/types/alertTypes";
import { brandApiAgent } from "../../lib/apiAgent/brandApiAgent";
import { useAppDispatch } from "../../lib/state/hooks";
import { brandStore } from "../../lib/state/slices/brandState";
import { v4 } from "uuid";
import { useState } from "react";
import { LocaleFormInput } from "../shared/LocaleFormInput";
import { FormContainer } from "../shared/FormContainer";

interface FormValues {
  name: string;
  description: ITextLocale[];
}

export const BrandForm = () => {
  const { t } = useTranslation("translation");

  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<IAlertMessage | null>(null);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const updateNoteLocales = (locales: ITextLocale[]) => {
    const filtered = locales.filter((x) => x.text !== "");
    setValue("description", filtered);
  };

  const createBrand: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    const newData: IBrand = {
      id: v4(),
      name: data.name,
      description: data.description,
    };

    const success = await brandApiAgent.post();
    if (success) {
      dispatch(brandStore.actions.addSingle(newData));
      return;
    }

    setLoading(false);
    setAlert({ type: "error", message: "createError" });
  };

  return (
    <FormContainer
      loading={loading}
      alert={alert}
      removeAlert={() => setAlert(null)}
      onSubmit={handleSubmit(createBrand)}
    >
      <TextField
        id="brand-name"
        label={t("data.name")}
        variant="standard"
        margin="dense"
        fullWidth
        {...register("name", { required: true })}
        helperText={errors.name && t("form.nameMissing")}
      />

      <LocaleFormInput
        elemId="brand-note-locale"
        label={t("data.description")}
        setFormValues={updateNoteLocales}
      />
    </FormContainer>
  );
};
