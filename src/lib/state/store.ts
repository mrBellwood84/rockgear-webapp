import { configureStore } from "@reduxjs/toolkit";
import { settingsStore } from "./slices/settingState";
import { userStore } from "./slices/userState";
import { brandStore } from "./slices/brandState";
import { stringsetStore } from "./slices/stringsetState";
import { guitarStore } from "./slices/guitarState";
// ...

const store = configureStore({
  reducer: {
    brand: brandStore.reducer,
    guitar: guitarStore.reducer,
    settings: settingsStore.reducer,
    stringset: stringsetStore.reducer,
    user: userStore.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
