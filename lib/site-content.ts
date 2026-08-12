import { promises as fs } from "node:fs";
import path from "node:path";
import { unstable_noStore as noStore } from "next/cache";

export type ServiceOffering = {
  name: string;
  description: string;
  price: string;
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
  services: ServiceOffering[];
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
  services: [
    {
      name: "Landing Pages",
      description: "Páginas focadas em uma oferta, campanha, produto ou serviço.",
      price: "A partir de R$ 1.490",
    },
    {
      name: "Sites Institucionais",
      description:
        "Sites profissionais para empresas que precisam estabelecer ou fortalecer sua presença digital.",
      price: "A partir de R$ 2.990",
    },
    {
      name: "Sites Premium",
      description: "Projetos mais personalizados, com maior nível de design, estrutura e funcionalidades.",
      price: "A partir de R$ 4.990",
    },
    {
      name: "Sistemas Web",
      description: "Sistemas desenvolvidos sob medida para necessidades específicas de uma empresa.",
      price: "A partir de R$ 7.990",
    },
    {
      name: "SaaS",
      description: "Desenvolvimento de produtos digitais e plataformas SaaS sob medida.",
      price: "Projeto sob consulta",
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
