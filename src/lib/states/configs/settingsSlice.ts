import { ThemeOptionsType } from "@/lib/theme/theme";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ISettingState {
  themeSelected?: ThemeOptionsType;
}

const initialState: ISettingState = {};

export const settingsStore = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setThemeSelected: (state, action: PayloadAction<ThemeOptionsType>) => {
      state.themeSelected = action.payload;
    },
  },
});
