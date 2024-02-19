import { useEffect, useRef } from "react";
import { ContainerLoader } from "../../../components/loaders/ContainerLoader";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { brandApiAgent } from "../../../lib/apiAgent/brandApiAgent";
import { brandStore } from "../../../lib/state/slices/brandState";
import { BrandViewSingle } from "./BrandViewSingle";
import { BrandCreate } from "./BrandCreate";
import { BrandViewAll } from "./BrandViewAll";

export const BrandViewResolver = () => {
  const currentView = useAppSelector((state) => state.brand.currentView);
  const apiCalled = useRef<boolean>(false);
  const dispatch = useAppDispatch();

  const fetchBrandData = async () => {
    if (apiCalled.current) return;
    apiCalled.current = true;
    const data = await brandApiAgent.getAll();
    dispatch(brandStore.actions.addAll(data));
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
    case "single":
      return <BrandViewSingle />;
    case "create":
      return <BrandCreate />;
    default:
      return <BrandViewAll />;
  }
};
