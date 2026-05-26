import { css, Global } from "@emotion/react";
const estilos = css`
  * {
    font-family: "Montserrat", sans-serif;
  }
`;

const Estilos = () => {
  return <Global styles={estilos} />;
};

export default Estilos;
