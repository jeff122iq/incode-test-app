import React, { FC, ReactNode } from "react";
import { LayoutWrapper } from "./styles";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface IProps {
  children: ReactNode;
}
export const Layout: FC<IProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
};
