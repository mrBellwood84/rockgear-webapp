import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IAlertMessage } from "../../lib/types/alertTypes";
import { ITextLocale } from "../../models/ITextLocale";
import { IBrand } from "../../models/brand/IBrand";
import { FormContainer } from "../shared/FormContainer";
import { LocaleFormInput } from "../shared/LocaleFormInput";
import { TextField } from "@mui/material";
import { BrandSelect } from "../brand/BrandSelect";

interface FormValues {
  brand: IBrand;
  name: string;
  gauges: string;
  description?: ITextLocale[];
}

export const StringsetForm = () => {
  const { t } = useTranslation("translation");

  const [loading] = useState<boolean>(false);
  const [alert, setAlert] = useState<IAlertMessage | null>(null);

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

  const createStringset: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <FormContainer
      loading={loading}
      alert={alert}
      removeAlert={() => setAlert(null)}
      onSubmit={handleSubmit(createStringset)}
    >
      <BrandSelect id="stringset-brand" />

      <TextField
        id="stringset-name"
        label={t("data.name")}
        variant="standard"
        margin="dense"
        fullWidth
        {...register("name", { required: true })}
        helperText={errors.name && t("form.nameMissing")}
      />

      <TextField
        id="stringset-gauges"
        label={t("data.gauges")}
        variant="standard"
        margin="dense"
        fullWidth
        {...register("gauges", { required: true })}
        helperText={errors.gauges && t("form.gaugesMissing")}
      />

      <LocaleFormInput
        elemId="stringset-description-locale"
        label={t("data.description")}
        setFormValues={updateNoteLocales}
      />
    </FormContainer>
  );
};
