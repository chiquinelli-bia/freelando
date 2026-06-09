/* eslint-disable no-unused-vars */
import { Col, Row } from "react-grid-system";
import cliente from "../../assets/cliente.png";
import freela from "../../assets/freela.png";
import { Tipografia } from "../../componentes/tipografia";
import { GrupoRadio } from "../../componentes/grupoRadio";
import { useState } from "react";
import { Botao } from "../../componentes/button";

const opcoes = [
  {
    valor: 1,
    label: "TI e Programação",
  },
  {
    valor: 2,
    label: "Design e Multimídia",
  },
  {
    valor: 3,
    label: "Revisão",
  },
  {
    valor: 4,
    label: "Tradução",
  },
  {
    valor: 5,
    label: "Transcrição",
  },
  {
    valor: 6,
    label: "Marketing",
  },
];

export const Interesses = () => {
  const [opcao, setOpcao] = useState("");

  return (
    <>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante="h3" componente="h2">
        Qual a área de interesse?
      </Tipografia>
      <GrupoRadio opcoes={opcoes} valor={opcao} onChange={setOpcao} />
      <Row>
        <Col lg={6} md={6} sm={6}>
          <Botao variante="secundaria">Anterior</Botao>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Botao>Próxima</Botao>
          </div>
        </Col>
      </Row>
    </>
  );
};
