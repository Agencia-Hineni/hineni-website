export const SITE_CONFIG = {
  name: "HINENI",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hineni.com.br",
  contactEmail: "atendimento@hineni.com.br",
  instagram: "https://instagram.com/hineni.digital",
  cnpj: "65.519.046/0001-67",
  tagline: "Tecnologia e solucoes digitais para negocios que querem evoluir",
  defaultTitle: "HINENI | Tecnologia e Solucoes Digitais para Negocios",
  defaultDescription:
    "A HINENI cria sites, landing pages, sistemas e produtos digitais sob medida para empresas que querem evoluir atraves da tecnologia.",
  keywords: [
    "criacao de sites",
    "landing pages",
    "sites institucionais",
    "sistemas web sob medida",
    "desenvolvimento saas",
    "solucoes digitais sob medida",
  ],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
] as const;

export const SECTION_CLASSES = {
  hero: "py-28 lg:py-32",
  standard: "py-24 lg:py-28",
  compact: "py-20 lg:py-24",
} as const;
