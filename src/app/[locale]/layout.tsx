import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { StoreProvider } from "@/lib/states/StoreProvider";
import { ReactNode, Suspense } from "react";
import { LocaleProvider } from "@/lib/locales/LocaleProvider";
import { AppThemeProvider } from "@/lib/AppThemeProvider";
import { useServerSideCookie } from "@/lib/cookie/serverSideCookies";
import { UserNavigation } from "@/components/navigation/UserNavigation";

export const metadata: Metadata = {
  title: "RockGear",
  description:
    "Manage maintenance of guitars, amplifiers and other music instruments with RockGear",
};

interface IParentProps {
  children: ReactNode;
  params: { locale: string };
}

interface IChildProps {
  children: ReactNode;
}

const NoUserLayout = ({ children }: IChildProps) => {
  return (
    <div>
      <p>No users here</p>
      {children}
    </div>
  );
};

const UserLayout = ({ children }: IChildProps) => {
  return (
    <div>
      <UserNavigation />
      {children}
    </div>
  );
};

export default function RootLayout({
  children,
  params: { locale },
}: IParentProps) {
  const user = useServerSideCookie().getRole();
  return (
    <html lang={locale}>
      <body>
        <AppRouterCacheProvider>
          <AppThemeProvider>
            <LocaleProvider locale={locale}>
              <StoreProvider>
                {user && <UserLayout> {children} </UserLayout>}
                {!user && <NoUserLayout> {children} </NoUserLayout>}
              </StoreProvider>
            </LocaleProvider>
          </AppThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
