import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ThemeModeSettingType, ThemeModeType } from "../../../theme";
import { LanguageCodeTypes } from "../../locale/languages";

const lsKey = "localSettings";

const lsAgent = {
  get: (): ISettingState => {
    const data_str = localStorage.getItem(lsKey);
    if (!data_str) return defaultState;
    const data: ISettingState = JSON.parse(data_str);
    return { ...defaultState, ...data };
  },
  set: (data: ISettingState): void => {
    localStorage.setItem(lsKey, JSON.stringify(data));
  },
};

interface ISettingState {
  languageSelected: LanguageCodeTypes;
  languageSelctedLoaded: boolean;

  themeModeSetting: ThemeModeSettingType;
  themeMode: ThemeModeType;
  themeSysPreferenceChecked: boolean;
}

const defaultState: ISettingState = {
  languageSelected: "en",
  languageSelctedLoaded: false,

  themeModeSetting: "system",
  themeMode: "light",
  themeSysPreferenceChecked: false,
};

export const settingsStore = createSlice({
  name: "settings",
  initialState: lsAgent.get(),
  reducers: {
    setCurrentLanguage: (state, action: PayloadAction<LanguageCodeTypes>) => {
      state.languageSelected = action.payload;
      state.languageSelctedLoaded = true;
    },
    setThemeMode: (state, action: PayloadAction<ThemeModeType>) => {
      state.themeMode = action.payload;
      lsAgent.set(state);
    },
    loadThemeMode: (state, action: PayloadAction<ThemeModeType>) => {
      state.themeMode = action.payload;
      state.themeSysPreferenceChecked = true;
      lsAgent.set(state);
    },
  },
});
