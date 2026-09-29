// Vercel serverless function: validates an RSVP and upserts it into Supabase.
// The service-role key stays on the server — it is never sent to the browser.
module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed.' });
  let b = req.body;
  try { if (typeof b === 'string') b = JSON.parse(b); } catch { b = {}; }
  b = b || {};
  if (b.website) return res.status(200).json({ ok: true }); // honeypot: bots fill this

  const name = String(b.name || '').trim().slice(0, 120);
  const email = String(b.email || '').trim().toLowerCase().slice(0, 160);
  if (!name || !/^\S+@\S+\.\S+$/.test(email)) return res.status(400).json({ error: 'Enter your name and a valid email.' });

  const attending = b.attending !== 'Regretfully Declines';
  const row = {
    name, email, attending,
    guests: attending ? Math.min(Math.max(parseInt(b.guests, 10) || 1, 1), 4) : 0,
    dietary: String(b.dietary || '').trim().slice(0, 200) || null,
    message: String(b.message || '').trim().slice(0, 1000) || null,
    updated_at: new Date().toISOString(),
  };

  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const r = await fetch(`${process.env.SUPABASE_URL}/rest/v1/rsvps?on_conflict=email`, {
    method: 'POST',
    headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', Prefer: 'resolution=merge-duplicates,return=minimal' },
    body: JSON.stringify(row),
  });
  if (!r.ok) return res.status(502).json({ error: 'Our server couldn’t save that.' });
  res.status(200).json({ ok: true });
};
