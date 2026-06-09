import { Outlet } from "react-router-dom";
import Header from "../../componentes/header";
import Footer from "../../componentes/rodape";

export const LayoutBase = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
