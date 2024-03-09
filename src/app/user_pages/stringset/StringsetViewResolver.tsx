import { useEffect, useRef } from "react";
import { useAppSelector } from "../../../lib/state/hooks";
import { useDispatch } from "react-redux";
import { stringsetApiAgent } from "../../../lib/apiAgent/mock_stringsetApiAgent";
import { stringsetStore } from "../../../lib/state/slices/stringsetState";
import { ContainerLoader } from "../../../components/loaders/ContainerLoader";
import { StringsetViewSingle } from "./StringsetViewSingle";
import { StringsetCreate } from "./StringsetCreate";
import { StringsetViewAll } from "./StringsetViewAll";

export const StringsetViewResolver = () => {
  const currentView = useAppSelector((state) => state.stringset.currentView);
  const apiCalled = useRef<boolean>(false);
  const dispatch = useDispatch();

  const fetchStringsetData = async () => {
    if (apiCalled.current) return;
    apiCalled.current = true;
    const data = await stringsetApiAgent.getAll();
    dispatch(stringsetStore.actions.addAll(data));
    console.warn(
      "DEV :: Stringset data called from mock api. This message was sent from lowest level..."
    );
  };

  useEffect(() => {
    fetchStringsetData();
  });

  switch (currentView) {
    case "load":
      return <ContainerLoader />;
    case "single":
      return <StringsetViewSingle />;
    case "create":
      return <StringsetCreate />;
    default:
      return <StringsetViewAll />;
  }
};
