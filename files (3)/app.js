
const LEAF_DIVIDER_SVG = '<svg viewBox="0 0 120 20" fill="none" stroke="currentColor" stroke-width="1"><path d="M0 10 H45"/><path d="M75 10 H120"/><path d="M60 10 C55 4 50 4 46 10 C50 16 55 16 60 10 C64 4 69 4 74 10 C69 16 64 16 60 10Z"/></svg>';

/* ==================================================================
   RENDER — builds all sections from CONFIG. Edit CONFIG, not this.
   ================================================================== */
function el(html){ const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstElementChild; }

function renderHero(){
  document.getElementById('navMark').innerHTML = CONFIG.couple.initials;
  document.getElementById('heroEyebrow').textContent = CONFIG.hero.eyebrow;
  document.getElementById('heroNames').innerHTML = `${CONFIG.couple.bride} <span class="amp">&amp;</span> ${CONFIG.couple.groom}`;
  document.getElementById('heroDateText').textContent = CONFIG.hero.subtitleDate;
  document.querySelector('footer .nav-mark').innerHTML = CONFIG.couple.initials;
}

function renderTimeline(){
  const wrap = document.getElementById('timeline');
  wrap.innerHTML = CONFIG.timeline.map(item => `
    <div class="tl-item">
      <span class="tl-date">${item.date}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>`).join('');
}

function renderDetails(){
  const wrap = document.getElementById('detailsGrid');
  wrap.innerHTML = CONFIG.details.map(d => `
    <div class="detail-card">
      ${ICONS[d.icon] || ''}
      <h3>${d.title}</h3>
      <p>${d.lines.join('<br>')}</p>
      ${d.mapUrl ? `<a class="map-link" href="${d.mapUrl}" target="_blank" rel="noopener">View Map</a>` : ''}
    </div>`).join('');
}

function renderEntourage(){
  const wrap = document.getElementById('roleGroups');
  wrap.innerHTML = CONFIG.entourageGroups.map(g => `
    <div class="role-card">
      <h3>${g.title}</h3>
      <span class="role-note">${g.note}</span>
      <ul>${g.members.map(m => `<li><span class="role">${m.role}</span><span class="who">${m.who}</span></li>`).join('')}</ul>
    </div>`).join('');
}

function renderAttire(){
  const wrap = document.getElementById('attireGrid');
  const card = (a) => `
    <div class="attire-card">
      <h3>${a.title}</h3>
      <span class="sub">${a.sub}</span>
      <div class="swatches">${a.swatches.map(c => `<span class="swatch" style="background:${c}"></span>`).join('')}</div>
      <p>${a.description}</p>
      <div class="avoid"><strong>Please avoid:</strong> ${a.avoid.replace('Please avoid ', '')}</div>
    </div>`;
  wrap.innerHTML = card(CONFIG.attire.men) + card(CONFIG.attire.women);
}

function renderGifts(){
  document.getElementById('giftNote').textContent = CONFIG.giftNote;
  const wrap = document.getElementById('giftGrid');
  wrap.innerHTML = CONFIG.gifts.map(g => `
    <div class="gift-card">
      ${ICONS[g.icon] || ''}
      <h4>${g.title}</h4>
      <p>${g.text}</p>
      ${g.link ? `<a href="${g.link}" target="_blank" rel="noopener">View</a>` : ''}
    </div>`).join('');
}

let galleryItems = [];
function renderGallery(){
  galleryItems = CONFIG.gallery;
  const wrap = document.getElementById('galleryGrid');
  wrap.innerHTML = galleryItems.map((g,i) => `
    <img src="${g.src}" alt="${g.caption}" data-i="${i}" class="${g.size==='wide'?'g-wide':g.size==='tall'?'g-tall':''}" loading="lazy">`).join('');
  wrap.querySelectorAll('img').forEach(img => img.addEventListener('click', () => openLightbox(+img.dataset.i)));
}

function renderFaq(){
  const wrap = document.getElementById('faqList');
  wrap.innerHTML = CONFIG.faqs.map((f,i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-q" aria-expanded="false">${f.q}<span class="plus">+</span></button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('');
  wrap.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      wrap.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-q').setAttribute('aria-expanded','false'); });
      if(!wasOpen){ item.classList.add('open'); item.querySelector('.faq-q').setAttribute('aria-expanded','true'); }
    });
  });
}

function renderMisc(){
  document.getElementById('rsvpDeadline').textContent = CONFIG.rsvpDeadline;
  document.getElementById('rsvpMailto').href = buildMailto();
}

