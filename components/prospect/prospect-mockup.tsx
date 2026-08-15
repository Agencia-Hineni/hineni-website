import { cn } from "@/lib/utils";

const stats = [
  { label: "Créditos", bars: [40, 65, 50, 80, 60] },
  { label: "Leads ativos", bars: [55, 70, 45, 90, 65] },
  { label: "Taxa de resposta", bars: [30, 55, 40, 60, 50] },
];

const leads = [
  { name: "Empresa A", status: "Novo lead" },
  { name: "Empresa B", status: "Em contato" },
  { name: "Empresa C", status: "Qualificado" },
  { name: "Empresa D", status: "Novo lead" },
];

export function ProspectMockup({ className }: { className?: string }) {
  return (
    <div className={cn("premium-card-dark card-case rounded-3xl p-6", className)}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-eyebrow text-slate-400">Hineni Prospect · Dashboard</p>
        <span className="rounded-full border border-slate-600/60 bg-slate-900/50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-400">
          Representação ilustrativa
        </span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-3">
            <p className="text-[9px] uppercase tracking-[0.1em] text-slate-500">{stat.label}</p>
            <div className="mt-3 flex h-10 items-end gap-1">
              {stat.bars.map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t bg-gold-accent/55"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-2 border-t border-slate-700/60 pt-4">
        {leads.map((lead) => (
          <div
            key={lead.name}
            className="flex items-center justify-between rounded-lg bg-slate-900/40 px-3 py-2 text-xs text-slate-300"
          >
            <span>{lead.name}</span>
            <span className="rounded-full border border-gold-accent/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-gold-accent">
              {lead.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
