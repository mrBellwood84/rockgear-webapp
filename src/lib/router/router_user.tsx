import { createBrowserRouter } from "react-router-dom";
import { HomeUser } from "../../app/user_pages/HomeUser";
import { UserLayout } from "../../components/UserLayout";
import { GuitarDashboard } from "../../app/user_pages/guitar/GuitarDashboard";
import { StringsetDashboard } from "../../app/user_pages/stringset/StringsetDashboard";
import { BrandDashboard } from "../../app/user_pages/brand/BrandDashboard";

export const router_userpages = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <HomeUser />,
      },
      {
        path: "/guitar",
        element: <GuitarDashboard />,
      },
      {
        path: "/brand",
        element: <BrandDashboard />,
      },
      {
        path: "/stringset",
        element: <StringsetDashboard />,
      },
    ],
  },
]);
