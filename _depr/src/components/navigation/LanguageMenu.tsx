import { Language } from "@mui/icons-material";
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Fragment, useState, MouseEvent, useEffect } from "react";
import {
  ILanguageSelectOption,
  supportedLanguages,
} from "../../lib/locale/languages";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { settingsStore } from "../../lib/state/slices/settingState";
import { useAppDispatch, useAppSelector } from "../../lib/state/hooks";

export const LanguageMenu = () => {
  const { t } = useTranslation("translation", { keyPrefix: "nav" });
  const dispatch = useAppDispatch();

  const [anc, setAnc] = useState<null | HTMLElement>(null);
  const open = Boolean(anc);
  const handleOpen = (e: MouseEvent<HTMLElement>) => setAnc(e.currentTarget);
  const handleClose = () => setAnc(null);

  const currLang = useAppSelector((state) => state.settings.languageSelected);

  const selectLanguageClick = (language: ILanguageSelectOption) => {
    i18next.changeLanguage(language.code);
    dispatch(settingsStore.actions.setCurrentLanguage(language.code));
  };

  useEffect(() => {
    dispatch(settingsStore.actions.setCurrentLanguage(i18next.language));
  });

  return (
    <Fragment>
      <Tooltip title={t("langHelper")} arrow>
        <Button
          onClick={handleOpen}
          startIcon={<Language fontSize="large" />}
          sx={{ color: "inherit" }}
        >
          {currLang?.toUpperCase()}
        </Button>
      </Tooltip>

      <Menu
        anchorEl={anc}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        {supportedLanguages.map((l) => (
          <MenuItem
            key={l.code}
            onClick={() => {
              selectLanguageClick(l);
            }}
          >
            <ListItemIcon>
              <img
                src={l.svg}
                alt={`language select flag ${l.code}`}
                width={25}
              />
            </ListItemIcon>
            <ListItemText>{l.name}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};
