export const SITE_CONFIG = {
  name: "HINENI",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hineni.com.br",
  contactEmail: "atendimento@hineni.com.br",
  instagram: "https://instagram.com/hineni.digital",
  cnpj: "65.519.046/0001-67",
  tagline: "Tecnologia, marketing e estrutura digital para empresas que querem crescer com consistencia",
  defaultTitle: "HINENI | Agencia de Estruturacao Digital e Crescimento",
  defaultDescription:
    "A HINENI estrutura, posiciona e impulsiona empresas atraves de tecnologia, marketing e estrategia digital.",
  keywords: [
    "criacao de sites",
    "agencia digital",
    "gestao de instagram",
    "trafego pago",
    "estrutura digital",
    "marketing digital",
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
