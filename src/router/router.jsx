import { createBrowserRouter } from "react-router-dom";
import PaginaInicial from "../paginas/pngInicial";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial />,
  },
]);
