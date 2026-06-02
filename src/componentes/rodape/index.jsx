import styled from "@emotion/styled";
import { Col, Container, Row } from "react-grid-system";
import { Tipografia } from "../tipografia";
import { FreelandoLogo } from "../icones/logo";
import { ListaInlineRodape } from "../listaInline";

const Rodape = styled.footer`
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.m};
  color: ${(props) => props.theme.cores.branco};
`;

export default function Footer() {
  return (
    <Rodape>
      <Container>
        <Row align="center">
          <Col>
            <FreelandoLogo height={40} width={176} />
            <Tipografia variante="legenda" componente="legenda">
              Desenvolvido por Alura. Adaptado por Bianca Chiquinelli.
            </Tipografia>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Tipografia variante="legenda" componente="legenda">
              Acesse nossas redes:
            </Tipografia>
            <ListaInlineRodape />
          </Col>
        </Row>
      </Container>
    </Rodape>
  );
}
