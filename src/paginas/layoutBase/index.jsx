import { Outlet } from "react-router-dom";
import { Cabecalho } from "../../componentes/header";
import Footer from "../../componentes/rodape";

export const LayoutBase = () => {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <Footer />
    </>
  );
};
