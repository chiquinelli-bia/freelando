import { ProvedorTema } from "./componentes/themeProvider";
import { Card } from "./componentes/card";
import Estilos from "./componentes/estilosGlobais/estilos";
import { Tipografia } from "./componentes/tipografia";
import { CampoTexto } from "./componentes/campoTexto";
import { Col, Container, Row } from "react-grid-system";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Container>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                Crie seu Cadastro.
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os
                melhores freelancers. Em seguida, você poderá dar mais detalhes
                sobre suas demandas e sobre sua forma de trabalho.{" "}
              </Tipografia>
              <form>
                <CampoTexto titulo="Nome Completo"></CampoTexto>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </ProvedorTema>
  );
}

export default App;
