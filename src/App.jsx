import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ProvedorTema } from "./componentes/themeProvider";
import Estilos from "./componentes/estilosGlobais/estilos";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <RouterProvider router={router} />;
    </ProvedorTema>
  );
}

export default App;
