import { ThemeProvider } from "@emotion/react";

const tema = {
  cores: {
    branco: "#ffffff",
    atencao: "",
    focus: "#B009FF",
    primarias: {
      a: "#5754ED",
      b: "#D93114",
      c: "",
    },
    secundarias: {
      a: "#EBEAF9",
      b: "#F8F8FD",
      c: "",
    },
    neutras: {
      a: "#373737",
      b: "#E8E8E8",
      c: "#F5F5F5",
      d: "",
    },
    dark: {
      a: "",
      b: "#B61B00",
    },
  },
  espacamentos: {
    xs: "8px",
    s: "16px",
    m: "24px",
    l: "32px",
    xl: "48px",
  },
  fontFamily: {
    principal: "'Montserrat', sans-serif",
  },
};

export const ProvedorTema = ({ children }) => {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>;
};
