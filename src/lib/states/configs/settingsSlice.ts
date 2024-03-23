import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ISettingState {}

const initialState: ISettingState = {};

export const settingsStore = createSlice({
  name: "settings",
  initialState,
  reducers: {},
});
