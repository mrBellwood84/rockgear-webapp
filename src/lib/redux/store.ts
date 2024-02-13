import { configureStore } from "@reduxjs/toolkit";
import { appSettingsStore } from "./slices/appSettings";
// ...

const store = configureStore({
  reducer: {
    appSettings: appSettingsStore.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
