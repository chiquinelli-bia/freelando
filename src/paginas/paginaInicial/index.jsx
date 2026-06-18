import { Col, Container } from "react-grid-system";
import { Banner } from "./banner";
import { Cards } from "./vantagens/cards";
import { cardsClientes, cardsFreelas, habilidades } from "./dados";
import CardCliente from "./vantagens/cards/cardCliente";
import CardFreela from "./vantagens/cards/cardFreela";
import Chip from "../../componentes/chip";

export const PaginaInicial = () => {
  return (
    <>
      <Banner />
      <Container>
        <Cards titulo="Vantagens para contratantes">
          {cardsClientes.map((card) => (
            <CardCliente
              key={card.texto}
              icone={card.icone}
              texto={card.texto}
            />
          ))}
        </Cards>
        <Cards titulo="Vantagens para freelas">
          {cardsFreelas.map((card) => (
            <CardFreela
              key={card.texto}
              icone={card.icone}
              texto={card.texto}
            />
          ))}
        </Cards>
        <Cards titulo="Quais habilidades você encontra por aqui?">
          <Col sm={12}>
            {habilidades.map((habilidade) => (
              <Chip key={habilidade}>{habilidade}</Chip>
            ))}
          </Col>
        </Cards>
      </Container>
    </>
  );
};
