import { Language } from "@mui/icons-material";
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Fragment, useState, MouseEvent } from "react";
import { ILanguage, supportedLanguages } from "../../lib/locale/languages";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export const LanguageMenu = () => {
  const { t } = useTranslation("translation", { keyPrefix: "nav" });

  const [anc, setAnc] = useState<null | HTMLElement>(null);
  const open = Boolean(anc);
  const handleOpen = (e: MouseEvent<HTMLElement>) => setAnc(e.currentTarget);
  const handleClose = () => setAnc(null);

  const [lang, setLang] = useState<string>(i18next.language);

  const selectLanguageClick = (language: ILanguage) => {
    i18next.changeLanguage(language.code);
    setLang(language.code);
  };

  return (
    <Fragment>
      <Tooltip title={t("langHelper")} arrow>
        <Button
          onClick={handleOpen}
          startIcon={<Language fontSize="large" />}
          sx={{ color: "inherit" }}
        >
          {lang?.toUpperCase()}
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
