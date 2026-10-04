/* ============================================================
   PRODUCT CATALOG — AltafMedia Store
   ------------------------------------------------------------
   YE FILE AB GOOGLE SHEET SE CHALTI HAI (easy mode):
   - Neeche SHEET_ID me apni Google Sheet ki ID ek dafa lagayein
     (Lotus laga dega — aap ko kuch nahi karna).
   - Uske baad products Sheet se load honge. Sheet me row add /
     edit / delete karein = site par khud update ho jayega.
   - Agar Sheet na khule (net issue), to neeche wali
     FALLBACK list khud show ho jayegi — site kabhi khaali nahi.

   SHEET KE COLUMNS (pehli row me ye headings hon):
     id | title | category | price | oldPrice | badge | image | short | featured
   - id: unique, chhote harf, baghair space (misal: eid-poster-pack)
   - price: sirf number (Rs baghair), oldPrice khaali chhor dein agar sale na ho
   - badge: Bestseller / New / Hot ya khaali
   - image: poora link (https://...) ya repo path (assets/img/products/xyz.jpg)
   - featured: yes / no
   ============================================================ */

const SHEET_ID = "";   // <-- Lotus bharega jab aap Sheet ka link bhejenge
const SHEET_TAB = "Products";

/* ---------------- fallback products (built-in, 27) ---------------- */

function mkProduct(id, title, category, price, oldPrice, badge, short, bullets, dims, size, featured){
  const p = {
    id, title, category, price, oldPrice, badge,
    previews: ["assets/img/products/" + id + ".jpg"],
    short,
    description: `<p>${short}</p><p><b>${title}</b> — premium fully-layered PSD pack from AltafMedia Store. Every text, shape and effect sits on its own organized layer, so you can customize the whole design in minutes — no advanced Photoshop skills needed.</p><ul>${bullets.map(b=>`<li>${b}</li>`).join("")}</ul>`,
    details: { format: "PSD", dimensions: dims, layers: "Fully layered & organized", fileSize: size },
    featured: !!featured
  };
  return p;
}

