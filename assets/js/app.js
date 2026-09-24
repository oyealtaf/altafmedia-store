/* ============================================================
   AltafMedia Store — shared app logic
   ============================================================ */
const $  = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const fmt = n => STORE.currency + " " + Number(n).toLocaleString("en-PK");
const getProduct = id => PRODUCTS.find(p => p.id === id);
const catEmoji = { "Thumbnails":"🖼️", "Social Media":"📱", "Print Flyers":"📰", "Branding":"🎨", "Events":"🎉" };

/* ---------------- toast ---------------- */
function toast(msg){
  let t = $(".toast");
  if(!t){ t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(()=>t.classList.remove("show"), 2600);
}

/* ---------------- cart (localStorage) ---------------- */
const Cart = {
  key: "am_cart_v1",
  items(){
    try { return JSON.parse(localStorage.getItem(this.key)) || []; }
    catch(e){ return []; }
  },
  save(items){
    localStorage.setItem(this.key, JSON.stringify(items));
    this.renderBadge();
    renderDrawer();
  },
  add(id, qty = 1){
    const items = this.items();
    const line = items.find(i => i.id === id);
    if(line) line.qty = Math.min(line.qty + qty, 99);
    else items.push({ id, qty });
    this.save(items);
    const p = getProduct(id);
    toast((p ? p.title : "Product") + " — added to cart ✓");
  },
  setQty(id, qty){
    let items = this.items();
    if(qty <= 0) items = items.filter(i => i.id !== id);
    else items.find(i => i.id === id).qty = Math.min(qty, 99);
    this.save(items);
  },
  remove(id){ this.save(this.items().filter(i => i.id !== id)); },
  clear(){ this.save([]); },
  count(){ return this.items().reduce((a,i)=>a+i.qty,0); },
  subtotal(){ return this.items().reduce((a,i)=>{ const p=getProduct(i.id); return a + (p ? p.price*i.qty : 0); },0); },
  renderBadge(){
    $$(".cart-count").forEach(el=>{
      const c = this.count();
      el.textContent = c;
      el.style.display = c ? "flex" : "none";
    });
  }
};

/* ---------------- header / footer ---------------- */
function renderHeader(active){
  const links = [
    ["index.html","Home"],["shop.html","Shop"],["about.html","About"],["faq.html","FAQ"]
  ];
  const nav = links.map(([h,t])=>`<a href="${h}" class="${active===t?'active':''}">${t}</a>`).join("");
  $("header.site-header").innerHTML = `
  <div class="header"><div class="container header-inner">
    <a class="logo" href="index.html">
      <span class="logo-mark">A</span>
      <span>AltafMedia<small>${STORE.tagline}</small></span>
    </a>
    <nav class="nav" id="mainNav">${nav}</nav>
    <div class="header-actions">
      <button class="icon-btn" onclick="openDrawer()" aria-label="Cart">🛒<span class="cart-count" style="display:none">0</span></button>
      <button class="icon-btn hamburger" id="hamburger" aria-label="Menu">☰</button>
    </div>
  </div></div>`;
  $("#hamburger").addEventListener("click", ()=> $("#mainNav").classList.toggle("open"));
  Cart.renderBadge();
}

function renderFooter(){
  $("footer.site-footer").innerHTML = `
  <div class="footer"><div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <a class="logo" href="index.html"><span class="logo-mark">A</span><span>AltafMedia<small>${STORE.tagline}</small></span></a>
        <p>Premium, fully-layered PSD templates for creators, designers and businesses — instant delivery on WhatsApp after payment.</p>
      </div>
      <div><h4>Shop</h4>
        <a class="flink" href="shop.html">All products</a>
        <a class="flink" href="shop.html?cat=Thumbnails">Thumbnails</a>
        <a class="flink" href="shop.html?cat=Social%20Media">Social Media</a>
        <a class="flink" href="shop.html?cat=Print%20Flyers">Print Flyers</a>
      </div>
      <div><h4>Help</h4>
        <a class="flink" href="faq.html">FAQ</a>
        <a class="flink" href="terms.html">Terms & Refund Policy</a>
        <a class="flink" href="about.html">About</a>
        <a class="flink" href="cart.html">My Cart</a>
      </div>
      <div><h4>Contact</h4>
        <a class="flink" href="https://api.whatsapp.com/send?phone=${STORE.whatsapp}&text=${encodeURIComponent('Hello! I would like to know more about the AltafMedia Store.')}" target="_blank" rel="noopener">💬 WhatsApp Support</a>
        <a class="flink" href="about.html#contact">📞 Contact details</a>
        <span class="flink" style="cursor:default">🕙 Mon–Sat, 10am–8pm (PKT)</span>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${STORE.name}. All rights reserved.</span>
      <span>Digital products — delivered on WhatsApp after payment verification.</span>
    </div>
  </div></div>`;
}

/* ---------------- cart drawer ---------------- */
function renderDrawer(){
  const box = $("#drawerItems");
  if(!box) return;
  const items = Cart.items();
  if(!items.length){
    box.innerHTML = `<div class="empty-state" style="padding:40px 10px"><div class="big">🛒</div><p><b>Your cart is empty.</b><br>Add your favorite templates from the shop.</p></div>`;
  } else {
    box.innerHTML = items.map(i=>{
      const p = getProduct(i.id); if(!p) return "";
      return `<div class="d-item">
        <img src="${p.previews[0]}" alt="${p.title}">
        <div style="flex:1;min-width:0">
          <div class="t">${p.title}</div><div class="p">${fmt(p.price)}</div>
          <div class="row">
            <div class="mini-qty">
              <button onclick="Cart.setQty('${p.id}',${i.qty-1})">−</button><span>${i.qty}</span><button onclick="Cart.setQty('${p.id}',${i.qty+1})">+</button>
            </div>
            <button class="rm" onclick="Cart.remove('${p.id}')">Remove</button>
          </div>
        </div>
      </div>`;
    }).join("");
  }
  $("#drawerSubtotal").textContent = fmt(Cart.subtotal());
  const go = $("#drawerCheckout");
  if(go) go.disabled = !items.length;
}
function openDrawer(){ $("#drawerOverlay").classList.add("show"); $("#cartDrawer").classList.add("open"); renderDrawer(); }
function closeDrawer(){ $("#drawerOverlay").classList.remove("show"); $("#cartDrawer").classList.remove("open"); }

function drawerShell(){
  document.body.insertAdjacentHTML("beforeend", `
  <div class="drawer-overlay" id="drawerOverlay" onclick="closeDrawer()"></div>
  <aside class="drawer" id="cartDrawer" aria-label="Shopping cart">
    <div class="drawer-head"><h3>🛒 Your Cart</h3><button class="icon-btn" onclick="closeDrawer()" aria-label="Close">✕</button></div>
    <div class="drawer-items" id="drawerItems"></div>
    <div class="drawer-foot">
      <div class="subtotal-row"><span>Subtotal</span><span id="drawerSubtotal">Rs 0</span></div>
      <a href="cart.html" class="btn btn-outline btn-block">View Full Cart</a>
      <a href="checkout.html" id="drawerCheckout" class="btn btn-primary btn-block">Proceed to Checkout →</a>
    </div>
  </aside>`);
}

/* ---------------- product card ---------------- */
function badgeClass(b){
  return b==="Bestseller" ? "badge gold" : (b==="Hot" ? "badge red" : "badge");
}
function productCard(p){
  const disc = p.oldPrice ? Math.round((1 - p.price/p.oldPrice)*100) : 0;
  return `<div class="card">
    <a class="card-img" href="product.html?id=${p.id}">
      <img src="${p.previews[0]}" alt="${p.title}" loading="lazy">
      ${p.badge?`<span class="${badgeClass(p.badge)}">${p.badge}</span>`:""}
      ${disc?`<span class="discount-tag">−${disc}%</span>`:""}
    </a>
    <div class="card-body">
      <span class="card-cat">${p.category}</span>
      <a class="card-title" href="product.html?id=${p.id}">${p.title}</a>
      <p class="card-short">${p.short}</p>
      <div class="card-foot">
        <span class="price">${fmt(p.price)}${p.oldPrice?`<span class="old">${fmt(p.oldPrice)}</span>`:""}</span>
      </div>
    </div>
    <div class="card-actions">
      <button class="btn btn-outline btn-sm" onclick="Cart.add('${p.id}');openDrawer()">Add to Cart</button>
      <a class="btn btn-primary btn-sm" href="product.html?id=${p.id}">View →</a>
    </div>
  </div>`;
}

/* ---------------- WhatsApp order message ---------------- */
function orderId(){ 
  const c = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let s = ""; for(let i=0;i<6;i++) s += c[Math.floor(Math.random()*c.length)];
  return "AM-" + s;
}
function waLink(order){
  const lines = order.items.map(i=>`• ${i.title} x${i.qty} = ${fmt(i.price*i.qty)}`);
  const msg =
`Hello! I would like to confirm my order.
--------------------------
Order ID: ${order.id}
Name: ${order.name}
Phone: ${order.phone}
--------------------------
${lines.join("\n")}
--------------------------
Total: ${fmt(order.total)}
Payment: ${order.payTitle}
--------------------------
Payment sent. Please send the files, thank you!`;
  return "https://api.whatsapp.com/send?phone=" + STORE.whatsapp + "&text=" + encodeURIComponent(msg);
}

/* ---------------- FAQ accordion ---------------- */
function initFaq(){
  $$(".faq-item").forEach(item=>{
    const q = $(".faq-q", item), a = $(".faq-a", item);
    q.addEventListener("click", ()=>{
      const open = item.classList.contains("open");
      $$(".faq-item.open").forEach(o=>{ o.classList.remove("open"); $(".faq-a",o).style.maxHeight = null; });
      if(!open){ item.classList.add("open"); a.style.maxHeight = a.scrollHeight + "px"; }
    });
  });
}

/* ---------------- tabs ---------------- */
function initTabs(){
  $$(".tab-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      $$(".tab-btn").forEach(b=>b.classList.remove("active"));
      $$(".tab-panel").forEach(p=>p.classList.remove("active"));
      btn.classList.add("active");
      $("#"+btn.dataset.tab).classList.add("active");
    });
  });
}

/* ---------------- boot ---------------- */
function boot(active){
  drawerShell();
  renderHeader(active);
  renderFooter();
  initFaq();
  initTabs();
  renderDrawer();
}
