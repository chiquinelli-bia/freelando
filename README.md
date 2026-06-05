# Freelando

![Thumbnail do projeto. O título é “Freelando • Componentes customizados” e o Subtítulo é “adaptado por Bianca Chiquinelli.”](thumb.png)

O Freelando é uma startup fictícia desenvolvida durante a formação de React da Alura. O projeto simula um MVP em evolução, servindo como ambiente para aplicar conceitos de componentização, gerenciamento de estado, estilização escalável e construção de interfaces reutilizáveis.

O foco desta implementação foi estruturar componentes desacoplados, evoluir a organização visual da aplicação e desenvolver interações mais sofisticadas utilizando React e Emotion

![Imagem da aplicação da Jornada Milhas](jornada-milhas.png)

## Tecnologias

- React
- Emotion
- React Grid System
- JavaScript
- Vite
- Git e GitHub
- Figma

## Principais implementações

- Estruturação da aplicação com componentes reutilizáveis e desacoplados.
- Configuração de design system utilizando ThemeProvider para centralização de cores, tipografia e espaçamentos.
- Construção de layouts responsivos com React Grid System.
- Desenvolvimento de componentes de interface reutilizáveis utilizando Emotion.
- Implementação de formulário baseado em composição de componentes.
- Organização da estilização por responsabilidade, separando comportamento e apresentação.

## 💡 Destaques do projeto

_Lista suspensa customizada_

Desenvolvimento de um componente de seleção totalmente customizado, sem dependência de bibliotecas externas.

### Funcionalidades implementadas:

- Controle de abertura e fechamento através de estado local.
- Navegação por teclado utilizando `ArrowUp` e `ArrowDown`.
- Seleção de opções através da tecla `Enter`.
- Fechamento do componente com `Escape` e `Tab`.
- Controle de foco entre os itens da lista.
- Atualização dinâmica da opção selecionada.
- Feedback visual de foco e interação.
- Estilização condicional baseada em estado.

### Aspectos técnicos aplicados:

- Gerenciamento de múltiplos estados com React Hooks.
- Atualizações de estado baseadas no valor anterior (functional updates).
- Tratamento de eventos de teclado para melhorar acessibilidade e experiência de uso.
- Renderização condicional de componentes.
- Comunicação entre componentes através de propriedades.
- Utilização de estilos dinâmicos com Emotion para refletir mudanças de estado na interface.

## Como Ter Acesso ao Projeto

- **Versão online**: [Clique aqui](https://jornada-milhas-delta.vercel.app/)
- **Rodar localmente**:
  Clone o repositório e instale as dependências:

```bash
cd freelando
```

5. Instale as dependências usando o npm:

```bash
npm install
```

6. Inicie o projeto localmente:

```bash
npm run dev
```
