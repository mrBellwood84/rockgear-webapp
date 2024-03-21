import { configureStore } from "@reduxjs/toolkit";
import { settingsStore } from "./configs/settingsSlice";

export const createStore = () => {
  return configureStore({
    reducer: {
      settings: settingsStore.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
