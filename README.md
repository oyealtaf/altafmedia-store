# AltafMedia Store — README

Aap ki PSD templates bechne wali website tayyar hai! Ye guide batati hai ke products kaise add karein, apne numbers kaise lagayein, aur site ko online kaise karein.

## 📁 Folder ka structure

```
psd_store/
├── index.html          → Home page
├── shop.html           → Poori shop (search + filter + sort)
├── product.html        → Product detail page
├── cart.html           → Cart page
├── checkout.html       → Order form
├── success.html        → Order confirm + WhatsApp button
├── about.html, faq.html, terms.html
└── assets/
    ├── css/style.css   → Poori design (white premium theme)
    ├── js/
    │   ├── config.js   → ★ APNE NUMBERS YAHAN LAGAYEIN
    │   ├── products.js → ★ PRODUCTS YAHAN ADD KAREIN
    │   └── app.js      → Cart, header, footer ka code (chheirne ki zaroorat nahi)
    └── img/products/   → Product ki preview tasveerein
```

## ➕ Naya product kaise add karein (3 steps)

**Step 1 — Tasveer rakhein:**
Apne product ki preview image (JPG/PNG) `assets/img/products/` folder mein copy karein.
Naam simple rakhein, misal: `eid-poster-pack.jpg`

**Step 2 — products.js mein block add karein:**
`assets/js/products.js` kholein, `PRODUCTS` array ke end mein (aakhri `}` ke baad, `];` se pehle) ye block paste karein aur apni details likhein:

```js
  {
    id: "mera-product",                          // UNIQUE hona chahiye, space nahi
    title: "Mera Product Ka Naam",
    category: "Thumbnails",                      // in mein se ek: Thumbnails, Social Media, Print Flyers, Branding, Events
    price: 800,                                  // sirf number, Rs baghair
    oldPrice: 1200,                              // discount dikhana ho to, warna null likhein
    badge: "New",                                // "Bestseller", "New", "Hot" ya null
    previews: ["assets/img/products/meri-tasveer.jpg"],
    short: "Chhoti si line jo card par nazar ayegi.",
    description: `<p>Poori detail yahan likhein. HTML chalti hai.</p>
<ul><li>Point 1</li><li>Point 2</li></ul>`,
    details: { format: "PSD", dimensions: "1280 × 720 px", layers: "Fully layered", fileSize: "500 MB (ZIP)" },
    featured: true,      // true = home page par "Featured" mein ayega
    sample: false        // apne product ke liye false
  },
```

**Step 3 — Save karein, bas!** Website khud product ko shop, search, filter aur home page par dikha degi.

> ⚠️ `id` har product ka alag hona LAZMI hai. Do products ki same id hui to site kharab dikhegi.

## 🗑️ Sample products kaise delete karein

`products.js` mein jin products ke saath `sample: true` likha hai, wo demo products hain.
Delete karne ke liye bas unka poora `{ ... },` block delete kar dein — `{` se le kar `},` tak.

## 📱 Apna WhatsApp aur payment numbers kaise lagayein

`assets/js/config.js` kholein:

```js
whatsapp: "923001234567",   // ← apna WhatsApp number (country code 92 ke saath, baghair + ya space)
```

```js
payments: {
  jazzcash: { title: "JazzCash", number: "0300-XXXXXXX", accountName: "Apna Naam" },
  easypaisa:{ title: "Easypaisa", number: "0300-XXXXXXX", accountName: "Apna Naam" },
  bank:     { title: "Bank Transfer", bankName: "Bank ka naam", accountTitle: "Apna Naam", iban: "Apna IBAN" }
}
```

> ⚠️ Abhi wahan PLACEHOLDER numbers hain — apne asli numbers lagana NA BHULEIN, warna customers ko ghalat number milega!

## 🛒 Order ka flow kaise kaam karta hai

1. Customer product chunta hai → Cart → Checkout (naam, phone, payment method)
2. "Place Order" par Order ID banti hai (misal: `AM-X7K9P2`)
3. Success page par customer ko **payment number** milta hai + **"Confirm on WhatsApp"** button
4. Button dabane par WhatsApp khulta hai — order message (naam, items, total, Order ID, payment method) pehle se likha hota hai
5. Customer payment screenshot bhejta hai → aap verify karke **ZIP files WhatsApp par bhej dete hain**

## 🌐 Website ko online kaise karein

Koi bhi free static host chalega — misal:

- **Cloudflare Pages:** Cloudflare dashboard → Pages → "Upload assets" → ye `psd_store` folder drag-drop karein
- **Netlify:** netlify.com → "Deploy" → folder drag-drop
- **GitHub Pages:** repo banayein, files upload karein, Pages on karein

Phir apne domain `altafmedia.dpdns.org` ki DNS mein us host ka address lagayein (host ki guide follow karein).

## 💡 Zaroori notes

- Cart customer ke browser mein save hota hai (localStorage) — koi server/database nahi chahiye.
- Koi online payment gateway nahi hai — payment manual hai (JazzCash/Easypaisa), yehi Pakistan ke chhote digital stores ka tareeqa hai.
- Design mein koi tabdeeli chahiye (rang, logo) to `assets/css/style.css` mein `:root` wale rang badal dein.
