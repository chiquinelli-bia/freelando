import styled from "@emotion/styled";

export const ItemListaEstilizado = styled.li`
  cursor: pointer;
  width: 100%;
  padding: ${(props) => props.theme.espacamentos.xs} 0;
  border-bottom: 1px solid ${(props) => props.theme.cores.neutras.c};
  text-align: center;
  color: ${(props) => (props.focoAtivo ? props.theme.cores.focus : "inherit")};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: ${(props) => props.theme.cores.focus};
  }
`;
