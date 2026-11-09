// Função serverless do Vercel: recebe o lead do site e repassa ao webhook do n8n.
// Vantagens: a URL do n8n fica escondida, não há problema de CORS e dá para validar/limitar os dados.
// Variáveis de ambiente (Vercel > Settings > Environment Variables):
//   N8N_WEBHOOK_URL  (obrigatória)  URL de PRODUÇÃO do webhook do n8n
//   N8N_SITE_KEY     (recomendada)  mesmo valor cadastrado na credencial "Header Auth" do n8n (cabeçalho x-site-key)
//   ALLOWED_ORIGINS  (opcional)     lista separada por vírgula; padrão: domínio oficial e previews *.vercel.app

const DEFAULT_ORIGINS = ['https://fabiosaseguros.com.br', 'https://www.fabiosaseguros.com.br'];
const EVENTOS = ['cotacao_formulario', 'clique_whatsapp'];
const s = (v, n = 200) => String(v == null ? '' : v).replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, n);

function originAllowed(origin) {
  if (!origin) return true; // chamadas sem Origin (ex.: teste com curl)
  const list = (process.env.ALLOWED_ORIGINS || '').split(',').map((x) => x.trim()).filter(Boolean);
  const allowed = list.length ? list : DEFAULT_ORIGINS;
  if (allowed.includes(origin)) return true;
  try { return new URL(origin).hostname.endsWith('.vercel.app'); } catch (e) { return false; }
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }); }
  if (!originAllowed(req.headers.origin)) return res.status(403).json({ ok: false });

  const url = process.env.N8N_WEBHOOK_URL;
  if (!url) return res.status(500).json({ ok: false, erro: 'N8N_WEBHOOK_URL não configurada' });

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch (e) { b = {}; } }
  b = b && typeof b === 'object' ? b : {};

  const lead = {
    cliente_id: s(b.cliente_id, 60) || 'fabio-sa-seguros',
    evento: EVENTOS.includes(b.evento) ? b.evento : 'outro',
    produto: s(b.produto, 120),
    nome: s(b.nome, 80),
    whatsapp: s(b.whatsapp, 20).replace(/\D/g, ''),
    pagina: s(b.pagina, 300),
    referrer: s(b.referrer, 300),
    utm_source: s(b.utm_source, 80),
    utm_medium: s(b.utm_medium, 80),
    utm_campaign: s(b.utm_campaign, 80),
    enviado_em: new Date().toISOString(),
  };

  try {
    const headers = { 'Content-Type': 'application/json' };
    if (process.env.N8N_SITE_KEY) headers['x-site-key'] = process.env.N8N_SITE_KEY;
    const r = await fetch(url, { method: 'POST', headers, body: JSON.stringify(lead), signal: AbortSignal.timeout(8000) });
    return res.status(r.ok ? 200 : 502).json({ ok: r.ok });
  } catch (e) {
    return res.status(502).json({ ok: false });
  }
};
