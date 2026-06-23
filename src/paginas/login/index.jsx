import { Col, Container, Row } from "react-grid-system";
import { Logo } from "./logo";
import { Card } from "../../componentes/card";
import { Tipografia } from "../../componentes/tipografia";
import { CampoTexto } from "../../componentes/campoTexto";
import { Link } from "../../componentes/link";
import { Link as RouterLink } from "react-router-dom";
import { Botao } from "../../componentes/button";
import { useState } from "react";
import styled from "@emotion/styled";

const FormEstilizado = styled.form`
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.cores.primarias.a};
  padding-bottom: ${(props) => props.theme.espacamentos.l};
`;

export const Login = () => {
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");

  const tentarEfetuarLogin = async (evento) => {};
  return (
    <Container>
      <Row justify="center">
        <Col
          xs={6}
          xxl={6}
          xl={6}
          lg={6}
          md={8}
          sm={12}
          style={{ margin: "80px 0" }}
        >
          <div style={{ textAlign: "center" }}>
            <Logo />
          </div>
          <Card>
            <div style={{ textAlign: "center" }}>
              <Tipografia variante="h1" componente="h1">
                Efetuar login
              </Tipografia>
            </div>
            <FormEstilizado onSubmit={tentarEfetuarLogin}>
              <CampoTexto
                titulo="E-mail"
                valor={email}
                onChange={setEmail}
                tipo="email"
              />
              <CampoTexto
                titulo="Senha"
                valor={senha}
                onChange={setSenha}
                tipo="password"
              />
              <div style={{ textAlign: "right" }}>
                <RouterLink to="">
                  <Tipografia componente="legenda" variante="legenda">
                    Esqueceu sua senha?
                  </Tipografia>
                </RouterLink>
              </div>
              <div style={{ textAlign: "center" }}>
                <Botao>Login</Botao>
              </div>
            </FormEstilizado>
            <div style={{ textAlign: "center" }}>
              <Tipografia componente="legenda" variante="legenda">
                Ainda não criou sua conta no Freelando?
              </Tipografia>
            </div>
            <div style={{ textAlign: "center" }}>
              <Link variante="secundario">
                <RouterLink to="/cadastro">
                  Cadastre-se clicando aqui!
                </RouterLink>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
