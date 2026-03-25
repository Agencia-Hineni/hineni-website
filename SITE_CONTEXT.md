# HINENI - Contexto do Projeto

Este arquivo existe para facilitar a retomada do projeto em um novo chat ou por outra pessoa, sem depender do contexto da conversa anterior.

## Visao Geral

- Projeto: site institucional da agencia HINENI
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion
- Hospedagem: Vercel
- Objetivo do site: apresentar a agencia com posicionamento profissional, captar leads pelo formulario e mostrar projetos/cases

## Estrutura Principal

- Home: `app/page.tsx`
- Sobre: `app/sobre/page.tsx`
- Servicos: `app/servicos/page.tsx`
- Projetos: `app/projetos/page.tsx`
- Contato: `app/contato/page.tsx`
- Admin: `app/admin/page.tsx`

## Arquivos Importantes

- Layout global: `app/layout.tsx`
- Estilos globais: `app/globals.css`
- Transicao entre paginas: `app/template.tsx`
- Header: `components/layout/site-header.tsx`
- Footer: `components/layout/site-footer.tsx`
- Formulario de contato: `components/forms/contact-form.tsx`
- API de contato: `app/api/contato/route.ts`
- Conteudo editavel do site: `data/site-content.json`
- Fallback do conteudo: `lib/site-content.ts`
- SEO e metadata: `lib/seo.ts`
- Configuracoes gerais do site: `lib/constants.ts`

## Conteudo Dinamico

O conteudo principal editavel fica em:

- `data/site-content.json`

Hoje esse JSON controla:

- contato
- SEO local
- planos/precos

O arquivo `lib/site-content.ts` le esse JSON e tambem tem um fallback interno caso o arquivo falhe.

## Painel Admin

Existe um painel em:

- `/admin`

Arquivos relacionados:

- `app/admin/page.tsx`
- `components/admin/admin-panel.tsx`
- `app/api/admin/content/route.ts`
- `app/api/admin/content/history/route.ts`

O admin usa o header `x-admin-token` e valida contra:

- `process.env.ADMIN_PASSWORD`

Importante:

- Nao deixar senhas hardcoded no codigo.
- A senha real do admin deve ficar apenas nas envs.

## Formulario de Contato

Fluxo:

1. Usuario envia o formulario em `components/forms/contact-form.tsx`
2. O front faz POST para `/api/contato`
3. A rota `app/api/contato/route.ts` valida campos
4. A rota tenta enviar email via SMTP usando Nodemailer

Campos exigidos:

- nome
- empresa
- email
- servico
- contexto

Campos opcionais:

- telefone

Campo anti-spam:

- `website` (honeypot)

## Variaveis de Ambiente Necessarias

