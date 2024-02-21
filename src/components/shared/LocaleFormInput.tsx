import { ChangeEvent, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { v4 } from "uuid";
import { Warning } from "@mui/icons-material";
import { supportedLanguages } from "../../lib/locale/languages";
import { useAppSelector } from "../../lib/state/hooks";
import { ITextLocale } from "../../models/ITextLocale";

interface IProps {
  elemId: string;
  label: string;
  localeArr?: ITextLocale[];
  setFormValues: (values: ITextLocale[]) => void;
}

interface ISelectOption {
  value: string;
  alert: boolean;
}

const createEmptyFieldValues = (): ITextLocale[] => {
  return supportedLanguages.map((x) => {
    return {
      id: "",
      code: x.code,
      text: "",
    };
  });
};

const createPopulatedFieldValues = (data: ITextLocale[]): ITextLocale[] => {
  return createEmptyFieldValues().map((fv) => {
    const org = data.find((x) => x.code === fv.code);
    if (org) {
      fv.id = org.id;
      fv.text = org.text;
      return fv;
    }
    fv.id = v4();
    return fv;
  });
};

const resolveTextOnSelectChange = (lang: string, fv: ITextLocale[]) => {
  return fv.find((x) => x.code === lang)?.text;
};

const createSelectOptions = (locales: ITextLocale[]): ISelectOption[] => {
  return locales.map((x) => {
    return {
      value: x.code,
      alert: false,
    };
  });
};

const resolveOptionAlert = (
  locales: ITextLocale[],
  selectOptions: ISelectOption[]
): ISelectOption[] => {
  const hasText = locales.findIndex((x) => x.text !== "") !== -1;

  if (!hasText) {
    return selectOptions.map((x) => {
      x.alert = false;
      return x;
    });
  }

  return selectOptions.map((so) => {
    const corr = locales.find((l) => l.code === so.value);
    so.alert = corr?.text === "";
    return so;
  });
};

const resolveHelperText = (
  appLang: string,
  fieldLang: string,
  locales: ITextLocale[]
): string | undefined => {
  const none = locales.findIndex((x) => x.text !== "") === -1;
  if (none) return undefined;

  if (appLang === fieldLang) return undefined;

  const byAppLang = locales.find((x) => x.code === appLang)?.text;
  if (byAppLang) return byAppLang;

  const english = locales.find((x) => x.code === "en")?.text;
  if (english) return english;

  const firstFound = locales.find((x) => x.text !== "")?.text;
  return firstFound;
};

export const LocaleFormInput = ({
  elemId,
  label,
  localeArr,
  setFormValues,
}: IProps) => {
  const [formT] = useTranslation("translation", { keyPrefix: "form" });
  const [langT] = useTranslation("translation", { keyPrefix: "language" });

  const currLang = useAppSelector((state) => state.settings.languageSelected);
  const initFieldValues = localeArr
    ? createPopulatedFieldValues(localeArr)
    : createEmptyFieldValues();
  const initSelectOptions = createSelectOptions(initFieldValues);

  const [selectOptions, setSelectOptions] =
    useState<ISelectOption[]>(initSelectOptions);
  const [langSelected, setLangSelected] = useState<string>(currLang);
  const [locales, setLocales] = useState<ITextLocale[]>(initFieldValues);
  const [textSelected, setTextSelected] = useState<string>(
    resolveTextOnSelectChange(currLang, initFieldValues)!
  );
  const [helperText, setHelperText] = useState<string | undefined>();

  const handleSelectChange = (event: SelectChangeEvent) => {
    const lang = event.target.value;
    const fieldText = resolveTextOnSelectChange(lang, locales)!;
    const helperText = resolveHelperText(currLang, lang, locales);

    setLangSelected(lang);
    setTextSelected(fieldText);
    setHelperText(helperText);
  };

  const textValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    const localesUpdated = locales.map((x) => {
      if (x.code === langSelected) x.text = val;
      return x;
    });
    const optionsUpdated = resolveOptionAlert(locales, selectOptions);

    setSelectOptions(optionsUpdated);
    setTextSelected(val);
    setLocales(localesUpdated);
    setFormValues(localesUpdated);
  };

  return (
    <Box sx={{ mt: 2, mb: 2, display: "flex", alignItems: "flex-start" }}>
      <FormControl sx={{ width: "max-content", minWidth: "25%" }}>
        <InputLabel>{formT("language")}</InputLabel>
        <Select
          variant="standard"
          value={langSelected}
          onChange={handleSelectChange}
          sx={{ mr: 1 }}
        >
          {selectOptions.map((lang) => (
            <MenuItem
              key={`${elemId}-menu-item-${lang.value}`}
              value={lang.value}
              sx={{ display: "flex" }}
            >
              {langT(lang.value)}
              <ListItemIcon sx={{ ml: 1 }}>
                {lang.alert && <Warning fontSize="small" color="warning" />}
              </ListItemIcon>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        variant="standard"
        label={label}
        fullWidth
        value={textSelected}
        multiline
        maxRows={5}
        onChange={textValueChange}
        helperText={helperText && `${currLang.toUpperCase()}: ${helperText}`}
      />
    </Box>
  );
};
