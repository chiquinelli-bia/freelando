import { createBrowserRouter } from "react-router-dom";
import { LayoutBase } from "../paginas/layoutBase";
import { LayoutBaseCadastro } from "../paginas/cadastro/layoutBase";
import { SelecaoCliente } from "../paginas/cadastro/selecaoCliente";
import { Interesses } from "../paginas/cadastro/interesses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        path: "cadastro",
        element: <LayoutBaseCadastro />,
        children: [
          {
            path: "",
            element: <SelecaoCliente />,
          },
          {
            path: "interesses",
            element: <Interesses />,
          },
          {
            path: "dados-pessoais",
            element: <h1>Dados pessoais</h1>,
          },
          {
            path: "concluido",
            element: <h1>Concluído</h1>,
          },
        ],
      },
    ],
  },
]);
