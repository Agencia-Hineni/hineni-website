export const SITE_CONFIG = {
  name: "HINENI",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hineni.com.br",
  contactEmail: "atendimento@hineni.com.br",
  instagram: "https://instagram.com/hineni.digital",
  tagline: "Elevando sua presença digital",
  defaultTitle: "HINENI | Estrutura Digital Empresarial",
  defaultDescription:
    "A HINENI projeta estruturas digitais empresariais com foco em autoridade, posicionamento e performance para marcas que operam com visão de crescimento.",
  keywords: [
    "agencia de desenvolvimento web empresarial",
    "estrutura digital empresarial",
    "site institucional premium",
    "landing page estrategica para empresas",
    "desenvolvimento web de alta performance",
    "presenca digital corporativa",
    "agencia digital em sao paulo",
    "criacao de sites empresariais no brasil",
    "desenvolvimento web para empresas no brasil",
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
