# HINENI - Contexto Atual do Projeto

Este arquivo serve como handoff para abrir um novo chat sem perder contexto.

## Visao Geral

- Projeto: site institucional da agencia HINENI
- Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion
- Hospedagem: Vercel
- Objetivo atual do site:
  - apresentar a agencia com posicionamento profissional
  - captar leads pelo formulario
  - mostrar projetos/cases
  - comunicar que a HINENI atua com:
    - criacao de sites
    - gestao de redes sociais
    - trafego pago

## Estrutura Principal

- Home: `app/page.tsx`
- Sobre: `app/sobre/page.tsx`
- Servicos: `app/servicos/page.tsx`
- Projetos: `app/projetos/page.tsx`
- Contato: `app/contato/page.tsx`
- Admin: `app/admin/page.tsx`

## Arquivos Mais Importantes

- Layout global: `app/layout.tsx`
- Estilos globais: `app/globals.css`
- Transicao entre paginas: `app/template.tsx`
- Header: `components/layout/site-header.tsx`
- Footer: `components/layout/site-footer.tsx`
- Formulario: `components/forms/contact-form.tsx`
- API de contato: `app/api/contato/route.ts`
- Analytics helper: `lib/analytics.ts`
- Bootstrap da conversao Ads: `components/analytics/ads-conversion-bootstrap.tsx`
- Conteudo editavel do site: `data/site-content.json`
- Fallback do conteudo: `lib/site-content.ts`
- SEO e metadata: `lib/seo.ts`
- Configuracoes gerais: `lib/constants.ts`

## Posicionamento Atual do Site

O site nao fala mais apenas de desenvolvimento web.

A mensagem atual da marca foi ampliada para deixar claro que a HINENI oferece:

- sites institucionais
- landing pages
- gestao de redes sociais
- trafego pago
- evolucao e manutencao tecnica

Arquivos onde isso foi implementado:

- `app/page.tsx`
- `app/servicos/page.tsx`
- `app/sobre/page.tsx`

## Conteudo Dinamico

O conteudo principal editavel fica em:

- `data/site-content.json`

Hoje esse JSON controla:

- contato
- SEO local
- planos/precos

O arquivo `lib/site-content.ts` le esse JSON e tambem tem fallback interno.

Observacao:

- `data/site-content.json` e `lib/site-content.ts` foram regravados em UTF-8 limpo para remover texto quebrado por encoding.

## Painel Admin

Existe um painel em:

- `/admin`

Arquivos relacionados:

- `app/admin/page.tsx`
- `components/admin/admin-panel.tsx`
- `app/api/admin/content/route.ts`
- `app/api/admin/content/history/route.ts`

O admin usa:

- header `x-admin-token`
- validacao contra `process.env.ADMIN_PASSWORD`

Importante:

- nao guardar senha fixa no codigo
- a senha real deve ficar apenas nas envs

## Formulario de Contato

Fluxo:

1. Usuario envia o formulario em `components/forms/contact-form.tsx`
2. O front faz POST para `/api/contato`
3. A rota `app/api/contato/route.ts` valida os dados
4. A rota tenta enviar email via SMTP com Nodemailer
5. Em caso de sucesso, o front dispara o evento de lead para analytics / Ads

Campos obrigatorios:

- nome
- empresa
- email
- servico
- contexto

Campos opcionais:

- telefone

Campo anti-spam:

- `website` (honeypot)

## SMTP / Email

Variaveis obrigatorias para o envio funcionar:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO`

Observacoes importantes:

- O projeto ja teve erro real porque a Vercel estava com as envs zeradas.
- Quando isso acontece, a API responde com mensagem de configuracao incompleta.
- Tambem ja foi confirmado erro real de autenticacao SMTP quando a senha estava incorreta.
- A rota de contato hoje tem logging de erro mais util no servidor.

## Rate Limit do Formulario

Arquivo:

- `app/api/contato/route.ts`

Comportamento:

- tenta usar Upstash Redis se configurado
- se nao estiver configurado, cai para `Map` em memoria

Limite atual:

- janela: 60 segundos
- maximo: 5 requests por IP

Env opcionais:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

Observacao:

- o fallback em memoria nao e ideal para ambiente serverless com maior escala

## Analytics e Google Ads

Integracoes atuais:

- Vercel Analytics no layout global
- Google Ads tag global carregada em `app/layout.tsx`
- helper de analytics em `lib/analytics.ts`
- bootstrap da funcao de conversao do Ads em `components/analytics/ads-conversion-bootstrap.tsx`

ID atual do Google Ads:

- `AW-17997502951`

Snippet de conversao atualmente conectado ao formulario:

- `AW-17997502951/WHg2CL26yY8cEOez8IVD`

Comportamento atual:

- a tag base do Ads e carregada globalmente
- no envio bem-sucedido do formulario:
  - dispara `generate_lead`
  - dispara `gtag_report_conversion()` com o `send_to` acima

Arquivos principais:

- `app/layout.tsx`
- `lib/analytics.ts`
- `components/analytics/ads-conversion-bootstrap.tsx`
- `components/forms/contact-form.tsx`

Env de analytics documentadas:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`

Observacao:

