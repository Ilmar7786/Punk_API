import React from "react";

import { Header } from "@/components/Header";
import { IAppLayout } from "./appLayout.type";

export const AppLayout: React.FC<IAppLayout> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
