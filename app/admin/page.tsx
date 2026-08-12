import type { Metadata } from "next";
import { AdminPanel } from "@/components/admin/admin-panel";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <section className="section-shell bg-shell py-20 lg:py-24">
      <Container className="max-w-5xl">
        <div className="rounded-[2.25rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top_left,rgba(30,58,138,0.12),transparent_28%),linear-gradient(165deg,rgba(255,255,255,0.94),rgba(248,250,252,0.88))] p-8 shadow-[0_20px_50px_rgba(15,23,42,0.1)] sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-tech-blue">Admin HINENI</p>
          <h1 className="mt-4 text-4xl text-deep-blue sm:text-5xl">Painel administrativo renovado.</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Edite serviços, dados de contato e SEO local em uma interface mais organizada, mantendo o controle interno do site com acesso protegido por senha administrativa.
          </p>
        </div>
        <AdminPanel />
      </Container>
    </section>
  );
}
