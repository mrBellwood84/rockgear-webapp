import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ThemeModeSettingType, ThemeModeType } from "../../../theme";

const lsKey = "localSettings";

const lsAgent = {
  get: (): IAppSettings => {
    const data_str = localStorage.getItem(lsKey);
    if (!data_str) return defaultState;
    const data: IAppSettings = JSON.parse(data_str);
    return { ...defaultState, ...data };
  },
  set: (data: IAppSettings): void => {
    localStorage.setItem(lsKey, JSON.stringify(data));
  },
};

interface IAppSettings {
  themeModeSetting: ThemeModeSettingType;
  themeMode: ThemeModeType;
  themeSysPreferenceChecked: boolean;
}

const defaultState: IAppSettings = {
  themeModeSetting: "system",
  themeMode: "light",
  themeSysPreferenceChecked: false,
};

export const appSettingsStore = createSlice({
  name: "appSettings",
  initialState: lsAgent.get(),
  reducers: {
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
