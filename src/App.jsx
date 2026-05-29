import { ProvedorTema } from "./componentes/themeProvider";
import { Card } from "./componentes/card";
import Estilos from "./componentes/estilosGlobais/estilos";
import Header from "./componentes/header";
import { Tipografia } from "./componentes/tipografia";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Header />
      <Card>
        <Tipografia variante="h1" componente="h1">
          Crie seu Cadastro.
        </Tipografia>
        <Tipografia variante="body" componente="body">
          Crie seu perfil gratuitamente para começar a trabalhar com os melhores
          freelancers. Em seguida, você poderá dar mais detalhes sobre suas
          demandas e sobre sua forma de trabalho.{" "}
        </Tipografia>
      </Card>
    </ProvedorTema>
  );
}

export default App;
