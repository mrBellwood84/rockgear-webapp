import { useClientSideCookie } from "@/lib/cookie/clientSideCookies";
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/lib/locales/client";
import {
  LanguageSupportType,
  supportedLanguages,
} from "@/lib/locales/language";
import { Language } from "@mui/icons-material";
import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import { Fragment, MouseEvent, useState } from "react";

export const LanguageSelect = () => {
  const t = useScopedI18n("nav");

  const [anc, setAnc] = useState<null | HTMLElement>(null);
  const open = Boolean(anc);
  const handleOpen = (e: MouseEvent<HTMLElement>) => setAnc(e.currentTarget);
  const handleClose = () => setAnc(null);
  const { getSettings, setSettings } = useClientSideCookie();

  const currLang = useCurrentLocale();
  const changeLang = useChangeLocale();

  const selectLangClick = (code: LanguageSupportType) => {
    const cookieSettings = getSettings();
    cookieSettings.language = code;
    setSettings(cookieSettings);
    changeLang(code);
  };

  return (
    <Fragment>
      <Tooltip title={t("languageSelect")}>
        <Button
          size="large"
          onClick={handleOpen}
          startIcon={<Language />}
          sx={{ color: "inherit", fontWeight: 600 }}
        >
          {currLang.toUpperCase()}
        </Button>
      </Tooltip>

      <Menu
        anchorEl={anc}
        open={open}
        onClick={handleClose}
        onClose={handleClose}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        {supportedLanguages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => {
              selectLangClick(lang.code);
            }}
          >
            <ListItemIcon>
              <Image
                src={lang.svg}
                alt={`language select ${lang.code}`}
                width={25}
              />
            </ListItemIcon>
            <ListItemText>{lang.name}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Fragment>
  );
};
