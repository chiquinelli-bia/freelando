import { ProvedorTema } from "./componentes/themeProvider";
import { Card } from "./componentes/card";
import Estilos from "./componentes/estilosGlobais/estilos";
import { Tipografia } from "./componentes/tipografia";
import { CampoTexto } from "./componentes/campoTexto";
import { Botao } from "./componentes/button";
import { Col, Container, Row } from "react-grid-system";
import Footer from "./componentes/rodape";

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
                <Row>
                  <Col>
                    <CampoTexto titulo="Nome Completo"></CampoTexto>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4} md={4} sm={4}>
                    <CampoTexto titulo="Estado"></CampoTexto>
                  </Col>
                  <Col lg={8} md={8} sm={8}>
                    <CampoTexto titulo="Cidade"></CampoTexto>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CampoTexto titulo="E-mail"></CampoTexto>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} md={6} sm={6}>
                    <CampoTexto titulo="Senha"></CampoTexto>
                  </Col>
                  <Col lg={6} md={6} sm={6}>
                    <CampoTexto titulo="Repita a Senha"></CampoTexto>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} md={6} sm={6} style={{ textAlign: "left" }}>
                    <Botao variante="secundaria">Anterior</Botao>
                  </Col>
                  <Col lg={6} md={6} sm={6} style={{ textAlign: "right" }}>
                    <Botao>Próxima</Botao>
                  </Col>
                </Row>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </ProvedorTema>
  );
}

export default App;
