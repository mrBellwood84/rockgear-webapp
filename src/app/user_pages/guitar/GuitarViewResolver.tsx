import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/state/hooks";
import { ContainerLoader } from "../../../components/loaders/ContainerLoader";
import { GuitarCreate } from "./GuitarCreate";
import { GuitarViewSingle } from "./GuitarViewSingle";
import { GuitarViewAll } from "./GuitarViewAll";
import { GuitarApiAgent } from "../../../lib/apiAgent/mock_guitarApiAgent";
import { guitarStore } from "../../../lib/state/slices/guitarState";

export const GuitarViewResolver = () => {
  const currentView = useAppSelector((state) => state.guitar.currentView);
  const apiCalled = useRef<boolean>(false);
  const dispatch = useAppDispatch();

  const fetchGuitarData = async () => {
    if (apiCalled.current) return;
    apiCalled.current = true;
    const data = await GuitarApiAgent.getAll();
    dispatch(guitarStore.actions.addAll(data));
    console.warn(
      "DEV :: Guitar data called from mock api. This message was sent from lowest level..."
    );
  };

  useEffect(() => {
    fetchGuitarData();
  });

  switch (currentView) {
    case "load":
      return <ContainerLoader />;
    case "create":
      return <GuitarCreate />;
    case "single":
      return <GuitarViewSingle />;
    default:
      return <GuitarViewAll />;
  }
};
