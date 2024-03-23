import { UserNavigation } from "@/components/navigation/UserNavigation";
import { useServerSideCookie } from "@/lib/cookie/serverSideCookies";
import { redirect } from "next/navigation";
import { Fragment, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: IProps) => {
  const { getRole } = useServerSideCookie();
  const role = getRole();

  if (role !== "admin") redirect("/");

  return (
    <Fragment>
      <UserNavigation />
      {children}
      <h6>Admin footer</h6>
    </Fragment>
  );
};

export default AdminLayout;
