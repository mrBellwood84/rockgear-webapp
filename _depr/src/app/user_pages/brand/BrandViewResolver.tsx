import { useEffect, useRef } from "react";
import { ContainerLoader } from "../../../components/loaders/ContainerLoader";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { brandStore } from "../../../lib/state/slices/brandState";
import { BrandCreate } from "./BrandCreate";
import { BrandViewAll } from "./BrandViewAll";
import { brandApiAgent } from "../../../lib/apiAgent/brandApiAgent";
import { BrandEdit } from "./BrandEdit";

export const BrandViewResolver = () => {
  const currentView = useAppSelector((state) => state.brand.currentView);
  const apiCalled = useRef<boolean>(false);
  const dispatch = useAppDispatch();

  const fetchBrandData = async () => {
    if (apiCalled.current) return;
    apiCalled.current = true;
    const response = await brandApiAgent.getAll();
    var data = response.success ? response.body : [];
    dispatch(brandStore.actions.addAll(data!));
  };

  useEffect(() => {
    fetchBrandData();
  });

  switch (currentView) {
    case "load":
      return <ContainerLoader />;
    case "edit":
      return <BrandEdit />;
    case "create":
      return <BrandCreate />;
    default:
      return <BrandViewAll />;
  }
};
