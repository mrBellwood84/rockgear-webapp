import { LanguageSupportType } from "../locales/language";
import { ThemeOptionType, ThemeType } from "../theme/theme";

export interface ISettings {
  language?: LanguageSupportType;
  themeOptionSelected?: ThemeOptionType;
  themeUsed?: ThemeType;
  systemPreferDark?: boolean;
}
