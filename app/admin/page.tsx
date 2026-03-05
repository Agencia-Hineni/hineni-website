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
    <section className="bg-shell py-20">
      <Container className="max-w-4xl">
        <h1 className="text-4xl text-deep-blue">Painel Admin</h1>
        <p className="mt-3 text-sm text-slate-600">
          Edite planos e conteúdo local do site. Acesso protegido por senha administrativa.
        </p>
        <AdminPanel />
      </Container>
    </section>
  );
}
