"use client";

import { Fragment, useState } from "react";
import { UserAppbar } from "./UserAppbar";
import { UserDrawer } from "./UserDrawer";

export const UserNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  const handleOpenDrawer = () => setDrawerIsOpen(true);
  const handleCloseDrawer = () => setDrawerIsOpen(false);

  return (
    <Fragment>
      <UserAppbar menuClick={handleOpenDrawer} />
      <UserDrawer open={drawerIsOpen} closeDrawer={handleCloseDrawer} />
    </Fragment>
  );
};