- o projeto foi ajustado para o script do Google Ads carregar sempre com o ID `AW-17997502951`, porque isso estava atrapalhando a deteccao da tag.

## SEO e Metadados

Ja configurado:

- metadata base em `lib/seo.ts`
- schema organization / local business
- sitemap
- robots

## Estilo e UI

Direcao visual atual:

- premium tecnico
- fundo claro nas secoes principais
- blocos escuros em hero, planos e projetos
- azul escuro + dourado como acento
- cards com hierarquia visual bem marcada
- motion suave em scroll e troca de pagina

Arquivos principais:

- `app/globals.css`
- `components/ui/button.tsx`
- `components/ui/link-button.tsx`
- `components/ui/section-heading.tsx`
- `components/layout/site-header.tsx`

Animacoes:

- `components/animations/reveal.tsx`
- `components/animations/hero-parallax.tsx`
- `app/template.tsx`

Observacoes:

- as animacoes de botao foram suavizadas
- o foco de motion hoje esta em scroll e mudanca de pagina
- o header chegou a ficar ilegive l no topo em uma iteracao anterior e depois foi corrigido

## Projetos / Cases

Pagina:

- `app/projetos/page.tsx`

Cases atuais:

- Igreja TDA
- DropHouse

Assets atuais:

- `public/branding/tda-cover.png`
- `public/branding/drophouse-cover.png`
- `public/branding/drophouse-cover.webp`

Observacoes importantes:

- a pagina de projetos foi reescrita para ficar mais profissional
- a DropHouse foi adicionada como case de e-commerce
- a capa da DropHouse foi gerada a partir de screenshot real do site
- a versao usada no projeto e a `webp`, porque a `png` estava pesada e podia quebrar mais facilmente

## Servicos e Escopos

Pagina:

- `app/servicos/page.tsx`

Servicos atuais comunicados no site:

- Site Institucional Empresarial
- Landing Page de Captacao
- Gestao de Redes Sociais
- Trafego Pago
- Evolucao e Manutencao Tecnica

## Planos e Precos

Dados:

- `data/site-content.json`

Fallback:

- `lib/site-content.ts`

Decisao comercial atual:

- mostrar entrada facilitada em 12x
- manter valor total explicito para transparencia

Exemplo:

- `12x de R$ 249,00 (total de R$ 2.899,90)`

Visual atual:

- a parcela fica em destaque
- o total aparece como informacao secundaria
- a mensalidade fica em um bloco separado

## Build e Deploy

Scripts:

- dev: `npm run dev`
- build: `npm run build`
- lint: `npm run lint`

Problemas reais que ja aconteceram:

1. Build falhava com `next/font/google`
   - causa: fonte remota em build time
   - solucao: remover `next/font/google` e usar stacks locais

2. Build falhava por tipagem do `Reveal`
   - causa: tipo de `children` incompatível
   - solucao: corrigido em `components/animations/reveal.tsx`

3. Formulario falhava em producao
   - causa: envs SMTP faltando na Vercel
   - solucao: preencher envs corretamente

4. Google Ads nao reconhecia a tag
   - causa: o loader podia nao usar o ID do Ads como principal
   - solucao: layout ajustado para carregar sempre com `AW-17997502951`

## Performance

Ajustes ja feitos:

- hero com `sizes` e `quality`
- menos camadas pesadas no mobile
- imagens dos projetos com `sizes`
- capa da DropHouse em `webp`
- `prefers-reduced-motion` respeitado no `Reveal`

Pontos que ainda valem melhoria:

- `public/branding/tda-cover.png` ainda pode ser convertido para `webp`
- revisar outros assets grandes

## Ortografia e Encoding

Ja houve varios problemas de texto:

- acentuacao perdida
- caracteres quebrados por encoding

Arquivos que mais deram esse tipo de problema:

- `data/site-content.json`
- `lib/site-content.ts`
- `app/projetos/page.tsx`

Estado atual:

- esses pontos principais foram corrigidos e regravados

## Se For Retomar Em Outro Chat

Resumo rapido:

- o site esta funcional
- o formulario voltou a funcionar depois de corrigir envs SMTP na Vercel
- Google Ads esta integrado e a conversao de lead do formulario foi ligada ao snippet fornecido
- o posicionamento do site agora inclui site, redes sociais e trafego pago
- a pagina de projetos foi refeita e hoje tem Igreja TDA e DropHouse
- os planos mostram 12x com valor total explicito
- a base visual esta em um ponto premium tecnico com motion suave

Checklist de retomada:

1. Ler este arquivo
2. Ler `app/page.tsx`
3. Ler `app/servicos/page.tsx`
4. Ler `app/projetos/page.tsx`
5. Ler `components/forms/contact-form.tsx`
6. Ler `app/api/contato/route.ts`
7. Conferir envs da Vercel

## Arquivos que Merecem Prioridade em Qualquer Nova Task

- `app/page.tsx`
- `app/servicos/page.tsx`
- `app/projetos/page.tsx`
- `app/contato/page.tsx`
- `components/forms/contact-form.tsx`
- `app/api/contato/route.ts`
- `lib/analytics.ts`
- `app/layout.tsx`
- `data/site-content.json`
- `app/globals.css`
