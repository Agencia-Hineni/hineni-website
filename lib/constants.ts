export const SITE_CONFIG = {
  name: "HINENI",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hineni.com.br",
  contactEmail: "atendimento@hineni.com.br",
  instagram: "https://instagram.com/hineni.digital",
  tagline: "Estrutura digital com foco em operação e resultado mensurável",
  defaultTitle: "HINENI | Soluções Digitais Empresariais",
  defaultDescription:
    "A HINENI projeta sites e estruturas digitais para empresas que precisam de operação confiável, comunicação clara e evolução contínua.",
  keywords: [
    "agência de desenvolvimento web empresarial",
    "estrutura digital empresarial",
    "site institucional premium",
    "landing page estratégica para empresas",
    "desenvolvimento web de alta performance",
    "presença digital corporativa",
    "agência digital em são paulo",
    "criação de sites empresariais no brasil",
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
