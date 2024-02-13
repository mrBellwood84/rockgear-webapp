import { createBrowserRouter } from "react-router-dom";
import { HomeNoUser } from "../../app/nouser_pages/HomeNoUser";
import { NoUserLayout } from "../../components/NoUserLayout";

export const router_nouser = createBrowserRouter([
  {
    path: "/",
    element: <NoUserLayout />,
    children: [
      {
        path: "/",
        element: <HomeNoUser />,
      },
    ],
  },
]);
