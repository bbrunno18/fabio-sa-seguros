<div align="center">

# 🛡️ Fábio Sá Corretora de Seguros

### Um site que transforma visitante em pedido de cotação, direto no WhatsApp

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![n8n](https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

</div>

## 🎯 Objetivo

Site institucional de um corretor de seguros, pensado para uma coisa só: **gerar contatos qualificados**. O visitante pede a cotação em poucos segundos, ou chama direto no WhatsApp com a mensagem já pronta.

Produtos apresentados: **seguro auto, seguro de celular, fiança locatícia e consórcio de imóvel Porto Seguro**.

## ✨ O que o site tem

- 📲 **Botões de WhatsApp** com o número do corretor e a mensagem já preenchida.
- 📝 **Formulário de cotação** que envia o lead para o corretor sem expor nenhum dado interno.
- ⚙️ **Função serverless** (`api/lead.js`) que recebe o lead, valida e limpa os dados e repassa ao n8n. A URL do webhook fica escondida e o domínio de origem é verificado.
- 📊 **Registro de eventos** (pedido de cotação e clique no WhatsApp) para o corretor medir o que funciona.
- 🔎 **SEO completo:** título, descrição, `sitemap.xml`, `robots.txt` e imagem de compartilhamento (`og-image`) com o brasão, para o link ficar bonito no WhatsApp.
- 🔒 **Política de privacidade** (`/politica-de-privacidade`) em conformidade com a LGPD.
- 🧰 **Cabeçalhos de segurança** configurados no `vercel.json`.
- ⚡ Sem build e sem dependências: abre rápido em qualquer celular.

## 🧱 Tecnologia

HTML, CSS e JavaScript puros, funções serverless da Vercel e n8n para receber os leads.

## 🚀 Como publicar

O passo a passo completo (Vercel, variáveis de ambiente, domínio e testes) está em [`LEIA-ME-PUBLICAR.md`](LEIA-ME-PUBLICAR.md).

Variáveis de ambiente usadas pela função:

| Nome | Para quê |
|---|---|
| `N8N_WEBHOOK_URL` | Endereço de produção do webhook do n8n |
| `N8N_SITE_KEY` | Chave secreta enviada no cabeçalho `x-site-key` |
| `ALLOWED_ORIGINS` | (opcional) domínios autorizados a enviar leads |

---

## 🤝 Quer um sistema assim para o seu negócio?

Este projeto faz parte do portfólio da **BR Intelligence**: sistemas sob medida, agentes de IA que atendem no WhatsApp e sites feitos para vender. O foco são empresas e clínicas que querem atender melhor, perder menos clientes e ganhar tempo.

- 💬 **Fale agora com o nosso agente de IA no WhatsApp:** [wa.me/556193541717](https://wa.me/556193541717?text=Ol%C3%A1!%20Vim%20pelo%20seu%20GitHub%20e%20quero%20saber%20mais%20sobre%20os%20seus%20sistemas.)
- ✉️ **E-mail:** [bbrunno18@yahoo.com.br](mailto:bbrunno18@yahoo.com.br)
- 🌐 **Site:** https://br-intelligence.vercel.app
- 💼 **Mais projetos:** https://github.com/bbrunno18
- 📍 **Brasília/DF**, com atendimento para todo o Brasil

> Tem uma ideia, um processo manual que cansa ou um atendimento que perde cliente? Chame o agente no WhatsApp e vamos transformar isso em sistema.

<sub>Criado por **Brunno Almeida** · BR Intelligence</sub>
