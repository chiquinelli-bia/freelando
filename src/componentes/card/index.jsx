import styled from "@emotion/styled";

const DivEstilizada = styled.div`
  border: ${(props) => (props.$borda ? "1px solid" : "none")};
  border-radius: ${(props) => props.theme.espacamentos.s};
  padding: ${(props) => props.theme.espacamentos.l};
  text-align: center;
  background: ${(props) =>
    props.variante === "primaria"
      ? props.theme.cores.secundarias.a
      : props.theme.cores.secundarias.c};
  border-color: ${(props) =>
    props.variante === "primaria"
      ? props.theme.cores.primarias.a
      : props.theme.cores.primarias.c};
`;

export const Card = ({
  children,
  comBorda = "true",
  variante = "primaria",
}) => {
  return (
    <DivEstilizada $borda={comBorda} variante={variante}>
      {children}
    </DivEstilizada>
  );
};
