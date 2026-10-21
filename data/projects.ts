export type ProjectCategory = "dev" | "sup";

export interface Project {
  num: string;
  key: ProjectCategory;
  cat: string;
  status: string;
  title: string;
  desc: string;
  stack: string;
  cta: string;
  href: string;
  repo?: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    num: "01",
    key: "sup",
    cat: "Suporte",
    status: "No ar",
    title: "Central de Ajuda Pixta.me",
    desc: "Mapeei os assuntos que mais geravam tickets e transformei em artigos de autoatendimento, organizados por jornada do comprador e do produtor de eventos.",
    stack: "Chatwoot · Base de conhecimento · Análise de tickets",
    cta: "Abrir a central",
    href: "https://ajuda.pixta.me",
    image: "central-de-ajuda.png",
  },
  {
    num: "02",
    key: "dev",
    cat: "Projeto pessoal",
    status: "No ar",
    title: "Overload — app de treinos",
    desc: "App para registrar treinos e acompanhar a progressão de carga, com foco em menos distração e mais evolução. Pensado para o celular e instalável como web app no iPhone. Tem área de personal trainer para gerenciar alunos, treinos, dietas e avaliações físicas, com assinaturas via Mercado Pago.",
    stack: "React · Supabase · Mercado Pago · Vercel",
    cta: "Ver o app",
    href: "https://overloading.vercel.app/",
    image: "overload.png",
  },
  {
    num: "03",
    key: "dev",
    cat: "Projeto pessoal",
    status: "No ar",
    title: "Fluxo — finanças pessoais",
    desc: "App de finanças pessoais que substitui a planilha de controle de gastos: lançamentos rápidos, saldo que passa sozinho de um mês para o outro, contas fixas automáticas e investimentos acompanhados à parte, com metas anuais. Importa a planilha antiga (.xlsx), funciona no computador e no celular e pode ser instalado no iPhone como web app.",
    stack: "React · TypeScript · Vite · Supabase · Vercel",
    cta: "Ver o app",
    href: "https://finance-fluxo.vercel.app/",
    image: "fluxo.png",
  },
  {
    num: "04",
    key: "dev",
    cat: "Projeto pessoal",
    status: "No ar",
    title: "Interleigos — ferramentas de sim racing",
    desc: "Plataforma gratuita feita pela comunidade de automobilismo virtual: calculadora de combustível, biblioteca de setups de Assetto Corsa Competizione com upload pelos próprios pilotos e gerador de estratégia de pit stop.",
    stack: "Next.js · Tailwind · Supabase · Vercel",
    cta: "Ver o site",
    href: "https://interleigos.vercel.app/",
    image: "interleigos.png",
  },
  {
    num: "05",
    key: "dev",
    cat: "Projeto pessoal",
    status: "No ar",
    title: "Telemetria & Overlay — ACC",
    desc: "App desktop para Windows que exibe um overlay de telemetria em tempo real para o Assetto Corsa Competizione: velocidade, RPM, marcha, pedais, pneus, combustível e muito mais. Lê os dados diretamente da memória compartilhada do jogo e renderiza widgets customizáveis sobre a tela.",
    stack: "Electron · Node.js · TypeScript · Tailwind",
    cta: "Ver releases",
    href: "https://github.com/nettocaue/ACC-Telemetry-Overlay-App/releases",
    repo: "https://github.com/nettocaue/ACC-Telemetry-Overlay-App",
    image: "telemetria3.png",
  },
  {
    num: "06",
    key: "dev",
    cat: "Projeto pessoal",
    status: "No ar",
    title: "Aposentadoria do FalleN",
    desc: "Site-tributo feito por fã para o FalleN, ícone do Counter-Strike brasileiro: contagem regressiva para a aposentadoria e uma retrospectiva da carreira, conquistas e momentos marcantes. Tema escuro, responsivo e com prévia otimizada para compartilhar nas redes.",
    stack: "React · TypeScript · Vite · Tailwind · Vercel",
    cta: "Ver o site",
    href: "https://www.aposentadoriadofallen.com.br/",
    repo: "https://github.com/nettobruno/professor-countdown-legacy",
    image: "fallen.png",
  }
];

export const FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "sup",   label: "Suporte" },
  { id: "dev",   label: "Projetos pessoais" },
] as const;

export type FilterId = (typeof FILTERS)[number]["id"];
