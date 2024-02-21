import {
  Alert,
  Box,
  Button,
  IconButton,
  SxProps,
  TextField,
} from "@mui/material";
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
import { Close } from "@mui/icons-material";
import { ComponentLoader } from "../loaders/ComponentLoader";
import { LocaleFormInput } from "../shared/LocaleFormInput";

interface FormValues {
  name: string;
  comments: ITextLocale[];
}

interface IProps {
  brandData: IBrand | null;
  sx?: SxProps;
}

export const BrandForm = ({ brandData, sx }: IProps) => {
  const [dataT] = useTranslation("translation", { keyPrefix: "data" });
  const [formT] = useTranslation("translation", { keyPrefix: "form" });
  const [interT] = useTranslation("translation", { keyPrefix: "interactive" });

  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<IAlertMessage | null>(null);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: brandData ? brandData.name : undefined,
      comments: brandData ? brandData.comment : undefined,
    },
  });

  const updateCommentLocales = (locales: ITextLocale[]) => {
    const filtered = locales.filter((x) => x.text !== "");
    setValue("comments", filtered);
  };

  const createAction: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    const newData: IBrand = {
      id: v4(),
      name: data.name,
      comment: data.comments,
    };

    const success = await brandApiAgent.post();
    if (success) {
      dispatch(brandStore.actions.addSingle(newData));
      return;
    }

    setLoading(false);
    setAlert({ type: "error", message: "createError" });
  };

  const updateAction: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);

    const newData: IBrand = {
      id: brandData!.id,
      name: data.name,
      comment: data.comments,
    };

    const success = await brandApiAgent.put();
    if (success) {
      dispatch(brandStore.actions.updateSingle(newData));
      return;
    }
    setLoading(false);
    setAlert({ type: "error", message: "updateError" });
  };

  const submit = brandData ? updateAction : createAction;

  if (loading)
    return (
      <Box sx={{ height: "25vh" }}>
        <ComponentLoader
          text={`${interT(brandData ? "updatePresent" : "createPresent")} ${dataT("brand")}...`}
          spinnerCount={5}
        />
        ;
      </Box>
    );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(submit)}
      noValidate
      autoComplete="off"
      sx={{ ...sx }}
    >
      {alert && (
        <Alert
          severity={alert.type}
          action={
            <IconButton size="small" onClick={() => setAlert(null)}>
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          {interT(alert.message)}
        </Alert>
      )}
      <TextField
        id="brand-name"
        label={dataT("name")}
        variant="standard"
        margin="dense"
        fullWidth
        {...register("name", { required: true })}
        helperText={errors.name && formT("nameMissing")}
      />

      <LocaleFormInput
        elemId="brand-comment-locale"
        label={dataT("comment")}
        localeArr={brandData ? brandData.comment : undefined}
        setFormValues={updateCommentLocales}
      />

      <Button
        type="submit"
        variant="contained"
        color="success"
        fullWidth
        size="large"
      >
        {brandData ? interT("update") : interT("create")}
      </Button>
    </Box>
  );
};
