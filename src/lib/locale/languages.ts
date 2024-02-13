import no from "flag-icons/flags/4x3/no.svg";
import en from "flag-icons/flags/4x3/gb.svg";

export interface ILanguage {
  code: string;
  name: string;
  svg: string;
}

export const supportedLanguages: ILanguage[] = [
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
].sort();
