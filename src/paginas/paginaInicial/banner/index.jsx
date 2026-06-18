import { Col, Container, Row } from "react-grid-system";
import { Tipografia } from "../../../componentes/tipografia";
import { Botao } from "../../../componentes/button";
import imgBanner from "./banner.png";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ImgEstilizado = styled.img`
  max-width: 100%;
`;
const DivEstilizada = styled.div`
  padding: ${(props) => props.theme.espacamentos.l};
  background: ${(props) => props.theme.cores.neutras.c};
  color: ${(props) => props.theme.cores.primarias.b};
  margin: 0;
`;

export const Banner = () => {
  return (
    <DivEstilizada>
      <Container>
        <Row>
          <Col md={5} sm={12} style={{ textAlign: "left" }}>
            <Tipografia variante="h1" componente="h1">
              Uma ponte entre os freelas mais talentosos e os projetos mais
              interessantes!
            </Tipografia>
            <Link to="/cadastro">
              <Botao variante="primaria">Quero me cadastrar!</Botao>
            </Link>
          </Col>
          <Col md={7} sm={12}>
            <ImgEstilizado src={imgBanner} alt="" />
          </Col>
        </Row>
      </Container>
    </DivEstilizada>
  );
};
