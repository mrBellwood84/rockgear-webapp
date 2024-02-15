import { useEffect, useRef } from "react";
import { ContainerLoader } from "../../../components/loaders/ContainerLoader";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { BrandViewAllPage } from "./BrandViewAllPage";
import { brandApiAgent } from "../../../lib/apiAgent/brandApiAgent";
import { brandStore } from "../../../lib/state/slices/brandState";
import { BrandCreateEditPage } from "./BrandCreateEditPage";

export const BrandPages = () => {
  const currentView = useAppSelector((state) => state.brand.currentBrandView);
  const userRole = useAppSelector((state) => state.user.userRole);
  const apiCalled = useRef<boolean>(false);
  const dispatch = useAppDispatch();

  const fetchBrandData = async () => {
    if (apiCalled.current) return;
    apiCalled.current = true;
    const data = await brandApiAgent.getAll();
    dispatch(brandStore.actions.addAllBrands(data));
    console.warn(
      "DEV :: Brand data called from mock api. This message was sent from lowest level..."
    );
  };

  useEffect(() => {
    fetchBrandData();
  });

  switch (currentView) {
    case "load":
      return <ContainerLoader />;
    case "create":
      if (userRole === "admin") return <BrandCreateEditPage />;
      return <BrandViewAllPage />;
    case "edit":
      if (userRole === "admin") return <BrandCreateEditPage />;
      return <BrandViewAllPage />;
    default:
      return <BrandViewAllPage />;
  }
};
