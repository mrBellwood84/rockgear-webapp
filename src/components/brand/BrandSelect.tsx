import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../lib/state/hooks";
import { Fragment, useEffect, useRef, useState } from "react";
import { brandApiAgent } from "../../lib/apiAgent/brandApiAgent";
import { brandStore } from "../../lib/state/slices/brandState";
import { IBrand } from "../../models/brand/IBrand";
import { useTranslation } from "react-i18next";

interface IProps {
  id: string;
}

export const BrandSelect = ({ id }: IProps) => {
  const [loading, isLoading] = useState<boolean>(true);
  const dataLoaded = useRef<boolean>(false);

  const { t } = useTranslation("translation");
  const brands = useAppSelector((state) => state.brand.allData);
  const dispatch = useAppDispatch();

  const loadFromAPI = async () => {
    if (brands.length > 0) return;
    const data = await brandApiAgent.getAll();
    dispatch(brandStore.actions.addAll(data));
    return data;
  };

  const resolveBrandOptions = async () => {
    if (dataLoaded.current) return;
    dataLoaded.current = true;
    await loadFromAPI();
    isLoading(false);
  };

  const handleSelected = (value: IBrand) => {
    console.log(value);
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
