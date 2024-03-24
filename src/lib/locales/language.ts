import no from "flag-icons/flags/4x3/no.svg";
import en from "flag-icons/flags/4x3/gb.svg";

export type LanguageSupportType = "en" | "no";
export const languagesSupported = ["en", "no"];

export interface ILanguageSelectOption {
  code: LanguageSupportType;
  name: string;
  svg: string;
}

export const supportedLanguages: ILanguageSelectOption[] = [
  {
    code: "en",
    name: "English",
    svg: en,
  },
  {
    code: "no",
    name: "Norsk",
    svg: no,
  },
];
