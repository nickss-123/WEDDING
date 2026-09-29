/* ==================================================================
   CONFIG — EDIT EVERYTHING HERE. Nothing below this object needs
   to change for normal customization.
   ================================================================== */
const CONFIG = {

  couple: {
    bride: "Joo Ann",
    groom: "Alvin",
    initials: "J &amp; A", // used in nav + monogram + footer (HTML allowed)
  },

  hero: {
    eyebrow: "Together With Their Families",
    subtitleDate: "February 14, 2027", // display text only
  },

  // ISO datetime the countdown counts down to. Include timezone offset.
  weddingDateISO: "2027-02-14T15:00:00+08:00",

  details: [
    {
      icon: "ring",
      title: "The Date",
      lines: ["Sunday, February 14, 2027", "Ceremony begins 3:00 PM"],
      mapUrl: ""
    },
    {
      icon: "church",
      title: "Ceremony",
      lines: ["Our Lady of Peace Chapel", "Tagaytay City, Cavite"],
      mapUrl: "https://maps.google.com/?q=Tagaytay+City"
    },
    {
      icon: "toast",
      title: "Reception",
      lines: ["Hillside Garden Pavilion", "Reception at 5:30 PM"],
      mapUrl: "https://maps.google.com/?q=Tagaytay+City"
    }
  ],

  // Our Story timeline — as many entries as you like, alternates left/right automatically
  timeline: [
    { date: "August 2019", title: "First Met", text: "A mutual friend introduced us at a barkada reunion in Tagaytay — neither of us expected to talk until midnight." },
    { date: "March 2021", title: "First Trip Together", text: "A weekend in Palawan confirmed what we already suspected: this was different." },
    { date: "June 2023", title: "Moved In Together", text: "We found a small place near Marikina and made it home, one plant at a time." },
    { date: "December 2025", title: "The Proposal", text: "On a quiet evening at the same viewpoint where we first watched the sunset together, Alvin asked the question." },
    { date: "February 2027", title: "The Wedding", text: "Surrounded by family and friends, we say 'I do.'" }
  ],

  // Filipino wedding entourage — grouped into cards. Edit names freely.
  entourageGroups: [
    {
      title: "Principal Sponsors",
      note: "Ninong & Ninang — chosen to guide and bless the couple's marriage",
      members: [
        { role: "Principal Sponsor", who: "Mr. & Mrs. Dela Cruz" },
        { role: "Principal Sponsor", who: "Mr. & Mrs. Santos" },
        { role: "Principal Sponsor", who: "Mr. & Mrs. Reyes" },
        { role: "Principal Sponsor", who: "Mr. & Mrs. Bautista" }
      ]
    },
    {
      title: "Secondary Sponsors",
      note: "Each pair carries a symbol of the marriage",
      members: [
        { role: "Veil Sponsors", who: "To Be Announced" },
        { role: "Cord Sponsors", who: "To Be Announced" },
        { role: "Candle Sponsors", who: "To Be Announced" }
      ]
    },
    {
      title: "The Wedding Party",
      note: "Standing beside the couple",
      members: [
        { role: "Best Man", who: "To Be Announced" },
        { role: "Maid of Honor", who: "To Be Announced" },
        { role: "Groomsmen", who: "To Be Announced" },
        { role: "Bridesmaids", who: "To Be Announced" }
      ]
    },
    {
      title: "Bearers & Little Ones",
      note: "The youngest members of our celebration",
      members: [
        { role: "Bible Bearer", who: "To Be Announced" },
        { role: "Coin Bearer", who: "To Be Announced" },
        { role: "Ring Bearer", who: "To Be Announced" },
        { role: "Flower Girls", who: "To Be Announced" }
      ]
    }
  ],

  attire: {
    men: {
      title: "For The Gentlemen",
      sub: "Barong Tagalog or Formal Suit",
      swatches: ["#35533F", "#93AC98", "#B8974F", "#FBF8F1"],
      description: "A traditional Barong Tagalog in ivory or soft sage is warmly encouraged, or a tailored suit in forest green, olive, or neutral tones.",
      avoid: "Please avoid casual wear, shorts, and sneakers."
    },
    women: {
      title: "For The Ladies",
      sub: "Filipiniana, Cocktail, or Long Gown",
      swatches: ["#5C7A5C", "#93AC98", "#D9C79A", "#E7EEE4"],
      description: "Think garden formal — florals, soft greens, sage, and gold are all beautiful choices. A Filipiniana top with a modern skirt is equally welcome.",
      avoid: "Please avoid white, ivory, and champagne — reserved for the bride."
    }
  },

  giftNote: "Your presence and prayers are the greatest gift of all. For those who wish to give further, here are a few ideas.",
  gifts: [
    { icon: "home", title: "Home Registry", text: "Help us set up our first home together.", link: "" },
    { icon: "gift", title: "Monetary Gift", text: "A gift envelope box will be available at the reception.", link: "" },
    { icon: "honeymoon", title: "Honeymoon Fund", text: "Contribute to our first trip as a married couple.", link: "" },
    { icon: "charity", title: "In Lieu of Gifts", text: "A donation to our chosen charity is always welcome.", link: "" }
  ],

  // Gallery — replace src with your own photos. size: "wide" | "tall" | "" for layout variety
  gallery: [
    { src: "https://picsum.photos/seed/wedding-couple-1/900/700", caption: "Engagement day, Tagaytay", size: "wide" },
    { src: "https://picsum.photos/seed/wedding-couple-2/700/900", caption: "Our first trip together", size: "tall" },
    { src: "https://picsum.photos/seed/wedding-couple-3/700/700", caption: "Family gathering", size: "" },
    { src: "https://picsum.photos/seed/wedding-couple-4/700/700", caption: "The proposal", size: "" },
    { src: "https://picsum.photos/seed/wedding-couple-5/700/700", caption: "Pre-nup shoot", size: "" },
    { src: "https://picsum.photos/seed/wedding-couple-6/900/700", caption: "With the whole barkada", size: "wide" }
  ],

  faqs: [
    { q: "What should I wear?", a: "Please see the Attire section above for our color palette and suggested styles for men and women." },
    { q: "Are children welcome?", a: "We love your little ones, but to keep our reception intimate, we've kept our celebration adults-only, with love.Except infants." },
    { q: "Can I bring a plus one?", a: "Please refer to your invitation for the number of seats reserved in your honor, and let us know in the RSVP form." },
    { q: "What time should I arrive?", a: "We recommend arriving 30 minutes before the ceremony start time to allow time for seating and parking." },
    { q: "Is there parking available?", a: "Yes, complimentary parking will be available on-site at both the ceremony and reception venues." },
    { q: "What's the best gift?", a: "Your presence means everything. If you'd like to give more, see our Gift Ideas section." }
  ],

  rsvpDeadline: "Please kindly respond by January 10, 2027.",

  // ---- RSVP DELIVERY ----
  // 1) Fallback (always works, no setup): opens the guest's email app addressed to this Gmail.
  fallbackEmail: "nabesamis0@gmail.com",
  // 2) Primary: Vercel serverless function that saves to Supabase (see api/rsvp.js)
  rsvpEndpoint: "/api/rsvp"
};

