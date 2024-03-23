import { LanguageSupportType } from "../locales/language";
import { ThemeOptionType } from "../theme";

export interface ISettings {
  language?: LanguageSupportType;
  theme?: ThemeOptionType;
}
