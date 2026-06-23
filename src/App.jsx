import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { ProvedorTema } from "./componentes/themeProvider";
import Estilos from "./componentes/estilosGlobais/estilos";
import { SessaoUsuarioProvider } from "./contexto/sessaoUsuario";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <SessaoUsuarioProvider>
        <RouterProvider router={router} />
      </SessaoUsuarioProvider>
    </ProvedorTema>
  );
}

export default App;
