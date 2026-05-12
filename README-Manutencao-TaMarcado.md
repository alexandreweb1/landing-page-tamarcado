# Manual Técnico e de Manutenção — Projeto TaMarcado

## Visão Geral

Este documento descreve todas as alterações realizadas na landing page do projeto **TaMarcado**, explicando:

- O que foi alterado
- O motivo das alterações
- Como funciona cada melhoria
- Como futuros programadores podem manter ou evoluir o projeto

---

# Arquitetura do Projeto

O projeto segue arquitetura frontend estática baseada em separação de responsabilidades.

## Separação utilizada

| Tecnologia | Responsabilidade            |
| ---------- | --------------------------- |
| HTML       | Estrutura                   |
| CSS        | Interface visual            |
| JavaScript | Comportamentos e interações |

---

# Estrutura do Projeto

```txt
/
├── index.html
├── contato.html
├── privacy.html
├── terms.html
├── styles.css
├── menu-mobile.js
└── README.md
```

---

# Estrutura das Páginas

## index.html

Landing page principal.

Responsável por:

- hero section;
- mockups;
- pilares;
- categorias;
- roadmap;
- CTA;
- footer;
- posicionamento da marca.

---

## contato.html

Página de contato.

Responsável por:

- formulário;
- integração mailto;
- canais institucionais;
- fluxo LGPD;
- suporte.

---

## privacy.html

Página de política de privacidade.

Responsável por:

- conformidade LGPD;
- tratamento de dados;
- direitos do usuário;
- exclusão de conta.

---

## terms.html

Página de termos de uso.

Responsável por:

- regras da plataforma;
- responsabilidades;
- limitações legais.

---

# Estrutura Visual

A interface foi construída seguindo:

- design minimalista;
- sistema de espaçamento 4px;
- layout mobile-first;
- contraste elevado;
- tipografia moderna;
- componentes reutilizáveis;
- grids responsivos.

---

# Sistema de Design

## Tokens CSS

O projeto utiliza Design Tokens.

### Exemplo

```css
--tm-emerald-700
--tm-cream-50
--tm-radius-full
--tm-elev-1
```

---

# Objetivos dos Tokens

- evitar inconsistências;
- facilitar manutenção;
- melhorar escalabilidade;
- permitir evolução futura.

---

# Convenções CSS

## Prefixo utilizado

```txt
tm-
```

## Exemplo

```css
.tm-wordmark
--tm-emerald-700
```

---

# Componentes Compartilhados

Os seguintes componentes são reutilizados entre páginas:

- Navbar
- Footer
- Botões
- Sistema de grids
- Sistema de tipografia
- Sistema de espaçamento

Alterações nesses componentes impactam todas as páginas.

---

# Navbar

## Estrutura

A navbar é composta por:

- logo;
- navegação;
- CTA;
- menu mobile.

---

# Navbar Fixa

A navbar foi convertida para:

```css
position: fixed;
```

## Motivo

- manter navegação sempre visível;
- melhorar UX;
- padronizar comportamento.

---

# Compensação da Navbar

Devido à navbar fixa:

```css
body {
  padding-top: 84px;
}
```

## Importante

NÃO remover essa regra.

Sem ela:

- o conteúdo ficará atrás da navbar.

---

# Menu Mobile

## Estrutura HTML

```html
<button class="menu-toggle" id="menuToggle">☰</button>

<div class="nav-links" id="navLinks">...</div>
```

---

# Arquivo do Menu

```txt
menu-mobile.js
```

---

# Responsabilidades do menu-mobile.js

- abrir menu;
- fechar menu;
- fechar ao clicar fora;
- impedir fechamento interno;
- controlar classe `.active`.

---

# Fluxo do Menu Mobile

## Funcionamento

1. Usuário clica no botão hambúrguer
2. Classe `.active` é adicionada
3. CSS exibe menu
4. Clique fora remove `.active`

---

# Estrutura do JavaScript

## Padrão utilizado

JavaScript Vanilla.

## Motivos

- menor bundle;
- carregamento rápido;
- sem dependências;
- fácil manutenção;
- maior compatibilidade.

---

