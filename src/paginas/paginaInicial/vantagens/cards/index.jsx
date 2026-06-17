import { Row } from "react-grid-system";
import { Tipografia } from "../../../../componentes/tipografia";
import styled from "@emotion/styled";
const DivEstilizada = styled.div`
  text-align: center;
  padding-top: ${(props) => props.theme.espacamentos.s};
`;
export const Cards = ({ titulo, children }) => {
  return (
    <DivEstilizada>
      <Tipografia variante="h2" componente="h2">
        {titulo}
      </Tipografia>
      <Row>{children}</Row>
    </DivEstilizada>
  );
};
