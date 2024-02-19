import { createBrowserRouter } from "react-router-dom";
import { HomeUser } from "../../app/user_pages/HomeUser";
import { UserLayout } from "../../components/UserLayout";
import { GuitarViewResolver } from "../../app/user_pages/guitar/GuitarViewResolver";
import { BrandViewResolver } from "../../app/user_pages/brand/BrandViewResolver";
import { StringsetViewResolver } from "../../app/user_pages/stringset/StringsetViewResolver";

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
        element: <GuitarViewResolver />,
      },
      {
        path: "/brand",
        element: <BrandViewResolver />,
      },
      {
        path: "/stringset",
        element: <StringsetViewResolver />,
      },
    ],
  },
]);
