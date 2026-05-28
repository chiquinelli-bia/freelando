import { ProvedorTema } from "./componentes/themeProvider";
import { Card } from "./componentes/card";
import Estilos from "./componentes/estilosGlobais/estilos";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Card>
        <h1>freelando</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
