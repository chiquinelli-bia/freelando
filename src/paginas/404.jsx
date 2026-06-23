import styled from "@emotion/styled";
import { Tipografia } from "../componentes/tipografia";
import erro from "../assets/erro.png";
import { Col, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import { Botao } from "../componentes/button";
import { LayoutBaseCadastro } from "./cadastro/layoutBase";
import Header from "../componentes/header";
import Footer from "../componentes/rodape";

const ImagemEstilizada = styled.img`
  max-width: 100%;
  border-radius: 16px;
`;

export const Erro = () => {
  console.log("ta qui");
  return (
    <>
      <Header />
      <LayoutBaseCadastro>
        <Tipografia variante="h1" componente="h1">
          Ops... Página não encontrada :(
        </Tipografia>
        <figure>
          <ImagemEstilizada src={erro} alt="" />
        </figure>
        <Tipografia variante="h3" componente="h3">
          Não encontramos a página que você está buscando, mas temos muitas
          outras para você navegar!
        </Tipografia>
        <Row justify="center">
          <Col lg={6} md={6} sm={6} style={{ textAlign: "center" }}>
            <Link to="/">
              <Botao variante="secundaria">Voltar para a home</Botao>
            </Link>
          </Col>
        </Row>
      </LayoutBaseCadastro>
      <Footer />
    </>
  );
};