/* ==================================================================
   COUNTDOWN
   ================================================================== */
function startCountdown(){
  const target = new Date(CONFIG.weddingDateISO).getTime();
  function tick(){
    const now = Date.now();
    let diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-days').textContent = String(d).padStart(2,'0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2,'0');
    document.getElementById('cd-secs').textContent = String(s).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
}

/* ==================================================================
   NAV behavior
   ================================================================== */
function initNav(){
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));
  const mobile = document.getElementById('navMobile');
  document.getElementById('navToggle').addEventListener('click', () => mobile.classList.add('open'));
  document.getElementById('navClose').addEventListener('click', () => mobile.classList.remove('open'));
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
}

/* ==================================================================
   LIGHTBOX
   ================================================================== */
let lbIndex = 0;
function openLightbox(i){
  lbIndex = i;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
}
function updateLightbox(){
  const item = galleryItems[lbIndex];
  document.getElementById('lbImg').src = item.src;
  document.getElementById('lbImg').alt = item.caption;
  document.getElementById('lbCap').textContent = item.caption;
}
function initLightbox(){
  document.getElementById('lbClose').addEventListener('click', () => document.getElementById('lightbox').classList.remove('open'));
  document.getElementById('lightbox').addEventListener('click', (e) => { if(e.target.id === 'lightbox') document.getElementById('lightbox').classList.remove('open'); });
  document.getElementById('lbPrev').addEventListener('click', () => { lbIndex = (lbIndex - 1 + galleryItems.length) % galleryItems.length; updateLightbox(); });
  document.getElementById('lbNext').addEventListener('click', () => { lbIndex = (lbIndex + 1) % galleryItems.length; updateLightbox(); });
  document.addEventListener('keydown', (e) => {
    if(!document.getElementById('lightbox').classList.contains('open')) return;
    if(e.key === 'Escape') document.getElementById('lightbox').classList.remove('open');
    if(e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
    if(e.key === 'ArrowRight') document.getElementById('lbNext').click();
  });
}

/* ==================================================================
   RSVP submit — sends to Google Apps Script (Sheet + Gmail) if
   configured, and always offers a direct mailto fallback.
   ================================================================== */
function buildMailto(data){
  data = data || {};
  const subject = encodeURIComponent(`RSVP — ${data.name || ''}`.trim());
  const bodyLines = [
    `Name: ${data.name || ''}`,
    `Email: ${data.email || ''}`,
    `Attending: ${data.attending || ''}`,
    `Guests: ${data.guests || ''}`,
    `Dietary Restrictions: ${data.dietary || ''}`,
    `Message: ${data.message || ''}`
  ];
  const body = encodeURIComponent(bodyLines.join('\n'));
  return `mailto:${CONFIG.fallbackEmail}?subject=${subject}&body=${body}`;
}

function initRsvp(){
  const form = document.getElementById('rsvpForm');
  const msg = document.getElementById('rsvpMsg');
  const btn = document.getElementById('rsvpSubmitBtn');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById('r-name').value,
      email: document.getElementById('r-email').value,
      attending: form.querySelector('input[name="attending"]:checked').value,
      guests: document.getElementById('r-guests').value,
      dietary: document.getElementById('r-dietary').value,
      message: document.getElementById('r-message').value,
    };

    document.getElementById('rsvpMailto').href = buildMailto(data);

    if(!CONFIG.googleScriptURL){
      // No backend configured — guide the guest to send it by email directly.
      msg.textContent = "To finish sending, please tap “Send your RSVP directly by email” below — your details are ready to go.";
      msg.className = "rsvp-msg show ok";
      window.location.href = buildMailto(data);
      return;
    }

    btn.disabled = true; btn.textContent = "Sending...";
    try{
      await fetch(CONFIG.googleScriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      msg.textContent = "Thank you! Your RSVP has been received.";
      msg.className = "rsvp-msg show ok";
      form.reset();
    }catch(err){
      msg.textContent = "Something went wrong sending automatically — please use the email link below instead.";
      msg.className = "rsvp-msg show err";
    }finally{
      btn.disabled = false; btn.textContent = "Send RSVP";
    }
  });
}

/* ==================================================================
   INIT
   ================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderTimeline();
  renderDetails();
  renderEntourage();
  renderAttire();
  renderGifts();
  renderGallery();
  renderFaq();
  renderMisc();
  startCountdown();
  initNav();
  initLightbox();
  initRsvp();
});
