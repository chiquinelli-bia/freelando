import { createContext, useContext } from "react";
import http from "../componentes/http";
import armazenadorToken from "../utils/armazenadorToken";

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
  return http
    .post("auth/login", {
      email,
      senha,
    })
    .then((resposta) => {
      armazenadorToken
        .definirToken(resposta.data.access_token, resposta.data.refresh_token)
        .catch((erro) => console.error(erro));
    });
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
