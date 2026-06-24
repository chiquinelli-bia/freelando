import { createContext, useContext } from "react";
import http from "../componentes/http";

export const SessaoUsuarioContext = createContext({
  UsuarioEstaLogado: false,
  login: (email, senha) => null,
  logout: () => null,
  perfil: {},
});

export const useSessaoUsuarioContext = () => {
  return useContext(SessaoUsuarioContext);
};
const login = (email, senha) => {
  http
    .post("auth/login", {
      email,
      senha,
    })
    .then((resposta) => console.log(resposta))
    .catch((erro) => console.error(erro));
};

const value = {
  login,
};

export const SessaoUsuarioProvider = ({ children }) => {
  return (
    <SessaoUsuarioContext.Provider value={value}>
      {children}
    </SessaoUsuarioContext.Provider>
  );
};
