import { ISettings } from "@/lib/models/ISettings";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ISettingState extends ISettings {}

const initialState: ISettingState = {};

export const settingsStore = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<ISettings>) => {
      state.themeUsed = action.payload.themeUsed;
    },
  },
});
