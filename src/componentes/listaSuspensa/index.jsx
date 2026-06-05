import styled from "@emotion/styled";
import { useState } from "react";
import { ItemListaEstilizado } from "./itemlista";
import { ListaEstilizado } from "./ListaSuspensa";

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

export const ListaSuspensa = ({ titulo, opcoes }) => {
  const [estaAberta, alternarVisibilidade] = useState(false);
  const [opcaoFocada, setOpcaoFocada] = useState(null);
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
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
      case "ArrowUp":
        e.preventDefault();
        setOpcaoFocada((focoAntigo) => {
          if (!focoAntigo) {
            return 0;
          }

          return focoAntigo - 1;
        });
        break;
      case "Enter":
        e.preventDefault();
        setOpcaoFocada(null);
        alternarVisibilidade(false);
        setOpcaoSelecionada(opcoes[opcaoFocada]);
        break;
      case "Tab":
      case "Escape":
        setOpcaoFocada(null);
        alternarVisibilidade(false);
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
        <div>{opcaoSelecionada ? opcaoSelecionada.text : "Selecione"}</div>
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
              onClick={() => setOpcaoSelecionada(opcao)}
            >
              {opcao.text}
            </ItemListaEstilizado>
          ))}
        </ListaEstilizado>
      )}
    </LabelEstilizada>
  );
};
