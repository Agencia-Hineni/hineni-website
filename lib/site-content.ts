import { promises as fs } from "node:fs";
import path from "node:path";
import { unstable_noStore as noStore } from "next/cache";

export type Plan = {
  name: string;
  implementation: string;
  monthly: string;
  contract: string;
  featured: boolean;
};

export type SiteContent = {
  contact: {
    email: string;
    instagram: string;
  };
  localSeo: {
    headline: string;
    description: string;
    cities: string[];
  };
  plans: Plan[];
};

const contentFilePath = path.join(process.cwd(), "data", "site-content.json");
const historyDirPath = path.join(process.cwd(), "data", "history");

const fallbackContent: SiteContent = {
  contact: {
    email: "atendimento@hineni.agency",
    instagram: "@hineni.digital",
  },
  localSeo: {
    headline: "Atendimento estratégico em todo o Brasil",
    description:
      "A HINENI atende empresas em âmbito nacional, com operação digital e estrutura estratégica para posicionamento profissional em qualquer região do Brasil.",
    cities: ["Atendimento nacional", "Operação 100% digital", "Presença em todo o Brasil"],
  },
  plans: [
    {
      name: "Plano Essencial",
      implementation: "R$ 1.899,90",
      monthly: "R$ 299,00/mês",
      contract: "Contrato de 12 meses",
      featured: false,
    },
    {
      name: "Plano Profissional",
      implementation: "R$ 2.899,90",
      monthly: "R$ 399,00/mês",
      contract: "Contrato de 12 meses",
      featured: true,
    },
    {
      name: "Plano Premium",
      implementation: "R$ 4.499,89 até R$ 8.999,98",
      monthly: "R$ 899,00/mês",
      contract: "Mensalidade recorrente",
      featured: false,
    },
  ],
};

export async function getSiteContent(): Promise<SiteContent> {
  noStore();

  try {
    const file = await fs.readFile(contentFilePath, "utf8");
    const parsed = JSON.parse(file) as SiteContent;
    return parsed;
  } catch {
    return fallbackContent;
  }
}

export async function setSiteContent(content: SiteContent) {
  await fs.mkdir(historyDirPath, { recursive: true });
  const snapshotName = `site-content-${new Date().toISOString().replace(/[:.]/g, "-")}.json`;
  const snapshotPath = path.join(historyDirPath, snapshotName);

  try {
    const current = await fs.readFile(contentFilePath, "utf8");
    await fs.writeFile(snapshotPath, current, "utf8");
  } catch {
    // No previous file to snapshot.
  }

  await fs.writeFile(contentFilePath, JSON.stringify(content, null, 2), "utf8");
}

export async function getContentHistory() {
  try {
    const files = await fs.readdir(historyDirPath, { withFileTypes: true });
    return files
      .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
      .map((entry) => entry.name)
      .sort()
      .reverse()
      .slice(0, 20);
  } catch {
    return [];
  }
}