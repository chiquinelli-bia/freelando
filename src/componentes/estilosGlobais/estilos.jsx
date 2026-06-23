import { Global } from "@emotion/react";
const estilos = (tema) => {
  return {
    html: {
      fontFamily: tema.fontFamily.principal,
    },
    body: {
      margin: 0,
    },
    a: {
      textDecoration: "none",
    },
  };
};

const Estilos = () => {
  return <Global styles={estilos} />;
};

export default Estilos;