# Estrutura do CSS

O CSS foi organizado por blocos:

```css
/* NAVBAR */
/* HERO */
/* PILARES */
/* CATEGORIAS */
/* CLIENTE */
/* PRESTADOR */
/* CTA */
/* FOOTER */
```

---

# Responsividade

## Estratégia utilizada

O projeto utiliza:

- media queries;
- grids adaptáveis;
- clamp();
- max-width;
- width fluida;
- aspect-ratio.

---

# Breakpoints do Projeto

## Desktop

Acima de:

```css
860px
```

Layout completo.

---

## Tablet

Até:

```css
860px
```

Ativa:

- menu hambúrguer;
- grids simplificados;
- componentes fluidos.

---

## Mobile

Até:

```css
480px
```

Ativa:

- otimizações touch;
- largura total de componentes;
- ajustes tipográficos.

---

# Melhorias Implementadas

## Menu Hambúrguer

Implementado:

- toggle;
- fechamento externo;
- experiência mobile;
- dropdown responsivo.

---

## Correções Mobile

Foram corrigidos:

- overflow horizontal;
- hover ilegível;
- componentes quebrando;
- grids estourando;
- menu desaparecendo.

---

# Overflow Horizontal

Foi aplicado:

```css
overflow-x: hidden;
```

## Objetivo

Evitar:

- scroll lateral;
- elementos vazando da viewport.

---

# Mockups Responsivos

Os mockups foram convertidos para:

- width fluida;
- max-width;
- aspect-ratio.

---

# Sistema de Hover

Os botões possuem:

- hover isolado;
- transitions;
- sombras suaves;
- contraste corrigido.

---

# Performance

Melhorias aplicadas:

- reutilização de componentes;
- separação de JS;
- CSS centralizado;
- menos repetição;
- cache do navegador.

---

# Fluxo de Carregamento

1. HTML carrega estrutura
2. styles.css aplica identidade visual
3. menu-mobile.js controla interações
4. Navegador aplica media queries

---

# Checklist de Manutenção

Antes de qualquer alteração:

- validar responsividade;
- testar mobile;
- testar tablet;
- verificar hover;
- validar navbar;
- testar overflow;
- conferir alinhamentos;
- validar contraste.

---

# Regras Obrigatórias

## NÃO remover

```css
overflow-x: hidden;
```

---

## NÃO remover

```css
body {
  padding-top: 84px;
}
```

---

## NÃO duplicar scripts inline

Sempre reutilizar:

```html
<script src="menu-mobile.js"></script>
```

---

## NÃO esconder links do menu mobile

Evitar:

```css
display: none;
```

nos links da navbar mobile.

---

# Criação de Novas Páginas

Toda nova página deve:

- reutilizar navbar;
- reutilizar footer;
- importar styles.css;
- importar menu-mobile.js;
- seguir os tokens visuais.

---

# Guia Rápido para Desenvolvedores

## Alterar textos

Editar:

- index.html
- contato.html
- privacy.html
- terms.html

---

## Alterar estilos

Editar:

```txt
styles.css
```

---

## Alterar comportamento do menu

Editar:

```txt
menu-mobile.js
```

---

# Problemas Conhecidos

Atualmente:

- formulário usa mailto:;
- não existe backend;
- não existe persistência;
- menu mobile sem animação.

---

# Roadmap Técnico

Planejado:

- dark mode;
- backend Node.js;
- Firebase;
- autenticação;
- API REST;
- PWA;
- lazy loading;
- SEO avançado.

---

# Deploy

Compatível com:

- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

---

# Compatibilidade

Compatível com:

- Chrome
- Edge
- Firefox
- Safari
- Android
- iOS

---

# Filosofia do Projeto

O projeto foi construído com foco em:

- simplicidade;
- acessibilidade;
- experiência mobile;
- performance;
- manutenção fácil;
- escalabilidade futura.

---

# Observação Final

Toda a estrutura foi organizada para:

- facilitar evolução futura;
- permitir entrada de novos desenvolvedores;
- reduzir retrabalho;
- melhorar manutenção;
- reutilizar componentes;
- manter consistência visual.
