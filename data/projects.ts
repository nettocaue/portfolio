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
    key: "dev",
    cat: "Dev",
    status: "No ar",
    title: "Overload — app de treinos",
    desc: "App para registrar treinos e acompanhar a progressão de carga, com foco em menos distração e mais evolução. Pensado para o celular e instalável como web app no iPhone. Tem área de personal trainer para gerenciar alunos, treinos, dietas e avaliações físicas, com assinaturas via Mercado Pago.",
    stack: "React · Supabase · Mercado Pago · Vercel",
    cta: "Ver o app",
    href: "https://overloading.vercel.app/",
    image: "overload.png",
  },
  {
    num: "02",
    key: "dev",
    cat: "Dev",
    status: "No ar",
    title: "Interleigos — ferramentas de sim racing",
    desc: "Plataforma gratuita feita pela comunidade de automobilismo virtual: calculadora de combustível, biblioteca de setups de Assetto Corsa Competizione com upload pelos próprios pilotos e gerador de estratégia de pit stop.",
    stack: "Next.js · Tailwind · Supabase · Vercel",
    cta: "Ver o site",
    href: "https://interleigos.vercel.app/",
    image: "interleigos.png",
  },
  {
    num: "03",
    key: "sup",
    cat: "Suporte & TI",
    status: "No ar",
    title: "Central de Ajuda Pixta.me",
    desc: "Mapeei os assuntos que mais geravam tickets e transformei em artigos de autoatendimento, organizados por jornada do comprador e do produtor de eventos.",
    stack: "Chatwoot · Base de conhecimento · Análise de tickets",
    cta: "Abrir a central",
    href: "https://ajuda.pixta.me",
    image: "central-de-ajuda.png",
  },
  {
    num: "04",
    key: "dev",
    cat: "Dev",
    status: "No ar",
    title: "Aposentadoria do FalleN",
    desc: "Site-tributo feito por fã para o FalleN, ícone do Counter-Strike brasileiro: contagem regressiva para a aposentadoria e uma retrospectiva da carreira, conquistas e momentos marcantes. Tema escuro, responsivo e com prévia otimizada para compartilhar nas redes.",
    stack: "React · TypeScript · Vite · Tailwind · Vercel",
    cta: "Ver o site",
    href: "https://www.aposentadoriadofallen.com.br/",
    repo: "https://github.com/nettobruno/professor-countdown-legacy",
    image: "fallen.png",
  },
];

export const FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "dev",   label: "Dev" },
  { id: "sup",   label: "Suporte & TI" },
] as const;

export type FilterId = (typeof FILTERS)[number]["id"];
