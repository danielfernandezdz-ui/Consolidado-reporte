export const config = { maxDuration: 10 };

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  const host = req.headers.host || '';

  const allowed =
    host.includes('vercel.app') ||
    host.includes('localhost') ||
    origin.includes('vercel.app');

  if (!allowed) return res.status(403).json({ error: 'No autorizado' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Key no configurada' });

  return res.status(200).json({ k: apiKey });
}
