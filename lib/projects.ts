export type Project = {
  name: string;
  category: string;
  status: string;
  url: string;
  summary: string;
  context: string;
  solution: string;
  results: string[];
  stack: string[];
  imageSrc: string;
  imageAlt: string;
  accentClass: string;
};

export const projects: Project[] = [
  {
    name: "Igreja TDA",
    category: "Institucional",
    status: "Projeto publicado",
    url: "https://igrejatda.com",
    summary:
      "Plataforma institucional criada para organizar comunicação, fortalecer presença digital e facilitar o acesso rápido às informações principais da comunidade.",
    context:
      "O projeto precisava reunir agenda, contatos, informações institucionais e canais de apoio em uma navegação simples, com leitura clara no desktop e no celular.",
    solution:
      "Estruturamos a arquitetura de conteúdo, refinamos a hierarquia visual e desenvolvemos uma navegação objetiva para reduzir atrito e melhorar a experiência de acesso.",
    results: [
      "Navegação institucional mais clara e direta",
      "Experiência responsiva para celular e computador",
      "Contato e acesso às informações principais em menos cliques",
    ],
    stack: ["Next.js", "Tailwind CSS", "Formulários"],
    imageSrc: "/branding/tda-cover.png",
    imageAlt: "Capa do projeto Igreja TDA",
    accentClass:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(184,148,66,0.2),transparent_28%),linear-gradient(180deg,rgba(11,15,25,0.1),rgba(11,15,25,0.88))]",
  },
  {
    name: "DropHouse",
    category: "E-commerce",
    status: "Projeto publicado",
    url: "https://drophouse.shop",
    summary:
      "E-commerce desenvolvido para apresentar catálogo, facilitar a jornada de compra e sustentar uma operação digital com identidade visual forte e navegação fluida.",
    context:
      "A marca precisava de uma estrutura que combinasse apelo visual, organização de produtos e uma experiência de compra simples para mobile e desktop.",
    solution:
      "Construímos uma loja com foco em clareza de vitrine, leitura rápida dos produtos e uma interface preparada para apoiar crescimento comercial e campanhas.",
    results: [
      "Estrutura de e-commerce pensada para conversão",
      "Catálogo organizado para navegação mais fluida",
      "Base visual e técnica pronta para expansão da loja",
    ],
    stack: ["E-commerce", "Catálogo", "UX Mobile"],
    imageSrc: "/branding/drophouse-cover.png",
    imageAlt: "Capa do projeto DropHouse",
    accentClass:
      "bg-[radial-gradient(circle_at_82%_18%,rgba(30,58,138,0.35),transparent_26%),radial-gradient(circle_at_24%_78%,rgba(184,148,66,0.18),transparent_32%),linear-gradient(180deg,rgba(8,13,24,0.16),rgba(8,13,24,0.92))]",
  },
];
