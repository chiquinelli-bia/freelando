import { createBrowserRouter } from "react-router-dom";
import { LayoutBase } from "../paginas/layoutBase";
import { LayoutBaseCadastro } from "../paginas/cadastro/layoutBase";
import { SelecaoCliente } from "../paginas/cadastro/selecaoCliente";
import { Interesses } from "../paginas/cadastro/interesses";
import DadosPessoais from "../paginas/cadastro/dadosPessoais";
import { Concluido } from "../paginas/cadastro/concluido";
import { Erro } from "../paginas/404";
import { PaginaInicial } from "../paginas/paginaInicial";
import { Login } from "../paginas/login";
import Perfil from "../paginas/areaLogada/perfil";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    ErrorBoundary: Erro,
    children: [
      {
        path: "",
        element: <PaginaInicial />,
        children: [],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "area-logada",
        children: [
          {
            path: "perfil",
            element: <Perfil />,
          },
        ],
      },

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
