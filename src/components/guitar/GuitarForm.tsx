import { useTranslation } from "react-i18next";
import { ITextLocale } from "../../models/ITextLocale";
import { IBrand } from "../../models/brand/IBrand";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IAlertMessage } from "../../lib/types/alertTypes";
import { FormContainer } from "../shared/FormContainer";
import { BrandSelect } from "../brand/BrandSelect";
import { TextField } from "@mui/material";
import { LocaleFormInput } from "../shared/LocaleFormInput";

interface FormValues {
  brand: IBrand;
  model: string;
  serialNumber: string;
  nickname?: string;
  description?: ITextLocale[];
}

export const GuitarForm = () => {
  const { t } = useTranslation("translation");

  const [loading] = useState<boolean>(false);
  const [alert, setAlert] = useState<IAlertMessage | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>();

  const handleBrandChange = (brand: IBrand) => {
    clearErrors("brand");
    setValue("brand", brand);
  };

  const handleDescriptionChange = (locales: ITextLocale[]) => {
    const filtered = locales.filter((x) => x.text !== "");
    setValue("description", filtered);
  };

  const createGuitar: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    register("brand", { required: true });
  });

  return (
    <FormContainer
      loading={loading}
      alert={alert}
      removeAlert={() => setAlert(null)}
      onSubmit={handleSubmit(createGuitar)}
    >
      <BrandSelect
        id="guitar-brand"
        errorMsg={errors.brand && t("form.brandMissing")}
        onSelect={handleBrandChange}
      />

      <TextField
        id="guitar-model"
        label={t("data.model")}
        variant="standard"
        margin="dense"
        fullWidth
        {...register("model", { required: true })}
        helperText={errors.model && t("form.modelMissing")}
      />

      <TextField
        id="guitar-serialnumber"
        label={t("data.serialnumber")}
        variant="standard"
        margin="dense"
        fullWidth
        {...register("serialNumber", { required: true })}
        helperText={errors.serialNumber && t("form.serialnumberMissing")}
      />

      <TextField
        id="guitar-nickname"
        label={t("data.nickname")}
        variant="standard"
        margin="dense"
        fullWidth
        {...register("nickname")}
      />

      <LocaleFormInput
        elemId="guitar-description-locales"
        label={t("data.description")}
        setFormValues={handleDescriptionChange}
      />
    </FormContainer>
  );
};
