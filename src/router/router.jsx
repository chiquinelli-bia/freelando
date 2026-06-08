import { createBrowserRouter } from "react-router-dom";
import { LayoutBase } from "../paginas/layoutBase";
import { LayoutBaseCadastro } from "../paginas/cadastro/layoutBase";
import { SelecaoCliente } from "../paginas/cadastro/selecaoCliente";

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
            children: [
              {
                path: "",
                element: <SelecaoCliente />,
              },
              {
                path: "cliente",
                element: <h1>Interesesses</h1>,
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
    ],
  },
]);
