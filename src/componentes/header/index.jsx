import styled from "@emotion/styled";
import { Col, Container, Row } from "react-grid-system";
import { FreelandoLogo } from "../icones/logo";
import { Link } from "../link";

export const Cabecalho = styled.header`
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.xl};
  color: ${(props) => props.theme.cores.branco};
`;

export default function Header() {
  return (
    <Cabecalho>
      <Container>
        <Row>
          <Col align="center">
            <FreelandoLogo />
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Link>Login</Link>
          </Col>
        </Row>
      </Container>
    </Cabecalho>
  );
}
