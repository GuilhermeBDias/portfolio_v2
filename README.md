# Dias.sys Portfolio

Portfolio pessoal desenvolvido com React, TypeScript, Tailwind CSS e Framer Motion, com uma estética inspirada em interfaces sistêmicas e painéis técnicos cyberpunks. O projeto organiza a página em seções, usa componentes reutilizáveis para cards e modais, e concentra os dados em arquivos de constantes para facilitar manutenção.

## Visão Geral

O aplicativo apresenta uma landing page de portfólio com navegação fixa, seções de apresentação, experiência e projetos, além de um rodapé com links sociais. A interação é guiada por animações discretas e efeitos de transição para reforçar a identidade visual sem comprometer a leitura.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion (`motion`)
- React Icons

## Estrutura

- `src/App.tsx`: composição principal da aplicação.
- `src/components/layout`: navegação e rodapé.
- `src/components/ui`: componentes reutilizáveis de interface.
- `src/constants`: dados estáticos usados pelas seções.
- `src/hooks`: hooks de apoio para animações e progresso.
- `src/sections`: blocos principais da página.
- `src/types`: tipos compartilhados.

## Funcionalidades

- Navegação com destaque da seção ativa.
- Menu mobile com abertura e fechamento controlados.
- Seção de apresentação com CTA para projetos e contato.
- Linha do tempo de experiência profissional e acadêmica.
- Grade de projetos com exibição incremental no mobile.
- Modal de detalhes do projeto com indicadores de utilização de tecnologias.
- Loader animado com efeito de typewriter.

## Como Executar

### Instalação

```bash
npm install
```

### Ambiente de Desenvolvimento

```bash
npm run dev
```

### Build de Produção

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Preview da Build

```bash
npm run preview
```

## Conteúdo e Dados

Os conteúdos de navegação, experiências e projetos estão centralizados em `src/constants`, o que facilita ajustar o portfólio sem espalhar dados pela árvore de componentes.

## Observações

- O projeto foi estruturado para manter a UI modular e fácil de evoluir.
- O layout atual prioriza uma linguagem visual técnica e consistente com o conteúdo apresentado.