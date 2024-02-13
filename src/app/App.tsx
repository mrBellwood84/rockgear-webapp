import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Suspense } from "react";
import { lightTheme, darkTheme } from "../theme";
import { router_userpages } from "../lib/router/router_user";
import { router_nouser } from "../lib/router/router_nouser";
import { RouterProvider } from "react-router-dom";
import { useAppSelector } from "../lib/redux/hooks";
import { PageLoader } from "../components/PageLoader";

export const App = () => {
  const user: boolean = true;
  const settings = useAppSelector((state) => state.appSettings);

  const router = user ? router_userpages : router_nouser;
  const theme = settings.themeMode === "light" ? lightTheme : darkTheme;

  console.warn("DEV :: User session set by static value");
  console.warn("DEV :: Suspense fallback is text only");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
};
