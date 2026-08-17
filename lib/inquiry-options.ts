export const INQUIRY_INTERESTS = [
  "Landing Pages",
  "Sites Institucionais",
  "Sites Premium",
  "Sistemas Web",
  "SaaS",
  "Hineni Prospect",
  "Créditos adicionais do Hineni Prospect",
  "Continuidade (suporte mensal)",
  "Outro",
] as const;

export type InquiryInterest = (typeof INQUIRY_INTERESTS)[number];

export function isInquiryInterest(value: string): value is InquiryInterest {
  return (INQUIRY_INTERESTS as readonly string[]).includes(value);
}

export const CONTEXT_PLACEHOLDERS: Partial<Record<InquiryInterest, string>> = {
  "Landing Pages": "Descreva a oferta, o objetivo da página e o prazo desejado.",
  "Sites Institucionais": "Descreva a empresa, os objetivos do site e o prazo desejado.",
  "Sites Premium": "Descreva o projeto, o nível de personalização desejado e o prazo.",
  "Sistemas Web": "Descreva a ideia, o objetivo do sistema e as principais funcionalidades.",
  SaaS: "Descreva a ideia do produto, o objetivo e as principais funcionalidades.",
  "Hineni Prospect": "Descreva o tamanho da sua equipe comercial e o volume aproximado de prospecção.",
  "Créditos adicionais do Hineni Prospect": "Informe se já utiliza o Hineni Prospect e para qual organização.",
  "Continuidade (suporte mensal)": "Descreva o site ou sistema atual e o tipo de suporte que você precisa.",
};

export const DEFAULT_CONTEXT_PLACEHOLDER = "Descreva objetivos, prazo e escopo esperado.";

export type CreditPack = {
  id: string;
  credits: string;
  price: string;
};

export const CREDIT_PACKS: CreditPack[] = [
  { id: "1000", credits: "+1.000", price: "R$ 249" },
  { id: "2500", credits: "+2.500", price: "R$ 599" },
  { id: "5000", credits: "+5.000", price: "R$ 1.149" },
  { id: "10000", credits: "+10.000", price: "R$ 2.199" },
  { id: "25000", credits: "+25.000", price: "R$ 5.499" },
  { id: "50000", credits: "+50.000", price: "R$ 9.999" },
];

export function findCreditPack(id: string): CreditPack | undefined {
  return CREDIT_PACKS.find((pack) => pack.id === id);
}
