import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { StoreProvider } from "@/lib/states/StoreProvider";
import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";

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
  console.log("--DEV :: Locale at page load:", locale);
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <StoreProvider>
            <CssBaseline />
            {children}
          </StoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
