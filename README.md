# Freelando

![Thumbnail do projeto. O título é “Freelando — fluxo de cadastro com React Router e Context API.” e o subtítulo é “adaptado por Bianca Chiquinelli”.](thumb.png)

O Freelando é uma aplicação fictícia desenvolvida com React. O projeto foi utilizado para explorar conceitos de componentização, gerenciamento de estado, roteamento de aplicações e construção de interfaces reutilizáveis.

## Tecnologias

- React e React Router DOM
- JavaScript
- Context API
- Emotion
- React Grid System
- Vite
- Git e GitHub
- Figma

## Principais implementações

- Estruturação da aplicação com React Router DOM, organizando o fluxo de navegação em múltiplas páginas.
- Criação de layouts compartilhados para reutilização de estrutura entre diferentes rotas.
- Implementação de um fluxo de cadastro multietapas. incluindo páginas de interesses, dados pessoais e conclusão.
- Centralização do estado do formulário utilizando Context API, permitindo o compartilhamento de dados entre as etapas sem prop drilling.
- Integração do provider ao fluxo de cadastro e implementação da lógica de submissão do formulário.
- Estruturação da interface com componentes reutilizáveis e estilizados com Emotion.
- Criação de um Design System utilizando ThemeProvider, centralizando cores, tipografia e espaçamentos.
- Construção de layouts responsivos com React Grid System.

## 💡 Destaque técnico

### Fluxo de cadastro com React Router DOM e Context API

Desenvolvimento de um fluxo de cadastro multietapas utilizando roteamento e gerenciamento global de estado, mantendo os dados sincronizados durante toda a navegação da aplicação.

_Recursos implementados:_

- Organização do cadastro em rotas independentes.
- Compartilhamento de estado entre páginas por meio da Context API.
- Providers integrados à estrutura de layouts da aplicação.
- Navegação entre etapas com preservação dos dados preenchidos.
- Validação e ajustes do fluxo de roteamento para garantir consistência na experiência do usuário.
- Refatoração dos componentes de formulário para consumir o contexto global.

## Acesso ao projeto

**Versão online:** <https://freelando-two.vercel.app/>

### Executar localmente

```bash
git clone <https://github.com/chiquinelli-bia/freelando>

cd freelando

npm install

npm run dev
```