const FALLBACK_PRODUCTS = [
/* ======== THUMBNAILS (6) ======== */
mkProduct("yt-gaming-thumbnail-pack","Gaming Thumbnail Pack — 25 High-CTR Designs","Thumbnails",1200,1800,"Bestseller",
  "25 bold gaming thumbnails built to win the click — fully layered.",
  ["25 layouts: FPS, battle royale, horror, racing & retro styles","Neon glow text effects on separate editable layers","Character cutout placeholders with one-click replace","Free fonts list included with download links"],
  "1280 × 720 px","1.1 GB (ZIP)",true),
mkProduct("yt-vlog-thumbnail-pack","Vlog Thumbnail Pack — 20 Travel & Lifestyle Designs","Thumbnails",1000,null,"New",
  "20 bright, friendly thumbnails for travel, daily-life and lifestyle channels.",
  ["20 fresh vlog layouts with big readable typography","Photo-first compositions — your face stays the hero","Sunny color presets, easy to re-theme","Free fonts list included"],
  "1280 × 720 px","860 MB (ZIP)",false),
mkProduct("yt-tech-thumbnail-pack","Tech Review Thumbnail Pack — 20 Designs","Thumbnails",1000,1400,null,
  "20 sharp tech thumbnails for reviews, unboxings and comparisons.",
  ["20 layouts: unboxing, VS battles, spec breakdowns","Gadget cutout frames with reflections","Dark-mode premium styling","Free fonts list included"],
  "1280 × 720 px","920 MB (ZIP)",false),
mkProduct("yt-finance-thumbnail-pack","Finance & Crypto Thumbnail Pack — 20 Designs","Thumbnails",1100,null,null,
  "20 high-trust thumbnails for finance, investing and crypto channels.",
  ["20 layouts: charts, coins, breaking-news styles","Green/red market color system on separate layers","Coin & graph elements included","Free fonts list included"],
  "1280 × 720 px","940 MB (ZIP)",false),
mkProduct("yt-fitness-thumbnail-pack","Fitness Thumbnail Pack — 15 Bold Designs","Thumbnails",900,1200,"Hot",
  "15 high-energy thumbnails for workout, gym and transformation videos.",
  ["15 intense layouts with grunge & energy effects","Before/after split-frame templates","Bold condensed typography styles","Free fonts list included"],
  "1280 × 720 px","720 MB (ZIP)",false),
mkProduct("yt-food-thumbnail-pack","Food & Recipe Thumbnail Pack — 15 Designs","Thumbnails",900,null,null,
  "15 mouth-watering thumbnails for recipes, food reviews and cooking shows.",
  ["15 appetizing layouts with steam & splash effects","Ingredient badge & rating star elements","Warm color grading presets","Free fonts list included"],
  "1280 × 720 px","700 MB (ZIP)",false),

/* ======== SOCIAL MEDIA (6) ======== */
mkProduct("instagram-post-pack","Instagram Post Pack — 50 Templates","Social Media",900,null,null,
  "50 scroll-stopping Instagram posts & stories for brands and creators.",
  ["50 square posts (1080×1080) + matching story sizes","Trendy gradients, modern typography","Drag-and-drop photo placeholders","Editable in Photoshop, exports for Canva-friendly PNGs too"],
  "1080 × 1080 px","980 MB (ZIP)",true),
mkProduct("instagram-story-pack","Instagram Story Pack — 40 Templates","Social Media",800,1100,"New",
  "40 polished story templates for sales, announcements and daily engagement.",
  ["40 vertical story designs (1080×1920)","Poll, countdown & swipe-up CTA frames","Animated-style sticker elements","Matching highlight covers included"],
  "1080 × 1920 px","760 MB (ZIP)",false),
mkProduct("youtube-banner-kit","YouTube Channel Art Kit — 10 Banners","Social Media",700,null,null,
  "10 professional channel banners with safe-area guides built in.",
  ["10 banner designs, all niches","YouTube safe-area guides on separate layer","Matching profile logo templates","TV, desktop & mobile preview mockups"],
  "2560 × 1440 px","480 MB (ZIP)",false),
mkProduct("facebook-cover-pack","Facebook Cover & Post Pack — 25 Designs","Social Media",750,1000,null,
  "25 covers and matching post templates for pages and groups.",
  ["15 covers + 10 post designs","Business, restaurant & community themes","CTA button overlays included","Profile-picture safe zones marked"],
  "1640 × 924 px (cover)","620 MB (ZIP)",false),
mkProduct("tiktok-cover-pack","TikTok Cover Pack — 30 Viral-Style Designs","Social Media",850,null,"Hot",
  "30 thumb-stopping TikTok covers designed for the For You page.",
  ["30 bold cover layouts with hook text styles","Trending caption & hashtag frames","Duet/reaction split templates","High-contrast mobile-first design"],
  "1080 × 1920 px","800 MB (ZIP)",true),
mkProduct("pinterest-pin-pack","Pinterest Pin Pack — 40 Clickable Designs","Social Media",800,null,null,
  "40 tall pins engineered for clicks, saves and blog traffic.",
  ["40 vertical pin designs (1000×1500)","Title overlay styles that boost CTR","Niche sets: food, DIY, fashion, blogging","Text-safe zones for Pinterest crop"],
  "1000 × 1500 px","740 MB (ZIP)",false),

/* ======== PRINT FLYERS (6) ======== */
mkProduct("business-flyer-bundle","Business Flyer Bundle — 12 Corporate Designs","Print Flyers",800,1200,null,
  "12 modern corporate flyers for agencies, services and startups.",
  ["12 flyer designs, A5 + US Letter sizes","Free fonts used, links included","CMYK, 300 DPI, 3mm bleed for printing","Well-organized, color-coded layers"],
  "A5 & US Letter @ 300 DPI","640 MB (ZIP)",false),
mkProduct("real-estate-flyer-pack","Real Estate Flyer Pack — 10 Property Designs","Print Flyers",700,1000,null,
  "10 property flyers with photo frames, price badges & agent sections.",
  ["10 flyer designs, A4 + square social sizes","Photo placeholders with one-click replace","Urdu + English text zones","CMYK, 300 DPI, print-ready"],
  "A4 @ 300 DPI","510 MB (ZIP)",false),
mkProduct("restaurant-menu-pack","Restaurant Menu Template — Fine Dining","Print Flyers",1000,null,null,
  "Elegant tri-fold menu for restaurants, cafes and bakeries.",
  ["Tri-fold (front + back), A4 size","CMYK, 300 DPI, print-ready with bleed","Editable prices, dishes and sections","Free fonts list included"],
  "A4 tri-fold @ 300 DPI","420 MB (ZIP)",false),
mkProduct("gym-fitness-flyer-pack","Gym & Fitness Flyer Pack — 12 Designs","Print Flyers",750,null,"New",
  "12 powerful gym flyers for memberships, trainers and class promos.",
  ["12 high-energy layouts","Timetable & pricing table blocks","Before/after transformation frames","CMYK, 300 DPI, print-ready"],
  "A5 & US Letter @ 300 DPI","590 MB (ZIP)",false),
mkProduct("grand-sale-flyer-pack","Grand Sale Flyer Pack — 15 Promo Designs","Print Flyers",850,1200,"Hot",
  "15 loud, unmissable sale flyers for discounts, clearance & festive offers.",
  ["15 promo layouts with burst & ribbon elements","Discount badge set (10%–70%)","Urdu + English headline styles","CMYK, 300 DPI, print-ready"],
  "A5 & square social @ 300 DPI","680 MB (ZIP)",false),
mkProduct("corporate-brochure-pack","Corporate Brochure Pack — 8 Tri-Fold Designs","Print Flyers",1400,null,null,
  "8 premium tri-fold brochures for companies, schools and services.",
  ["8 tri-fold designs, A4 size","Services, about & contact page blocks","Infographic elements: timelines, charts","CMYK, 300 DPI, 3mm bleed"],
  "A4 tri-fold @ 300 DPI","890 MB (ZIP)",false),

/* ======== BRANDING (5) ======== */
mkProduct("logo-mockup-bundle","Logo Mockup Bundle — 25 Premium Mockups","Branding",1500,2200,null,
  "25 photorealistic logo mockups — cards, signage, stationery & more.",
  ["25 high-resolution mockup scenes","Smart-object logo placement (one-click)","Gold foil, emboss and letterpress effects included","Perfect for freelancers and branding portfolios"],
  "Up to 6000 × 4000 px","1.8 GB (ZIP)",false),
mkProduct("business-card-pack","Business Card Pack — 20 Modern Designs","Branding",600,900,null,
  "20 sleek business cards with matching back designs — print-ready.",
  ["20 front + back designs","Standard 3.5×2 inch + bleed","QR code placeholder blocks","CMYK, 300 DPI"],
  "3.5 × 2 in @ 300 DPI","380 MB (ZIP)",false),
mkProduct("letterhead-invoice-pack","Letterhead & Invoice Pack — 15 Stationery Designs","Branding",700,null,null,
  "15 matching letterheads, invoices and envelopes for a complete stationery set.",
  ["5 letterheads + 5 invoices + 5 envelopes","Editable tables for invoice items","Logo & footer branding blocks","A4, CMYK, 300 DPI"],
  "A4 @ 300 DPI","410 MB (ZIP)",false),
mkProduct("brand-identity-kit","Complete Brand Identity Kit — Logo, Cards & Social","Branding",2500,3500,"Bestseller",
  "Everything a new business needs: logo system, stationery and social kit in one.",
  ["Logo suite: primary, icon & monochrome versions","Business cards, letterhead & envelope","60 matching social media templates","Brand guideline sheet with colors & fonts"],
  "Multiple sizes @ 300 DPI","2.4 GB (ZIP)",true),
mkProduct("social-branding-kit","Social Media Branding Kit — 60 Coordinated Templates","Branding",1800,null,"New",
  "60 coordinated posts, stories and covers — one brand voice everywhere.",
  ["60 templates across Instagram, Facebook & TikTok","Profile + cover + post starter set","Brand color palette presets","Content calendar starter PDF"],
  "1080px social sizes","1.5 GB (ZIP)",false),

/* ======== EVENTS (4) ======== */
mkProduct("wedding-album-pack","Wedding Album Template — Luxury Layouts","Events",2500,null,null,
  "Elegant wedding album spreads with gold accents — print-ready layouts.",
  ["15 album spreads (12×12 inch print size)","Gold foil accents and floral ornaments on separate layers","CMYK, 300 DPI — fully print-ready","Easy photo replacement with smart objects"],
  "12 × 12 in @ 300 DPI","850 MB (ZIP)",true),
mkProduct("eid-poster-pack","Eid Festival Poster Pack — 15 Designs","Events",500,null,"New",
  "15 festive Eid posters — crescent, mosque & lantern themes.",
  ["15 poster designs, A3 + social sizes","'Eid Mubarak' calligraphy styles included","Easy color variations (green, navy, maroon)","Print + digital use in one pack"],
  "A3 @ 300 DPI + 1080px social","760 MB (ZIP)",true),
mkProduct("birthday-party-pack","Birthday Party Pack — 20 Invites & Banners","Events",650,900,null,
  "20 cheerful birthday designs — invitations, banners and cake-topper cards.",
  ["10 invitations + 10 banners/posters","Kids & adults themes","Editable name & age numbers","Print + WhatsApp-share sizes"],
  "A5 & 1080px @ 300 DPI","540 MB (ZIP)",false),
mkProduct("corporate-event-pack","Corporate Event Pack — 18 Banners & Backdrops","Events",1600,null,"New",
  "18 premium event designs — stage backdrops, standees and invite cards.",
  ["6 stage backdrops + 6 standees + 6 invites","Sponsor logo strip blocks","Conference & seminar themes","Large-format print ready"],
  "Up to 10 ft @ 150 DPI","1.3 GB (ZIP)",false)
];

