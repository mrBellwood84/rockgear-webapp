import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../lib/state/hooks";
import { Fragment, useEffect, useRef, useState } from "react";
import { brandStore } from "../../lib/state/slices/brandState";
import { IBrand } from "../../models/brand/IBrand";
import { useTranslation } from "react-i18next";
import { brandApiAgent } from "../../lib/apiAgent/brandApiAgent";

interface IProps {
  id: string;
  errorMsg?: string;
  onSelect: (brand: IBrand) => void;
}

export const BrandSelect = ({ id, errorMsg, onSelect }: IProps) => {
  const [loading, isLoading] = useState<boolean>(true);
  const dataLoaded = useRef<boolean>(false);

  const { t } = useTranslation("translation");
  const brands = useAppSelector((state) => state.brand.allData);
  const dispatch = useAppDispatch();

  const loadFromAPI = async () => {
    if (brands.length > 0) return;
    const data = await brandApiAgent.getAll();
    dispatch(brandStore.actions.addAll([]));
    return data;
  };

  const resolveBrandOptions = async () => {
    if (dataLoaded.current) return;
    dataLoaded.current = true;
    await loadFromAPI();
    isLoading(false);
  };

  const handleSelected = (brand: IBrand) => {
    onSelect!(brand);
  };

  useEffect(() => {
    resolveBrandOptions();
  });

  return (
    <Autocomplete
      id={id}
      options={brands}
      getOptionLabel={(opt) => opt.name}
      loading={loading}
      onChange={(_, value) => {
        handleSelected(value!);
      }}
      renderInput={(params) => (
        <TextField
          label={t("data.brand")}
          variant="standard"
          margin="dense"
          {...params}
          helperText={errorMsg && errorMsg}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : (
                  params.InputProps.endAdornment
                )}
              </Fragment>
            ),
          }}
        />
      )}
    />
  );
};
