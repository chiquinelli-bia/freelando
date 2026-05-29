import styled from "@emotion/styled";
const componentes = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  bodyBold: "strong",
  body1: "p",
  body1Bold: "strong",
  legenda: "p",
};

const estilos = {
  h1: `
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    `,
  h2: `
    font-weight: 600;
    font-size: 32px;
    line-height: 49px;
    `,
  h3: `
    font-weight: 500;
    font-size: 24px;
    line-height: 49px;
    `,
  body: `
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    `,
  bodyBold: `
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    `,
  body1: `
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    `,
  body1Bold: `
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    `,
  legenda: `
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
    `,
};

export const Tipografia = ({ variante, componente, children }) => {
  const tag = componentes[componente];
  const ComponenteEstilizado = styled[tag]`
    ${estilos[variante]}
  `;
  return <ComponenteEstilizado>{children}</ComponenteEstilizado>;
};
