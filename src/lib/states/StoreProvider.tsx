"use client";

import { ReactNode, useRef } from "react";
import { AppStore, createStore } from "./store";
import { Provider } from "react-redux";

interface IProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: IProps) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) storeRef.current = createStore();

  return <Provider store={storeRef.current}>{children}</Provider>;
};
