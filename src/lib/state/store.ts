import { configureStore } from "@reduxjs/toolkit";
import { settingsStore } from "./slices/settingState";
import { userStore } from "./slices/userState";
import { brandStore } from "./slices/brandState";
// ...

const store = configureStore({
  reducer: {
    brand: brandStore.reducer,
    settings: settingsStore.reducer,
    user: userStore.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
