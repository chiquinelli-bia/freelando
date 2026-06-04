import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { ItemListaEstilizado } from "./itemlista";

const LabelEstilizada = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`;

const BotaoEstilizado = styled.button`
  cursor: pointer;
  height: 40px;
  width: 100%;
  font-size: 18px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  border-radius: 18px;
  border-bottom-left-radius: ${(props) => (props.estaAberta ? "0" : "18px")};
  border-bottom-right-radius: ${(props) => (props.estaAberta ? "0" : "18px")};
  margin-top: ${(props) => props.theme.espacamentos.xs};
  padding: ${(props) => props.theme.espacamentos.s};
  background: ${(props) => props.theme.cores.branco};
  border: 1px solid ${(props) => props.theme.cores.neutras.a};
  &:focus {
    border-color: ${(props) => props.theme.cores.focus};
  }
`;
const ListaEstilizado = styled.ul`
  margin-top: 0;
  width: 100%;
  gap: 4px;
  font-size: 18px;
  list-style-type: none;
  outline: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 18px 18px;
  padding: 0;
  background: ${(props) => props.theme.cores.branco};
  border: 1px solid ${(props) => props.theme.cores.neutras.a};
  color: ${(props) => props.theme.cores.neutras.a};
`;

export const ListaSuspensa = ({ titulo, opcoes }) => {
  const [estaAberta, alternarVisibilidade] = useState(false);
  const [opcaoFocada, setOpcaoFocada] = useState(null);
  useEffect(() => {}, [opcaoFocada]);
  const manipularTeclaDoTeclado = (e) => {
    alternarVisibilidade(true);
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setOpcaoFocada((focoAntigo) => {
          if (focoAntigo === null) {
            return 0;
          }
          if (focoAntigo >= opcoes.length - 1) {
            return focoAntigo;
          }
          return focoAntigo + 1;
        });
        break;
      default:
        break;
    }
  };

  return (
    <LabelEstilizada>
      {titulo}
      <BotaoEstilizado
        type="button"
        estaAberta={estaAberta}
        onClick={() => alternarVisibilidade(!estaAberta)}
        onKeyDown={manipularTeclaDoTeclado}
      >
        <div>Selecione</div>
        <div>
          <span>{estaAberta ? "▲" : "▼"}</span>
        </div>
      </BotaoEstilizado>
      {estaAberta && (
        <ListaEstilizado>
          {opcoes.map((opcao, index) => (
            <ItemListaEstilizado
              key={opcao.value}
              focoAtivo={index === opcaoFocada}
            >
              {opcao.text}
            </ItemListaEstilizado>
          ))}
        </ListaEstilizado>
      )}
    </LabelEstilizada>
  );
};
