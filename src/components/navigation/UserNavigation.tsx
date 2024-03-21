import { Fragment } from "react";
import { UserAppbar } from "./UserAppbar";
import { UserDrawer } from "./UserDrawer";

export const UserNavigation = () => {
  return (
    <Fragment>
      <UserAppbar />
      <UserDrawer />
    </Fragment>
  );
};
