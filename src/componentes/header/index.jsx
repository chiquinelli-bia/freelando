import styled from "@emotion/styled";
import logo from "../../assets/LogoCinza.png";

export const Cabecalho = styled.header`
  background: ${(props) => props.theme.cores.primarias.a};
  padding: ${(props) => props.theme.espacamentos.xl};
  color: ${(props) => props.theme.cores.branco};
`;

export default function Header() {
  return (
    <Cabecalho>
      <img src={logo} alt="logo do freelando" />
    </Cabecalho>
  );
}
