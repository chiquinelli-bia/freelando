import { createBrowserRouter } from "react-router-dom";
import { LayoutBase } from "../paginas/layoutBase";
import { LayoutBaseCadastro } from "../paginas/cadastro/layoutBase";
import { SelecaoCliente } from "../paginas/cadastro/selecaoCliente";
import { Interesses } from "../paginas/cadastro/interesses";
import DadosPessoais from "../paginas/cadastro/dadosPessoais";
import { Concluido } from "../paginas/cadastro/concluido";

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
            element: <DadosPessoais />,
          },
          {
            path: "concluido",
            element: <Concluido />,
          },
        ],
      },
    ],
  },
]);
