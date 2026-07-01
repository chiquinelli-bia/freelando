import styled from "@emotion/styled";
import { Col, Container, Row } from "react-grid-system";
import { FreelandoLogo } from "../icones/logo";
import { Link } from "../link";
import { Link as RouterLink } from "react-router-dom";
import { useSessaoUsuarioContext } from "../../contexto/sessaoUsuario";
import { Tipografia } from "../tipografia";

const Cabecalho = styled.header`
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.xl};
  color: ${(props) => props.theme.cores.branco};
`;

export default function Header() {
  const { usuarioEstaLogado, logout } = useSessaoUsuarioContext();

  return (
    <Cabecalho>
      <Container>
        <Row>
          <Col align="center" textAlign="rigth">
            <FreelandoLogo />
          </Col>
          {usuarioEstaLogado ? (
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px  ",
              }}
            >
              <Tipografia variante="body1" componente="body">
                Contrate
              </Tipografia>
              <Tipografia variante="body1" componente="body">
                Encontre Trabalho
              </Tipografia>
              <Tipografia variante="body1" componente="body">
                Meus Projetos
              </Tipografia>
              <Link onClick={logout}>Logout</Link>
            </Col>
          ) : (
            <Col style={{ textAlign: "right" }}>
              <RouterLink to="/login">
                <Link>Login</Link>
              </RouterLink>
            </Col>
          )}
        </Row>
      </Container>
    </Cabecalho>
  );
}
