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

export const sessaoUsuarioProvider = ({ children }) => {
  return (
    <SessaoUsuarioContext.Provider value={contexto}>
      {children}
    </SessaoUsuarioContext.Provider>
  );
};
