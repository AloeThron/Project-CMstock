"use client";
import { Provider } from "react-redux";

import React from "react";
import { store } from "@/store/store";

type Props = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
