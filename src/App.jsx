import { ProvedorTema } from "./componentes/themeProvider";
import { Card } from "./componentes/card";
import Estilos from "./componentes/estilosGlobais/estilos";
import { Tipografia } from "./componentes/tipografia";
import { CampoTexto } from "./componentes/campoTexto";
import { Botao } from "./componentes/button";
import { Col, Container, Row } from "react-grid-system";
import Footer from "./componentes/rodape";
import Header from "./componentes/header";
import { ListaSuspensa } from "./componentes/listaSuspensa";

const estadosBrasileiros = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Header />
      <Container style={{ margin: "80px 0", maxWidth: "auto" }}>
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
                    <ListaSuspensa
                      titulo="Estado"
                      opcoes={estadosBrasileiros}
                    />
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
