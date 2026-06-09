import { Radio } from "./radio";

export const GrupoRadio = ({ opcoes, valor, onChange }) => {
  return (
    <div>
      {opcoes.map((option) => (
        <Radio
          key={option.valor}
          valor={option.valor}
          label={option.label}
          checked={option.valor === valor}
          onlick={() => onChange(valor)}
        />
      ))}
    </div>
  );
};
