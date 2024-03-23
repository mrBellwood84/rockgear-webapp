import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { StoreProvider } from "@/lib/states/StoreProvider";
import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import { LocaleProvider } from "@/lib/locales/LocaleProvider";

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
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CssBaseline />
          <LocaleProvider locale={locale}>
            <StoreProvider>{children}</StoreProvider>
          </LocaleProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
