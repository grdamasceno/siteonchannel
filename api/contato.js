// /api/contato.js — Vercel Function do formulário do site onchannel.io
// Cada envio do formulário vai para 3 destinos ao mesmo tempo:
//   1) Chatwoot  -> abre uma conversa na caixa de entrada "Site" (canal API)
//   2) CRM Cacau -> cria o lead no funil
//   3) E-mail    -> aviso para comercial@onchannel.io
// Se um destino falhar, os outros continuam; o visitante sempre recebe "enviado".
//
// Variáveis de ambiente (Vercel > Project > Settings > Environment Variables):
//   CHATWOOT_BASE_URL        ex.: https://onchat.tangerinefood.com.br
//   CHATWOOT_INBOX_ID        identificador da caixa de entrada do tipo "API" no Chatwoot
//   CACAU_LEAD_URL           endpoint do CRM Cacau que cria lead
//   CACAU_TOKEN              token de acesso a esse endpoint
//   RESEND_API_KEY           chave do Resend (envio de e-mail)
//   EMAIL_FROM               ex.: "Site OnChannel <site@onchannel.io>" (domínio verificado no Resend)
//   EMAIL_TO                 comercial@onchannel.io

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });

  const { nome = '', empresa = '', whatsapp = '', produto = '', lojas = '', mensagem = '', pagina = '' } = req.body || {};
  if (!nome.trim() || !whatsapp.trim()) {
    return res.status(400).json({ ok: false, erro: 'Preencha nome e WhatsApp.' });
  }

  const tel = '+55' + whatsapp.replace(/\D/g, '').replace(/^55/, '');
  const resumo =
    `Novo contato pelo site\n\n` +
    `Nome: ${nome}\nEmpresa: ${empresa}\nWhatsApp: ${whatsapp}\n` +
    `Produto de interesse: ${produto}\nLojas: ${lojas}\nPágina: ${pagina}\n\n` +
    `Mensagem:\n${mensagem || '(sem mensagem)'}`;

  const resultados = await Promise.allSettled([
    enviarChatwoot({ nome, tel, resumo }),
    enviarCacau({ nome, empresa, tel, produto, lojas, mensagem, pagina }),
    enviarEmail({ nome, produto, resumo }),
  ]);

  const status = ['chatwoot', 'cacau', 'email'].reduce((acc, k, i) => {
    acc[k] = resultados[i].status === 'fulfilled' ? 'ok' : String(resultados[i].reason);
    return acc;
  }, {});
  console.log('[contato]', status);

  return res.status(200).json({ ok: true, status });
}

// 1) Chatwoot — API pública de canal "API" (não precisa de token de agente)
async function enviarChatwoot({ nome, tel, resumo }) {
  const base = `${process.env.CHATWOOT_BASE_URL}/public/api/v1/inboxes/${process.env.CHATWOOT_INBOX_ID}`;
  const contato = await postJson(`${base}/contacts`, { name: nome, phone_number: tel });
  const conversa = await postJson(`${base}/contacts/${contato.source_id}/conversations`, {});
  await postJson(`${base}/contacts/${contato.source_id}/conversations/${conversa.id}/messages`, { content: resumo });
}

// 2) CRM Cacau — cria o lead
async function enviarCacau(lead) {
  await postJson(process.env.CACAU_LEAD_URL, { ...lead, origem: 'site onchannel.io' }, {
    Authorization: `Bearer ${process.env.CACAU_TOKEN}`,
  });
}

// 3) E-mail — via Resend
async function enviarEmail({ nome, produto, resumo }) {
  await postJson('https://api.resend.com/emails', {
    from: process.env.EMAIL_FROM,
    to: [process.env.EMAIL_TO || 'comercial@onchannel.io'],
    subject: `Novo lead do site: ${nome} (${produto || 'sem produto'})`,
    text: resumo,
  }, { Authorization: `Bearer ${process.env.RESEND_API_KEY}` });
}

async function postJson(url, body, headers = {}) {
  const r = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(`${url} -> ${r.status} ${await r.text()}`);
  return r.json().catch(() => ({}));
}
