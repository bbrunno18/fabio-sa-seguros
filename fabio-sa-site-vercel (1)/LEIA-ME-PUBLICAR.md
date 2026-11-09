# Publicar o site da Fábio Sá no Vercel

## 1) Subir o projeto
**Opção A - GitHub (recomendada, atualiza sozinho a cada mudança)**
1. Crie um repositório no GitHub e envie TODO o conteúdo desta pasta (index.html, api/, vercel.json etc.).
2. No Vercel: Add New > Project > importe o repositório. Framework: "Other". Não precisa de build.

**Opção B - linha de comando**
`npm i -g vercel` e, dentro desta pasta, `vercel --prod`.

## 2) Variáveis de ambiente (Project > Settings > Environment Variables)
| Nome | Valor |
|---|---|
| N8N_WEBHOOK_URL | URL de PRODUÇÃO do nó "Webhook Site" do n8n |
| N8N_SITE_KEY | mesmo segredo cadastrado na credencial Header Auth do n8n (x-site-key) |
| ALLOWED_ORIGINS | (opcional) ex.: https://fabiosaseguros.com.br,https://www.fabiosaseguros.com.br |
Depois de criar as variáveis, faça um novo deploy (Deployments > Redeploy).

## 3) Domínio
Project > Settings > Domains > adicione fabiosaseguros.com.br e www. O Vercel mostra os registros de DNS (A e CNAME).
ATENÇÃO: mantenha os registros MX (e-mail) como estão. Troque só os registros do site.
O site antigo (plataforma de corretoras) sai do ar quando o DNS apontar para o Vercel.

## 4) Testar depois de publicar
- Abra o site e peça uma cotação com seu próprio WhatsApp: a linha deve aparecer nas abas Eventos e Leads.
- Clique em um botão de WhatsApp: o número deve ser o do corretor e a mensagem já vem pronta.
- Compartilhe o link no WhatsApp: deve aparecer a imagem com o brasão.
- Abra /politica-de-privacidade.

## 5) Onde mudar as coisas
- Número do WhatsApp: no final do index.html, `CFG.whatsapp` (todos os botões usam esse número).
- Domínio final, se for outro: canonical e og:url no index.html, robots.txt, sitemap.xml e politica-de-privacidade.html.

## Antes de divulgar
- Plano Hobby do Vercel é para uso pessoal e não comercial, segundo os termos deles. Para o site de um corretor, o correto é o plano Pro. Confirme os termos atuais no site do Vercel.
- A política de privacidade é um modelo. Peça a um advogado ou ao corretor para revisar e inclua CNPJ ou CPF e endereço, se tiver.
- O QR code do flyer Seguro Viagem aponta para fabioseguros.netlify.app. Mantenha o Netlify no ar com redirecionamento ou refaça o flyer com o domínio final.
