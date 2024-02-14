import { LanguageCodeTypes } from "../lib/locale/languages";

export interface ITextLocale {
  id: string;
  code: LanguageCodeTypes;
  text: string;
}
