import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/tipografia";
import { GrupoRadio } from "../../componentes/grupoRadio";
import { Botao } from "../../componentes/button";
import { Link } from "react-router-dom";
import { useCadastroUsuarioContext } from "../../contexto/cadastroUsuario";

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
  const { usuario, setInteresse } = useCadastroUsuarioContext();
  return (
    <>
      <Tipografia variante="h1" componente="h1">
        Crie seu cadastro
      </Tipografia>
      <Tipografia variante="h3" componente="h2">
        Qual a área de interesse?
      </Tipografia>
      <GrupoRadio
        opcoes={opcoes}
        valor={usuario.interesse}
        onChange={setInteresse}
      />
      <Row>
        <Col lg={6} md={6} sm={6}>
          <Link to="/cadastro">
            <Botao variante="secundaria">Anterior</Botao>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Link to="/cadastro/dados-pessoais">
              <Botao>Próxima</Botao>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  );
};
