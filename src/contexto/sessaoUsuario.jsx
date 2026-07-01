import { createContext, useContext, useState } from "react";
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
export const SessaoUsuarioProvider = ({ children }) => {
  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(
    !!armazenadorToken.accessToken,
  );

  const login = async (email, senha) => {
    return await http
      .post("auth/login", {
        email,
        senha,
      })
      .then((resposta) => {
        armazenadorToken.definirToken(
          resposta.data.access_token,
          resposta.data.refresh_token,
        );
        setUsuarioEstaLogado(true);
      })
      .catch((erro) => console.error(erro));
  };

  const logout = () => {
    armazenadorToken.efetuarLogout();
    setUsuarioEstaLogado(false);
  };

  const value = {
    login,
    usuarioEstaLogado,
    logout,
  };

  return (
    <SessaoUsuarioContext.Provider value={value}>
      {children}
    </SessaoUsuarioContext.Provider>
  );
};
