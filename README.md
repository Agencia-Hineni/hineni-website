# HINENI

Site institucional da HINENI, desenvolvido com Next.js, React, TypeScript e Tailwind CSS. O projeto apresenta a empresa, seus serviços digitais, cases, formulário de contato e uma área administrativa interna para atualização de conteúdo.

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Nodemailer para envio de leads por SMTP
- Vercel Analytics
- Google Analytics / Google Ads
- Upstash Redis opcional para rate limit distribuído

## Funcionalidades

- Páginas institucionais: home, sobre, serviços, projetos e contato
- Formulário de contato com validação, honeypot anti-spam e rate limit
- Envio de leads por e-mail via SMTP
- Conteúdo editável para contato, SEO local e serviços
- Painel administrativo interno protegido por senha
- Snapshots locais do conteúdo antes de cada alteração
- Sitemap, robots.txt, metadados e dados estruturados
- Headers de segurança configurados em `proxy.ts`

## Como Rodar Localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Variáveis de Ambiente

Crie um arquivo `.env.local` com base no `.env.example`.

```env
NEXT_PUBLIC_SITE_URL=https://hineni.com.br

SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=usuario@example.com
SMTP_PASS=troque_esta_senha
CONTACT_TO=contato@example.com

ADMIN_PASSWORD=troque_por_uma_senha_forte

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=
```

As variáveis `SMTP_*`, `CONTACT_TO` e `ADMIN_PASSWORD` são sensíveis e não devem ser versionadas. O arquivo `.gitignore` já ignora `.env*`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Segurança

O projeto inclui:

- `.env*` fora do versionamento
- CSP e headers como `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` e HSTS
- `frame-ancestors 'none'` para reduzir risco de clickjacking
- rate limit no formulário de contato
- honeypot no formulário público
- escape de HTML no corpo do e-mail
- validação server-side dos campos de contato
- autenticação do admin por variável de ambiente
- comparação segura do token administrativo
- bloqueio temporário após tentativas inválidas no admin

Antes de publicar o repositório, confirme que nenhum segredo real foi commitado no histórico e rotacione senhas que já tenham sido usadas localmente.

## Deploy

O deploy recomendado é pela Vercel. Configure as variáveis de ambiente no painel do projeto antes de publicar:

- SMTP para envio do formulário
- `ADMIN_PASSWORD` forte e única
- variáveis públicas de analytics, quando aplicável
- Upstash Redis, caso queira rate limit persistente em produção
