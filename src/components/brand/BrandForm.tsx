import { TextField } from "@mui/material";
import { IBrand } from "../../models/brand/IBrand";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ITextLocale } from "../../models/ITextLocale";
import { IAlertMessage } from "../../lib/types/alertTypes";
import { useAppDispatch, useAppSelector } from "../../lib/state/hooks";
import { v4 } from "uuid";
import { useState } from "react";
import { LocaleFormInput } from "../shared/LocaleFormInput";
import { FormContainer } from "../shared/FormContainer";
import { brandApiAgent } from "../../lib/apiAgent/brandApiAgent";
import { brandStore } from "../../lib/state/slices/brandState";
import { DuoSharp } from "@mui/icons-material";

interface FormValues {
  name: string;
  notes: ITextLocale[];
}

export const BrandForm = () => {
  const { t } = useTranslation("translation");

  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<IAlertMessage | null>(null);

  const selected = useAppSelector((state) => state.brand.selected);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: selected
      ? { name: selected.name, notes: selected.notes }
      : undefined,
  });

  const updateNoteLocales = (locales: ITextLocale[]) => {
    setValue("notes", locales);
  };

  const createBrand: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    const createDto: IBrand = {
      id: v4(),
      name: data.name,
      notes: data.notes.filter((x) => x.text !== ""),
    };

    const response = await brandApiAgent.create(createDto);

    if (response.success) {
      dispatch(brandStore.actions.addSingle(createDto));
      return;
    }

    setAlert({
      type: "error",
      message: "createError",
    });
    setLoading(false);
  };

  const updateBrand: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    const updateDto: IBrand = {
      id: selected!.id,
      name: data.name,
      notes: data.notes.filter((x) => x.text !== ""),
    };

    const response = await brandApiAgent.update(updateDto);

    if (response.success) {
      dispatch(brandStore.actions.updateSingle(updateDto));
      return;
    }

    setAlert({
      type: "error",
      message: "updateError",
    });
    setLoading(false);
  };

  return (
    <FormContainer
      loading={loading}
      edit={Boolean(selected)}
      alert={alert}
      removeAlert={() => setAlert(null)}
      onSubmit={handleSubmit(selected ? updateBrand : createBrand)}
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
        label={t("data.notes")}
        defaultValues={getValues("notes")}
        setFormValues={updateNoteLocales}
      />
    </FormContainer>
  );
};
