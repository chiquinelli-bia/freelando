import axios from "axios";
import { createContext, useContext } from "react";

export const SessaoUsuarioContext = createContext({
  UsuarioEstaLogado: false,
  login: () => null,
  logout: () => null,
  perfil: {},
});

export const useSessaoUsuarioContext = () => {
  return useContext(SessaoUsuarioContext);
};
const login = ({ email, senha }) => {
  axios
    .post("http://localhost:8080/auth/login", {
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
