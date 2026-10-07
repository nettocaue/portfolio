# Prompt — Portfólio Cauê Netto (Versão A)

> Cole tudo abaixo da linha no chat do Claude, no VS Code, com o projeto aberto.

---

Você vai construir meu portfólio pessoal neste projeto Next.js (App Router + TypeScript + Tailwind CSS), que acabei de criar com `create-next-app`. O objetivo é ter um link profissional para mandar em entrevistas de emprego, tanto para vagas de **suporte/TI** quanto de **desenvolvimento**.

## Referência visual (siga com fidelidade)

O arquivo `docs/referencia/versao-a.html` é o layout aprovado. Abra e leia ele inteiro antes de começar. Ele é a fonte da verdade para:
- cores, tipografia, espaçamentos, raios de borda e ordem das seções;
- todos os textos (copie exatamente, não reescreva);
- o comportamento do filtro de projetos.

O HTML usa estilos inline só porque é um protótipo. No projeto, converta tudo para **componentes React + classes Tailwind**, sem estilos inline (exceto onde for realmente necessário, como os degradês metálicos, que podem virar classes utilitárias no `globals.css`).

## Identidade visual

- **Fundo:** `#0B0B0C` · superfície `#121214` / `#0F0F11` · bordas `#1E1E21`, `#26262A`, `#3A3A3F`
- **Texto:** principal `#EDEDEA` · secundário `#A3A39F` · terciário `#7E7E7A`
- **Destaque metálico (cromado):** não existe cor de destaque saturada. Os destaques são degradês prateados:
  - texto cromado: `linear-gradient(100deg, #8E939B 0%, #F4F5F7 28%, #A9AEB6 48%, #ECEEF1 66%, #858A92 100%)` com `background-clip: text`
  - botão de prata escovada: `linear-gradient(180deg, #F4F5F7 0%, #C9CCD1 45%, #9EA3AB 55%, #DADDE1 100%)` + `box-shadow: inset 0 1px 0 #fff, inset 0 -1px 0 #6F747C`
  - etiquetas de seção ("01 — Projetos"): `#B8BCC3`
- **Fontes (via `next/font/google`):** Geist (300/400/500/600) para o texto, Geist Mono para etiquetas e detalhes, Instrument Serif itálico para as palavras de destaque.
- **Logo:** o símbolo `c/n`. Letras "c" e "n" em Geist 600, `#EDEDEA`, e a barra "/" dentro de uma plaquinha inclinada (`skewX(-12deg)`) com o degradê de prata escovada e texto `#0B0B0C`. Crie como componente `<Logo />` reutilizável e gere também o **favicon** (`app/icon.svg`) com esse símbolo sobre fundo `#0B0B0C`.

## Estrutura

```
src/
  app/
    layout.tsx        → fontes, metadata, <html lang="pt-BR">
    page.tsx          → monta as seções
    icon.svg          → favicon c/n
    opengraph-image   → imagem de prévia para redes sociais (pode ser .tsx com ImageResponse)
  components/
    Logo.tsx
    Nav.tsx           → barra flutuante em pílula, fixa no topo ao rolar
    Hero.tsx          → linhas topográficas no fundo (SVG), etiqueta, título, subtítulo, botões
    StackStrip.tsx
    Stats.tsx
    Projects.tsx      → "use client", filtro Todos / Dev / Suporte & TI
    ProjectRow.tsx
    About.tsx         → Sobre + Experiência
    Contact.tsx       → contato + rodapé
  data/
    projects.ts       → array tipado com os projetos (abaixo)
    site.ts           → links de contato, textos fixos
public/
  projetos/           → prints dos projetos (vou adicionar depois)
  curriculo-caue-netto.pdf  → (vou adicionar depois)
```

## Dados dos projetos (`src/data/projects.ts`)

| # | Título | Categoria | Status | Link |
|---|---|---|---|---|
| 01 | Overload — app de treinos | Dev | No ar | https://overloading.vercel.app/ |
| 02 | Interleigos — ferramentas de sim racing | Dev | No ar | https://interleigos.vercel.app/ |
| 03 | Central de Ajuda Pixta.me | Suporte & TI | No ar | https://ajuda.pixta.me |
| 04 | Aposentadoria do FalleN | Dev | No ar | https://www.aposentadoriadofallen.com.br/ — repositório: https://github.com/nettobruno/professor-countdown-legacy |

Descrições, stack e textos dos botões estão no `versao-a.html` (constante `PROJETOS` no script do final). Cada projeto deve ter campos opcionais `image` e `repo`; quando houver `repo`, mostre um segundo link discreto "Código ↗" ao lado do link principal. A stack do FalleN é **React · TypeScript · Vite · Tailwind · Vercel**. As imagens ficam em `/public/projetos/`. Enquanto não houver imagem, mostre o placeholder tracejado `[print do projeto]` igual ao da referência. Quando houver, use `next/image`.

## Links de contato (`src/data/site.ts`)

- E-mail: `caue.netto123@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/cau%C3%AA-netto-a40590265/`
- WhatsApp: `https://wa.me/5541996114665`
- GitHub: `https://github.com/nettocaue`
- Currículo: `/curriculo-caue-netto.pdf` (botão "Currículo ↓" no menu, com atributo `download`)

Todos os links externos abrem em nova aba com `rel="noopener noreferrer"`.

## Animações (sutis, nada exagerado)

- Hero: as linhas topográficas do fundo se movem bem devagar (deslocamento lento ou leve parallax com o scroll).
- Seções e linhas de projeto aparecem com fade + leve subida ao entrar na tela (IntersectionObserver ou CSS `animation-timeline`, sem bibliotecas pesadas).
- Hover nas linhas de projeto: título fica prateado (`#C9CCD1`) e o placeholder/imagem tem um leve zoom.
- Troca de filtro com transição suave.
- **Respeite `prefers-reduced-motion`**: sem animação para quem desativou.

## Requisitos de qualidade

- Responsivo de 360px a 1440px+. No celular, os links do menu somem e fica só o logo + botão do currículo; tudo empilha sem rolagem horizontal.
- Acessibilidade: HTML semântico, `aria-pressed` nos botões do filtro, foco visível, contraste AA, `alt` nas imagens.
- SEO: `metadata` com título "Cauê Netto — Suporte & Desenvolvimento Web", descrição, Open Graph e Twitter card, `lang="pt-BR"`.
- Sem dependências desnecessárias. Nada de bibliotecas de UI. Tailwind + React puro.
- `npm run build` precisa passar sem erros nem avisos de lint.

## Como trabalhar comigo

1. **Antes de escrever código**, leia a referência e me mostre um plano curto: componentes, como vai converter os estilos e qualquer dúvida.
2. Construa em etapas (layout base → hero → projetos com filtro → resto → animações → SEO/favicon) e me avise ao final de cada etapa, para eu conferir no `npm run dev`.
3. **Não faça commit nem push sem eu pedir.** Eu testo e autorizo antes.
4. No final, me diga o que ficou pendente (prints e currículo).
