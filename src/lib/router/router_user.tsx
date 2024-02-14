import { createBrowserRouter } from "react-router-dom";
import { HomeUser } from "../../app/user_pages/HomeUser";
import { UserLayout } from "../../components/UserLayout";
import { GuitarPages } from "../../app/user_pages/guitar/GuitarPages";
import { BrandPages } from "../../app/user_pages/brand/BrandPages";
import { StringsetPages } from "../../app/user_pages/stringset/StringsetPages";

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
        element: <GuitarPages />,
      },
      {
        path: "/brand",
        element: <BrandPages />,
      },
      {
        path: "/stringset",
        element: <StringsetPages />,
      },
    ],
  },
]);
