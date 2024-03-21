import { Outlet } from "react-router-dom";
import { Fragment, useState } from "react";
import { UserAppbar } from "./navigation/UserAppbar";
import { UserDrawer } from "./navigation/UserDrawer";
import { Container } from "@mui/material";

export const UserLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <Fragment>
      <UserAppbar toggleDrawer={toggleDrawer} />
      <UserDrawer open={drawerOpen} toggleOpen={toggleDrawer} />
      <Container sx={{ mt: 1, mb: 1 }}>
        <Outlet />
      </Container>
    </Fragment>
  );
};
