import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { StoreProvider } from "@/lib/states/StoreProvider";
import { ReactNode, Suspense } from "react";
import { LocaleProvider } from "@/lib/locales/LocaleProvider";
import { AppThemeProvider } from "@/lib/AppThemeProvider";
import { PageLoader } from "@/components/loader/PageLoader";
import MainLoadingPage from "./loading";

export const metadata: Metadata = {
  title: "RockGear",
  description:
    "Manage maintenance of guitars, amplifiers and other music instruments with RockGear",
};

interface IProps {
  children: ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<IProps>) {
  return (
    <html lang={locale}>
      <body>
        <Suspense fallback={<MainLoadingPage />}>
          <AppRouterCacheProvider>
            <AppThemeProvider>
              <LocaleProvider locale={locale}>
                <StoreProvider>{children}</StoreProvider>
              </LocaleProvider>
            </AppThemeProvider>
          </AppRouterCacheProvider>
        </Suspense>
      </body>
    </html>
  );
}
