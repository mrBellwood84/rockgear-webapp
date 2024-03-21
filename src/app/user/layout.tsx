import { UserNavigation } from "@/components/navigation/UserNavigation";
import { useServerSideCookie } from "@/lib/cookie/serverSideCookies";
import { redirect } from "next/navigation";
import { Fragment, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const UserLayout = ({ children }: IProps) => {
  const { getRole } = useServerSideCookie();
  const role = getRole();

  if (role !== "user") redirect("/");

  return (
    <Fragment>
      <UserNavigation />
      {children}
      <h6>User Footer</h6>
    </Fragment>
  );
};

export default UserLayout;