Sem estas variaveis o envio de email nao funciona:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO`
- `ADMIN_PASSWORD`

Opcional para rate limit persistente:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

Observacoes importantes:

- Se a Vercel estiver sem envs, a API responde com erro de configuracao incompleta.
- Se `SMTP_PASS` estiver errado, o servidor SMTP responde com erro de autenticacao.
- O projeto ja teve um problema real porque a Vercel estava com as envs zeradas.

## Rate Limit

O formulario tem rate limit na rota de contato.

Comportamento atual:

- tenta usar Upstash Redis se estiver configurado
- se nao estiver, cai para um `Map` em memoria

Limite atual:

- janela: 60 segundos
- maximo: 5 requests por IP

Observacao:

- Em memoria funciona, mas nao e ideal para ambiente serverless em escala.
- Se quiser maior robustez, o ideal e configurar Upstash.

## SEO e Scripts

Ja configurado:

- metadata base no `lib/seo.ts`
- schema organization/local business
- sitemap
- robots
- Google Ads tag global no `app/layout.tsx`

ID atual do Google Ads:

- `AW-17997502951`

## Estilo e UI

Direcao visual atual:

- premium tecnico
- fundo claro nas secoes principais
- blocos escuros em hero, planos e projetos
- azul escuro + dourado como acento
- animacoes suaves de scroll e transicao de pagina

Arquivos centrais de UI:

- `app/globals.css`
- `components/ui/button.tsx`
- `components/ui/link-button.tsx`
- `components/ui/section-heading.tsx`

Animacoes:

- `components/animations/reveal.tsx`
- `components/animations/hero-parallax.tsx`
- `app/template.tsx`

Observacao:

- As animacoes dos botoes foram suavizadas de proposito.
- O foco de motion hoje esta em scroll e mudanca de pagina.

## Projetos / Cases

Pagina:

- `app/projetos/page.tsx`

Cases atuais:

- Igreja TDA
- DropHouse

Assets atuais:

- `public/branding/tda-cover.png`
- `public/branding/drophouse-cover.webp`
- `public/branding/drophouse-cover.png`

Observacao importante:

- A capa da DropHouse foi gerada a partir de screenshot real do site.
- A versao `webp` foi criada para reduzir peso e evitar problema de imagem quebrada.
- A pagina de projetos foi reescrita para ter copy mais forte e estrutura mais profissional.

## Planos e Precos

Os planos aparecem na pagina:

- `app/servicos/page.tsx`

Dados vindos de:

- `data/site-content.json`

Decisao comercial atual:

- mostrar entrada facilitada em 12x
- manter o valor total explicito junto da parcela

Exemplo do formato atual:

- `12x de R$ 249,00 (total de R$ 2.899,90)`

O visual dos cards de planos foi ajustado para:

- destacar a parcela
- deixar o total como informacao secundaria
- separar a mensalidade em outro bloco

## Build e Deploy

Scripts:

- dev: `npm run dev`
- build: `npm run build`
- lint: `npm run lint`

Problemas que ja aconteceram:

1. Build falhava com `next/font/google`
   - Motivo: tentava baixar fontes remotas em build time
   - Solucao: remover `next/font/google` e usar stacks locais no CSS

2. Build falhava com tipagem no `Reveal`
   - Motivo: tipo de `children` incompatível em um branch
   - Solucao: corrigido em `components/animations/reveal.tsx`

3. Formulario falhava em producao
   - Motivo: envs SMTP ausentes na Vercel
   - Solucao: preencher envs corretamente

## Performance

Ajustes ja feitos:

- hero com `sizes` e `quality`
- menos camadas pesadas no mobile
- imagens dos projetos com `sizes`
- capa da DropHouse em `webp`
- `prefers-reduced-motion` respeitado no `Reveal`

Pontos que ainda valem melhoria:

- `public/branding/tda-cover.png` ainda esta pesado e pode virar `webp`
- revisar compressao de outros assets grandes

## Ortografia e Texto

Ao longo do projeto houve varios momentos com texto sem acento ou encoding quebrado.

Hoje os principais textos ja foram corrigidos, mas se aparecer algo estranho:

- revisar primeiro `app/projetos/page.tsx`
- revisar `lib/site-content.ts`
- revisar `data/site-content.json`

## Se For Retomar Em Outro Chat

Resumo rapido do estado atual:

- site institucional da HINENI esta funcional
- formulario voltou a funcionar depois de corrigir envs SMTP na Vercel
- pagina de projetos foi refeita e hoje tem Igreja TDA e DropHouse
- Google Ads ja esta integrado
- admin existe e depende de `ADMIN_PASSWORD`
- planos mostram preco parcelado com valor total explicito
- visual esta num ponto premium/tecnico com motion suave

Checklist de retomada:

1. Ler este arquivo
2. Ler `app/projetos/page.tsx`
3. Ler `app/servicos/page.tsx`
4. Ler `app/api/contato/route.ts`
5. Conferir se as envs da Vercel continuam preenchidas

## Arquivos que Merecem Prioridade Em Qualquer Nova Task

- `app/page.tsx`
- `app/servicos/page.tsx`
- `app/projetos/page.tsx`
- `app/contato/page.tsx`
- `app/api/contato/route.ts`
- `data/site-content.json`
- `app/globals.css`

