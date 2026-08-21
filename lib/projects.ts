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
    imageSrc: "/branding/tda-cover.webp",
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
    imageSrc: "/branding/drophouse-cover.webp",
    imageAlt: "Capa do projeto DropHouse",
    accentClass:
      "bg-[radial-gradient(circle_at_82%_18%,rgba(30,58,138,0.35),transparent_26%),radial-gradient(circle_at_24%_78%,rgba(184,148,66,0.18),transparent_32%),linear-gradient(180deg,rgba(8,13,24,0.16),rgba(8,13,24,0.92))]",
  },
  {
    name: "Studio 97",
    category: "Landing Page",
    status: "Modelo comercial",
    url: "https://modelo.hineni.agency",
    summary:
      "Landing page modelo desenvolvida para demonstrar como a Hineni estrutura páginas de conversão para negócios locais, com foco em agendamento rápido e apresentação premium.",
    context:
      "O objetivo era ter uma landing page de referência para mostrar a clientes em potencial o padrão de execução da Hineni: hero direto, prova social e chamada clara para agendamento, aplicados a um negócio local do dia a dia.",
    solution:
      "Desenvolvemos uma landing page completa para uma barbearia fictícia, com identidade visual premium, seções de serviços, ambiente e depoimentos, e botão de agendamento direto pelo WhatsApp.",
    results: [
      "Modelo de referência para vendas de landing pages",
      "Fluxo de agendamento direto via WhatsApp",
      "Estrutura replicável para negócios locais",
    ],
    stack: ["Landing Page", "Agendamento via WhatsApp", "UX Mobile"],
    imageSrc: "/branding/studio97-cover.webp",
    imageAlt: "Capa do projeto Studio 97",
    accentClass:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(184,148,66,0.22),transparent_30%),linear-gradient(180deg,rgba(10,8,5,0.12),rgba(10,8,5,0.9))]",
  },
];
