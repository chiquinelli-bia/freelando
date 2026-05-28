import styled from "@emotion/styled";

const DivEstilizada = styled.div`
  /* background: ;
    border: 1px solid; */
`;

export const Card = ({ children }) => {
  return <DivEstilizada>{children}</DivEstilizada>;
};