/* ---------------- live catalog (fallback se start) ---------------- */
let PRODUCTS = FALLBACK_PRODUCTS.slice();
let CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))];

/* ---------------- Google Sheet loader ---------------- */
function autoDescription(p){
  return `<p>${p.short}</p><p><b>${p.title}</b> — premium fully-layered PSD pack from AltafMedia Store. Every text, shape and effect sits on its own organized layer, so you can customize the whole design in minutes.</p><ul><li>Fully layered & organized PSD files</li><li>Easy text, color and photo replacement</li><li>Free fonts list included</li><li>Delivered on WhatsApp after payment verification</li></ul>`;
}
function sheetRowToProduct(r){
  const price = parseFloat(r.price) || 0;
  const oldRaw = String(r.oldprice || "").trim();
  const p = {
    id: String(r.id).trim().toLowerCase().replace(/\s+/g, "-"),
    title: String(r.title || "").trim(),
    category: String(r.category || "Misc").trim(),
    price,
    oldPrice: oldRaw ? (parseFloat(oldRaw) || null) : null,
    badge: String(r.badge || "").trim() || null,
    previews: [String(r.image || "").trim() || "assets/img/products/eid-poster-pack.jpg"],
    short: String(r.short || "").trim(),
    featured: /^(yes|true|1|y)$/i.test(String(r.featured || "").trim())
  };
  p.description = autoDescription(p);
  p.details = { format: "PSD", dimensions: "See product description", layers: "Fully layered & organized", fileSize: "ZIP download" };
  return p;
}
async function loadFromSheet(){
  if(!SHEET_ID) return;
  try{
    const url = "https://docs.google.com/spreadsheets/d/" + SHEET_ID +
                "/gviz/tq?tqx=out:json&sheet=" + encodeURIComponent(SHEET_TAB);
    const res = await fetch(url, { cache: "no-store" });
    if(!res.ok) return;
    const txt = await res.text();
    const json = JSON.parse(txt.slice(txt.indexOf("{"), txt.lastIndexOf("}") + 1));
    const cols = (json.table.cols || []).map(c => String(c.label || "").trim().toLowerCase());
    const rows = (json.table.rows || []).map(row => {
      const o = {};
      cols.forEach((h, i) => { const cell = (row.c || [])[i]; o[h] = cell ? (cell.v ?? "") : ""; });
      return o;
    }).filter(r => r.id && r.title);
    if(rows.length){
      PRODUCTS = rows.map(sheetRowToProduct);
      CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))];
      window.dispatchEvent(new CustomEvent("am-products-ready"));
    }
  }catch(e){ /* sheet fail = fallback rehta hai */ }
}
if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", loadFromSheet);
else loadFromSheet();
