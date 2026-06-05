# Freelando

![Thumbnail do projeto. O título é “Freelando • Componentes customizados” e o subtítulo é “adaptado por Bianca Chiquinelli”.](thumb.png)

O Freelando é uma startup fictícia em formato de MVP desenvolvida com React. O projeto foi utilizado para aprofundar conceitos de componentização, gerenciamento de estado, estilização com Emotion e construção de interfaces reutilizáveis.

## Tecnologias

- React
- JavaScript
- Emotion
- React Grid System
- Vite
- Git e GitHub
- Figma

## Principais implementações

- Estruturação da interface com componentes reutilizáveis.
- Criação de Design System utilizando ThemeProvider.
- Centralização de cores, tipografia e espaçamentos.
- Desenvolvimento de componentes estilizados com Emotion.
- Construção de layouts responsivos com React Grid System.
- Implementação de formulário baseado em composição de componentes.
- Gerenciamento de estado local para controle de interações da interface.

## 💡 Destaque técnico

### Lista suspensa customizada

Desenvolvimento de um componente de seleção sem dependência de bibliotecas externas, com suporte à navegação por teclado e controle de foco.

**Recursos implementados:**

- Controle de abertura e fechamento através de estado local.
- Navegação entre opções utilizando `ArrowUp` e `ArrowDown`.
- Seleção de itens através da tecla `Enter`.
- Fechamento do componente com `Escape` e `Tab`.
- Controle de foco entre os itens da lista.
- Atualização dinâmica da opção selecionada.
- Feedback visual para foco e interação.
- Estilização condicional baseada no estado do componente.

**Conceitos aplicados:**

- React Hooks (`useState`).
- Functional Updates para atualização segura de estado.
- Tratamento de eventos de teclado.
- Renderização condicional.
- Comunicação entre componentes via props.
- Estilos dinâmicos com Emotion.
- Práticas de acessibilidade voltadas para navegação por teclado.

## Acesso ao projeto

**Versão online:**
https://freelando-two.vercel.app/

### Executar localmente

```bash
git clone <https://github.com/chiquinelli-bia/freelando>

cd freelando

npm install

npm run dev
```
