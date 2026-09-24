/* ============================================================
   PRODUCT CATALOG — AltafMedia Store
   ------------------------------------------------------------
   Naya product add karne ke liye:
   1. Neeche PRODUCTS array mein ek block copy-paste karein
      (sab se aasan: kisi SAMPLE product ka block copy karein).
   2. "id" har product ka UNIQUE hona chahiye (chhote harf,
      baghair space ke, misal: "eid-poster-pack").
   3. Preview tasveer assets/img/products/ folder mein rakhein
      aur "previews" mein uska path likhein.
   4. price sirf number mein likhein (Rs baghair, misal: 1200).

   SAMPLE products (sample: true) demo ke liye hain.
   Apne products add karne ke baad inhein delete kar dein.
   ============================================================ */

const PRODUCTS = [
  {
    id: "yt-thumbnail-pack",
    title: "YouTube Thumbnail PSD Pack — 20 Designs",
    category: "Thumbnails",
    price: 1200,
    oldPrice: 1800,
    badge: "Bestseller",
    previews: ["assets/img/products/youtube-thumbnail-pack.jpg"],
    short: "20 high-CTR YouTube thumbnail templates — fully layered, text editable.",
    description: `<p>Get 20 professionally designed YouTube thumbnail templates that are built to grab attention and boost click-through rate. Every file is fully layered and organized, so you can swap the text, photos and colors in minutes — no advanced Photoshop skills needed.</p>
<ul>
<li>20 unique thumbnail layouts (gaming, vlog, tech, finance styles)</li>
<li>All text, shapes and effects on separate named layers</li>
<li>Free fonts list included with download links</li>
<li>Works with Photoshop CC 2020 and newer</li>
</ul>`,
    details: { format: "PSD", dimensions: "1280 × 720 px", layers: "Fully layered & organized", fileSize: "1.2 GB (ZIP)" },
    featured: true,
    sample: true
  },
  {
    id: "wedding-album",
    title: "Wedding Album Template — Luxury Layouts",
    category: "Events",
    price: 2500,
    oldPrice: null,
    badge: "New",
    previews: ["assets/img/products/wedding-album.jpg"],
    short: "Elegant wedding album spreads with gold accents — print-ready layouts.",
    description: `<p>A complete luxury wedding album template set with romantic, timeless layouts. Drop in your couple's photos, adjust the names and dates, and send straight to print. Designed for professional wedding photographers and studios.</p>
<ul>
<li>15 album spreads (12×12 inch print size)</li>
<li>Gold foil accents and floral ornaments on separate layers</li>
<li>CMYK, 300 DPI — fully print-ready</li>
<li>Easy photo replacement with smart objects</li>
</ul>`,
    details: { format: "PSD", dimensions: "12 × 12 in @ 300 DPI", layers: "Fully layered, smart objects", fileSize: "850 MB (ZIP)" },
    featured: true,
    sample: true
  },
  {
    id: "business-flyer-bundle",
    title: "Business Flyer Bundle — 12 Corporate Designs",
    category: "Print Flyers",
    price: 800,
    oldPrice: 1200,
    badge: null,
    previews: ["assets/img/products/business-flyer.jpg"],
    short: "12 modern corporate flyers for agencies, services and startups.",
    description: `<p>Twelve clean, modern flyer designs for corporate and small-business use — agencies, consultants, real estate, services and more. Professional navy-and-gold styling with plenty of space for your own branding.</p>
<ul>
<li>12 flyer designs, A5 + US Letter sizes</li>
<li>Free fonts used, links included</li>
<li>CMYK, 300 DPI, 3mm bleed for printing</li>
<li>Well-organized, color-coded layers</li>
</ul>`,
    details: { format: "PSD", dimensions: "A5 & US Letter @ 300 DPI", layers: "Organized, color-coded", fileSize: "640 MB (ZIP)" },
    featured: false,
    sample: true
  },
  {
    id: "instagram-post-pack",
    title: "Instagram Post Pack — 50 Templates",
    category: "Social Media",
    price: 900,
    oldPrice: null,
    badge: "Hot",
    previews: ["assets/img/products/instagram-post-pack.jpg"],
    short: "50 scroll-stopping Instagram posts & stories for brands and creators.",
    description: `<p>Fifty ready-to-post Instagram templates covering sales, quotes, promos, food, fashion and lifestyle. Keep your feed consistent and professional without hiring a designer every week.</p>
<ul>
<li>50 square posts (1080×1080) + matching story sizes</li>
<li>Trendy gradients, modern typography</li>
<li>Drag-and-drop photo placeholders</li>
<li>Editable in Photoshop, exports for Canva-friendly PNGs too</li>
</ul>`,
    details: { format: "PSD", dimensions: "1080 × 1080 px", layers: "Fully layered", fileSize: "980 MB (ZIP)" },
    featured: true,
    sample: true
  },
  {
    id: "logo-mockup-bundle",
    title: "Logo Mockup Bundle — 25 Premium Mockups",
    category: "Branding",
    price: 1500,
    oldPrice: 2200,
    badge: null,
    previews: ["assets/img/products/logo-mockup.jpg"],
    short: "25 photorealistic logo mockups — cards, signage, stationery & more.",
    description: `<p>Present your logo designs like a pro with 25 photorealistic mockups: business cards, embossed paper, shop signage, coffee cups, tote bags and more. Smart-object based — place your logo once and it appears realistically on every scene.</p>
<ul>
<li>25 high-resolution mockup scenes</li>
<li>Smart-object logo placement (one-click)</li>
<li>Gold foil, emboss and letterpress effects included</li>
<li>Perfect for freelancers and branding portfolios</li>
</ul>`,
    details: { format: "PSD", dimensions: "Up to 6000 × 4000 px", layers: "Smart objects", fileSize: "1.8 GB (ZIP)" },
    featured: false,
    sample: true
  },
  {
    id: "restaurant-menu",
    title: "Restaurant Menu Template — Fine Dining",
    category: "Print Flyers",
    price: 1000,
    oldPrice: null,
    badge: null,
    previews: ["assets/img/products/restaurant-menu.jpg"],
    short: "Elegant tri-fold menu for restaurants, cafes and bakeries.",
    description: `<p>A sophisticated tri-fold menu template with a fine-dining look — deep green and gold, classic serif typography, and space for appetizers, mains, desserts and drinks. Easily re-themed for cafes, bakeries and fast food.</p>
<ul>
<li>Tri-fold (front + back), A4 size</li>
<li>CMYK, 300 DPI, print-ready with bleed</li>
<li>Editable prices, dishes and sections</li>
<li>Free fonts list included</li>
</ul>`,
    details: { format: "PSD", dimensions: "A4 tri-fold @ 300 DPI", layers: "Fully layered", fileSize: "420 MB (ZIP)" },
    featured: false,
    sample: true
  },
  {
    id: "real-estate-flyer-pack",
    title: "Real Estate Flyer Pack — 10 Property Designs",
    category: "Print Flyers",
    price: 700,
    oldPrice: 1000,
    badge: null,
    previews: ["assets/img/products/real-estate-flyer.jpg"],
    short: "10 property flyers with photo frames, price badges & agent sections.",
    description: `<p>Ten polished flyer designs made for property dealers and housing societies. Big photo areas, price ribbons, feature checklists and agent contact blocks — everything a listing flyer needs.</p>
<ul>
<li>10 flyer designs, A4 + square social sizes</li>
<li>Photo placeholders with one-click replace</li>
<li>Urdu + English text zones</li>
<li>CMYK, 300 DPI, print-ready</li>
</ul>`,
    details: { format: "PSD", dimensions: "A4 @ 300 DPI", layers: "Fully layered", fileSize: "510 MB (ZIP)" },
    featured: false,
    sample: true
  },
  {
    id: "eid-poster-pack",
    title: "Eid Festival Poster Pack — 15 Designs",
    category: "Events",
    price: 500,
    oldPrice: null,
    badge: "New",
    previews: ["assets/img/products/eid-poster-pack.jpg"],
    short: "15 festive Eid posters — crescent, mosque & lantern themes.",
    description: `<p>Fifteen beautiful Eid greeting posters with crescent moons, mosque silhouettes, lanterns and ornamental patterns in rich emerald and gold. Ideal for businesses, mosques, schools and social media greetings.</p>
<ul>
<li>15 poster designs, A3 + social sizes</li>
<li>"Eid Mubarak" calligraphy styles included</li>
<li>Easy color variations (green, navy, maroon)</li>
<li>Print + digital use in one pack</li>
</ul>`,
    details: { format: "PSD", dimensions: "A3 @ 300 DPI + 1080px social", layers: "Fully layered", fileSize: "760 MB (ZIP)" },
    featured: true,
    sample: true
  }
];

/* Categories — shop filter pills isi list se bante hain.
   Nayi category add karni ho to yahan naam likh dein. */
const CATEGORIES = ["Thumbnails", "Social Media", "Print Flyers", "Branding", "Events"];
