# Joo Ann & Alvin — Wedding site

Static site (no build step) + one Vercel function that saves RSVPs to Supabase.

## Setup
1. **Supabase**: create a project → SQL Editor → paste `supabase/schema.sql` → Run.
2. **Keys**: Project Settings → API → copy the Project URL and the `service_role` key.
3. **Vercel**: push this folder to GitHub → New Project → import it (Framework: Other).
   Add environment variables `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`, then deploy.
4. Submit a test RSVP, then check Supabase → Table Editor → `rsvps`.

Never put the service-role key in `config.js` or any front-end file.
Edit all content in `config.js`. Replace the placeholder gallery photos with your own.