/* ==================================================================
   ICONS — small inline SVG set, referenced by name from CONFIG
   ================================================================== */
const ICONS = {
  ring:  '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="24" cy="28" r="13"/><path d="M17 20 L24 6 L31 20"/></svg>',
  church:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M24 5 L24 15 M19 10 L29 10"/><path d="M10 43 V22 L24 12 L38 22 V43 Z"/><path d="M20 43 V30 H28 V43"/></svg>',
  toast: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 6 L15 26 A9 9 0 0 0 24 34 A9 9 0 0 0 33 26 L36 6 Z"/><path d="M24 34 V42 M16 42 H32"/></svg>',
  home:  '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 22 L24 8 L40 22"/><path d="M13 19 V40 H35 V19"/></svg>',
  gift:  '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="8" y="18" width="32" height="10"/><rect x="11" y="28" width="26" height="14"/><path d="M24 18 V42 M24 18 C18 18 15 13 18 10 C21 8 24 12 24 18 C24 12 27 8 30 10 C33 13 30 18 24 18Z"/></svg>',
  honeymoon:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 30 C14 20 34 20 42 30"/><path d="M12 30 V16 M36 30 V16"/><path d="M4 36 H44"/></svg>',
  charity:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M24 40 C10 30 6 22 10 15 C14 9 22 10 24 17 C26 10 34 9 38 15 C42 22 38 30 24 40Z"/></svg>',
};
