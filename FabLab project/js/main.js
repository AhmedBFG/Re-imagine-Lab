/* =====================================================================
   MAIN SCRIPT
   - Language switch (FR/EN) using TEXT from content.js
   - Shared header and footer (written once, injected on every page)
   - Renders lists from DATA (services, machines, projects, partners…)
   - Equipment filters, mobile menu, scroll animations

   You normally don't need to edit this file to change content:
   edit js/content.js instead.
   ===================================================================== */

/* ---------- 1. Language helpers ---------- */

const LANGS = ["fr", "en"];
let lang = detectLang();

/** Language priority: ?lang= in URL, then saved choice, then default (French). */
function detectLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (LANGS.includes(saved)) return saved;
  } catch (e) { /* storage blocked: ignore */ }
  return DEFAULT_LANG;
}

/** Translate a TEXT key. Optional {n}-style variables. */
function t(key, vars = {}) {
  const entry = TEXT[key];
  if (!entry) {
    console.warn("Missing translation key:", key);
    return key;
  }
  let str = entry[lang] ?? entry.fr;
  for (const [k, v] of Object.entries(vars)) str = str.replace(`{${k}}`, v);
  return str;
}

/** Pick the current language from a DATA field like { fr: "...", en: "..." }. */
function tr(field) {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] ?? field.fr;
}

/** Escape text before inserting it into HTML. */
function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function setLang(newLang) {
  if (!LANGS.includes(newLang) || newLang === lang) return;
  lang = newLang;
  try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
  // Keep the URL shareable without reloading
  const url = new URL(location.href);
  url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);
  renderAll();
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

/* ---------- 2. Static text in the HTML ----------
   <h1 data-i18n="home.hero.title1"></h1>               -> text
   <input data-i18n-attr="placeholder:quote.name">      -> attribute(s), comma-separated
*/
function applyStaticText() {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      el.setAttribute(attr, t(key));
    });
  });

  // <span data-icon="check"></span> -> inline SVG icon
  document.querySelectorAll("[data-icon]").forEach((el) => {
    if (!el.firstElementChild) el.innerHTML = icon(el.dataset.icon);
  });

  // SEO: title + description for the current page (body data-page="home" etc.)
  const page = document.body.dataset.page;
  if (TEXT[`meta.${page}.title`]) {
    document.title = t(`meta.${page}.title`);
    setMeta('meta[name="description"]', t(`meta.${page}.desc`));
    setMeta('meta[property="og:title"]', t(`meta.${page}.title`));
    setMeta('meta[property="og:description"]', t(`meta.${page}.desc`));
    setMeta('meta[property="og:locale"]', lang === "fr" ? "fr_FR" : "en_US");
  }
}

function setMeta(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", value);
}

/* ---------- 3. Shared header ---------- */

const NAV = [
  { href: "index.html", key: "nav.home", page: "home" },
  { href: "about.html", key: "nav.about", page: "about" },
  { href: "services.html", key: "nav.services", page: "services" },
  { href: "equipment.html", key: "nav.equipment", page: "equipment" },
  { href: "projects.html", key: "nav.projects", page: "projects" },
  { href: "contact.html", key: "nav.contact", page: "contact" },
];

function langSwitch(extraClass = "") {
  return `
    <div class="lang-switch ${extraClass}" role="group" aria-label="${esc(t("nav.lang"))}">
      ${LANGS.map((l) => `
        <button type="button" data-lang="${l}" aria-pressed="${l === lang}" lang="${l}">
          <span aria-hidden="true">${l.toUpperCase()}</span>
          <span class="sr-only">${l === "fr" ? "Français" : "English"}</span>
        </button>`).join('<span class="lang-sep" aria-hidden="true">|</span>')}
    </div>`;
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const page = document.body.dataset.page;
  const menuOpen = el.classList.contains("menu-open");

  el.innerHTML = `
    <a class="skip-link" href="#main">${esc(t("nav.skip"))}</a>
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="${esc(t("nav.homeLink"))}">
        <img src="assets/img/logo-reimagine.webp" alt="Re-Imagine – FabLab Solidaire" width="392" height="329">
      </a>
      <nav class="nav" id="primary-nav" aria-label="Navigation">
        <ul class="nav-list">
          ${NAV.map((n) => `
            <li><a href="${n.href}" ${n.page === page ? 'aria-current="page"' : ""}>${esc(t(n.key))}</a></li>`).join("")}
        </ul>
        <div class="nav-mobile-extra">
          <a class="btn btn-primary btn-block" href="quote.html">${esc(t("cta.quote"))}</a>
        </div>
      </nav>
      <div class="header-actions">
        ${langSwitch()}
        <a class="btn btn-primary btn-sm header-cta" href="quote.html" ${page === "quote" ? 'aria-current="page"' : ""}>${esc(t("cta.quote"))}</a>
        <button class="menu-toggle" type="button" aria-controls="primary-nav" aria-expanded="${menuOpen}">
          ${icon(menuOpen ? "close" : "menu")}
          <span class="sr-only">${esc(t("nav.menu"))}</span>
        </button>
      </div>
    </div>`;
}

/* ---------- 4. Shared footer ---------- */

function socialLinks() {
  return `
    <ul class="social-list">
      ${DATA.contact.socials.map((s) => `
        <li><a href="${s.url}" target="_blank" rel="noopener" aria-label="${esc(s.label)} ${esc(t("label.newTab"))}">${icon(s.id)}</a></li>`).join("")}
      <li><a href="https://wa.me/${DATA.contact.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp ${esc(t("label.newTab"))}">${icon("whatsapp")}</a></li>
    </ul>`;
}

function hoursText() {
  const h = DATA.contact.hours;
  const days = tr(h.days);
  return days ? `${days} · ${tr(h.time)}` : tr(h.time);
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const c = DATA.contact;
  el.innerHTML = `
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="index.html" aria-label="${esc(t("nav.homeLink"))}">
          <img src="assets/img/logo-reimagine.webp" alt="Re-Imagine – FabLab Solidaire" width="392" height="329" loading="lazy">
        </a>
        <p>${esc(t("footer.desc"))}</p>
        ${langSwitch("lang-switch-footer")}
      </div>

      <div>
        <h2 class="footer-title">${esc(t("footer.links"))}</h2>
        <ul class="footer-links">
          ${NAV.map((n) => `<li><a href="${n.href}">${esc(t(n.key))}</a></li>`).join("")}
          <li><a href="quote.html">${esc(t("cta.quote"))}</a></li>
        </ul>
      </div>

      <div>
        <h2 class="footer-title">${esc(t("nav.contact"))}</h2>
        <ul class="footer-contact">
          <li>${icon("whatsapp")}<a href="https://wa.me/${c.whatsapp}" target="_blank" rel="noopener">${esc(c.phoneDisplay)}</a></li>
          <li>${icon("mail")}<a href="mailto:${c.email}">${esc(c.email)}</a></li>
          <li>${icon("clock")}<span>${esc(hoursText())}</span></li>
          <li>${icon("pin")}<span>${esc(tr(c.address)).replace(/\n/g, "<br>")}</span></li>
        </ul>
        <h2 class="footer-title footer-title-follow">${esc(t("footer.follow"))}</h2>
        ${socialLinks()}
      </div>

      <div>
        <h2 class="footer-title">${esc(t("label.partners"))}</h2>
        <p class="footer-partners-line">${esc(t("label.partnersLine"))}</p>
        ${partnerLogos("partner-logos-footer")}
      </div>
    </div>
    <div class="container footer-bottom">
      <p>© ${new Date().getFullYear()} Re-Imagine – FabLab Solidaire · JEENISo. ${esc(t("footer.rights"))}</p>
    </div>
    <a class="fab-whatsapp" href="https://wa.me/${c.whatsapp}" target="_blank" rel="noopener" aria-label="${esc(t("cta.whatsapp"))} ${esc(t("label.newTab"))}">${icon("whatsapp")}</a>`;
}

/* ---------- 5. Reusable blocks ---------- */

function partnerLogos(extraClass = "") {
  return `
    <ul class="partner-logos ${extraClass}">
      ${DATA.partners.map((p) => {
        const img = `<img src="${p.logo}" alt="${esc(tr(p.alt))}" loading="lazy">`;
        return `<li class="partner partner-${p.name.toLowerCase()}">${
          p.url ? `<a href="${p.url}" target="_blank" rel="noopener" title="${esc(p.name)} ${esc(t("label.newTab"))}">${img}</a>` : img
        }</li>`;
      }).join("")}
    </ul>`;
}

function isPlaceholder(src) {
  return src.includes("placeholder");
}

/* fit = "contain" shows the whole picture (product shots, slides); default crops to fill */
function mediaBlock(src, alt, ratioClass = "", fit = "cover") {
  const ph = isPlaceholder(src);
  return `
    <div class="media ${ratioClass} ${ph ? "is-placeholder" : ""} ${fit === "contain" ? "media-contain" : ""}">
      <img src="${src}" alt="${esc(ph ? `${alt} – ${t("label.photoSoon")}` : alt)}" loading="lazy">
      ${ph ? `<span class="media-badge" aria-hidden="true">${esc(t("label.photoSoon"))}</span>` : ""}
    </div>`;
}

function serviceName(id) {
  const s = DATA.services.find((x) => x.id === id);
  return s ? tr(s.title) : id;
}

function categoryName(id) {
  const c = DATA.machineCategories.find((x) => x.id === id);
  return c ? tr(c.label) : id;
}

/* Service card. detailed = Services page version with a quote button. */
function serviceCard(s, detailed = false) {
  return `
    <article class="card service-card reveal ${detailed ? "service-card-detailed" : ""}" id="${detailed ? s.id : ""}">
      <span class="icon-badge">${icon(s.icon)}</span>
      <h3>${esc(tr(s.title))}</h3>
      <p>${esc(tr(detailed ? s.desc : s.short))}</p>
      ${detailed ? `
        <a class="btn btn-primary btn-sm" href="quote.html?service=${s.id}">
          ${esc(t("cta.quote"))}<span class="sr-only"> – ${esc(tr(s.title))}</span>
        </a>` : ""}
    </article>`;
}

/* Machine card. compact = Home page version (no specs). */
function machineCard(m, compact = false) {
  const specs = tr(m.specs) || [];
  const uses = tr(m.uses) || [];
  return `
    <article class="card machine-card reveal" data-category="${m.category}">
      ${mediaBlock(m.image, tr(m.name), "ratio-4-3", "contain")}
      <div class="card-body">
        <span class="chip chip-cat">${esc(categoryName(m.category))}</span>
        <h3>${esc(tr(m.name))}</h3>
        <p>${esc(tr(m.desc))}</p>
        ${!compact && specs.length ? `<ul class="specs">${specs.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>` : ""}
        ${uses.length ? `
          <p class="small-label">${esc(t("label.uses"))}</p>
          <ul class="tag-list">${uses.map((u) => `<li class="tag">${esc(u)}</li>`).join("")}</ul>` : ""}
        <div class="card-actions">
          <a class="btn btn-primary btn-sm" href="quote.html?machine=${m.id}">
            ${esc(t("cta.quote"))}<span class="sr-only"> – ${esc(tr(m.name))}</span>
          </a>
          ${!compact && m.link ? `
            <a class="link-arrow" href="${m.link}" target="_blank" rel="noopener">
              ${esc(t("label.productPage"))} ${icon("external")}<span class="sr-only">${esc(t("label.newTab"))}</span>
            </a>` : ""}
        </div>
      </div>
    </article>`;
}

/* Picture card linking to the JEENISo website. large = Projects page layout. */
function siteLinkCard(large = false) {
  const l = DATA.siteLink;
  return `
    <a class="card project-card link-card reveal ${large ? "project-card-large" : ""}" href="${l.url}" target="_blank" rel="noopener">
      ${mediaBlock(l.image, t("site.imgAlt"), "ratio-16-9")}
      <div class="card-body">
        <p class="project-client"><strong>${esc(t("site.label"))}</strong></p>
        <h3>${esc(t("site.title"))}</h3>
        <p>${esc(t("site.text"))}</p>
        <span class="link-arrow">${esc(t("site.cta"))} ${icon("external")}<span class="sr-only">${esc(t("label.newTab"))}</span></span>
      </div>
    </a>`;
}

/* Project card. large = Projects page layout. */
function projectCard(p, large = false) {
  return `
    <article class="card project-card reveal ${large ? "project-card-large" : ""}">
      ${mediaBlock(p.image, tr(p.title), "ratio-16-9", p.fit)}
      <div class="card-body">
        <p class="project-client"><span class="small-label">${esc(t("label.client"))}</span> <strong>${esc(p.client)}</strong></p>
        <h3>${esc(tr(p.title))}</h3>
        ${large ? `<p>${esc(tr(p.desc))}</p>` : ""}
        <ul class="tag-list">${p.tags.map((id) => `<li class="tag tag-service">${esc(serviceName(id))}</li>`).join("")}</ul>
      </div>
    </article>`;
}

function iconCard(item, extra = "") {
  return `
    <article class="card icon-card reveal ${extra}">
      <span class="icon-badge">${icon(item.icon)}</span>
      <h3>${esc(tr(item.title))}</h3>
      <p>${esc(tr(item.text))}</p>
    </article>`;
}

/* ---------- 6. Renderers: <div data-render="name"> gets filled ---------- */

let currentFilter = "all";

const RENDERERS = {
  "services-short": () => DATA.services.map((s) => serviceCard(s)).join(""),
  "services-detailed": () => DATA.services.map((s) => serviceCard(s, true)).join(""),
  "machines-featured": () => DATA.machines.filter((m) => m.featured).map((m) => machineCard(m, true)).join(""),
  "machines-all": () => {
    const list = DATA.machines.filter((m) => currentFilter === "all" || m.category === currentFilter);
    return list.length ? list.map((m) => machineCard(m)).join("") : `<p class="empty">${esc(t("equipment.empty"))}</p>`;
  },
  "machine-filters": () => {
    // Only show categories that actually have machines
    const used = DATA.machineCategories.filter((c) => DATA.machines.some((m) => m.category === c.id));
    const btn = (id, label) =>
      `<button type="button" class="filter-btn" data-filter="${id}" aria-pressed="${currentFilter === id}">${esc(label)}</button>`;
    return btn("all", t("equipment.filter.all")) + used.map((c) => btn(c.id, tr(c.label))).join("");
  },
  "machine-count": () => {
    const n = DATA.machines.filter((m) => currentFilter === "all" || m.category === currentFilter).length;
    return esc(t("equipment.count", { n }));
  },
  "projects-teaser": () => DATA.projects.slice(0, 2).map((p) => projectCard(p)).join("") + siteLinkCard(),
  "projects-all": () => DATA.projects.map((p) => projectCard(p, true)).join("") + siteLinkCard(true),
  "partners": () => partnerLogos(),
  "audience": () => DATA.audience.map((a) => iconCard(a)).join(""),
  "steps": () => DATA.steps.map((s, i) => `
    <li class="step reveal">
      <span class="step-num" aria-hidden="true">${i + 1}</span>
      <span class="icon-badge">${icon(s.icon)}</span>
      <h3>${esc(tr(s.title))}</h3>
      <p>${esc(tr(s.text))}</p>
    </li>`).join(""),
  "hours": () => esc(hoursText()),
  "quick-contact": () => `
    <a class="btn btn-primary" href="https://wa.me/${DATA.contact.whatsapp}" target="_blank" rel="noopener">${icon("whatsapp")} ${esc(t("cta.whatsapp"))}</a>
    <a class="btn btn-outline" href="tel:${DATA.contact.phoneLink}">${icon("phone")} ${esc(DATA.contact.phoneDisplay)}</a>
    <a class="btn btn-outline" href="mailto:${DATA.contact.email}">${icon("mail")} ${esc(t("contact.email"))}</a>`,
  "contact-cards": () => {
    const c = DATA.contact;
    return `
      <article class="card contact-card reveal">
        <span class="icon-badge">${icon("whatsapp")}</span>
        <h2>${esc(t("contact.whatsapp"))}</h2>
        <p class="contact-value">${esc(c.phoneDisplay)}</p>
        <div class="card-actions">
          <a class="btn btn-primary btn-sm" href="https://wa.me/${c.whatsapp}" target="_blank" rel="noopener">${icon("whatsapp")} ${esc(t("cta.whatsapp"))}</a>
          <a class="btn btn-outline btn-sm" href="tel:${c.phoneLink}">${icon("phone")} ${esc(t("contact.call"))}</a>
        </div>
      </article>
      <article class="card contact-card reveal">
        <span class="icon-badge">${icon("mail")}</span>
        <h2>${esc(t("contact.email"))}</h2>
        <p class="contact-value"><a href="mailto:${c.email}">${esc(c.email)}</a></p>
      </article>
      <article class="card contact-card reveal">
        <span class="icon-badge">${icon("clock")}</span>
        <h2>${esc(t("label.hours"))}</h2>
        <p class="contact-value">${esc(hoursText())}</p>
      </article>
      <article class="card contact-card reveal">
        <span class="icon-badge">${icon("user")}</span>
        <h2>${esc(t("contact.social"))}</h2>
        ${socialLinks()}
      </article>`;
  },
  "address": () => {
    const c = DATA.contact;
    const dir = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(c.mapQuery)}`;
    return `
      <span class="icon-badge">${icon("pin")}</span>
      <div>
        <h2>${esc(t("contact.address"))}</h2>
        <address>${esc(tr(c.address)).replace(/\n/g, "<br>")}</address>
        <a class="link-arrow" href="${dir}" target="_blank" rel="noopener">${esc(t("contact.directions"))} ${icon("arrowRight")}<span class="sr-only">${esc(t("label.newTab"))}</span></a>
      </div>`;
  },
  "map": () => {
    const q = encodeURIComponent(DATA.contact.mapQuery);
    return `<iframe title="${esc(t("contact.map"))}" src="https://maps.google.com/maps?q=${q}&z=15&hl=${lang}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  },
};

function renderBlocks() {
  document.querySelectorAll("[data-render]").forEach((el) => {
    const fn = RENDERERS[el.dataset.render];
    if (!fn) return;
    // Don't reload the map iframe if the language did not change its content
    if (el.dataset.render === "map" && el.dataset.renderedLang === lang) return;
    el.innerHTML = fn();
    el.dataset.renderedLang = lang;
  });
}

/* ---------- 7. Interactions ---------- */

function bindEvents() {
  document.addEventListener("click", (e) => {
    // Language buttons (header + footer)
    const langBtn = e.target.closest("[data-lang]");
    if (langBtn) { setLang(langBtn.dataset.lang); return; }

    // Mobile menu
    const toggle = e.target.closest(".menu-toggle");
    if (toggle) { toggleMenu(); return; }

    // Equipment filters
    const filterBtn = e.target.closest("[data-filter]");
    if (filterBtn) {
      currentFilter = filterBtn.dataset.filter;
      ["machine-filters", "machines-all", "machine-count"].forEach((name) => {
        const el = document.querySelector(`[data-render="${name}"]`);
        if (el) el.innerHTML = RENDERERS[name]();
      });
      document.querySelector(`[data-filter="${currentFilter}"]`)?.focus();
      observeReveals();
    }
  });

  // Close the mobile menu with Escape
  document.addEventListener("keydown", (e) => {
    const header = document.getElementById("site-header");
    if (e.key === "Escape" && header?.classList.contains("menu-open")) {
      toggleMenu(false);
      header.querySelector(".menu-toggle")?.focus();
    }
  });

  // Header shadow once the page is scrolled
  const onScroll = () => document.getElementById("site-header")?.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function toggleMenu(force) {
  const header = document.getElementById("site-header");
  const open = force ?? !header.classList.contains("menu-open");
  header.classList.toggle("menu-open", open);
  document.body.classList.toggle("no-scroll", open);
  const btn = header.querySelector(".menu-toggle");
  btn.setAttribute("aria-expanded", open);
  btn.innerHTML = `${icon(open ? "close" : "menu")}<span class="sr-only">${esc(t("nav.menu"))}</span>`;
}

/* Fade-in on scroll (disabled automatically for "reduce motion" users in CSS) */
let revealObserver;
function observeReveals() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  revealObserver ??= new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -40px 0px", threshold: 0.08 });
  items.forEach((el) => revealObserver.observe(el));
}

/* ---------- 8. Start ---------- */

function renderAll() {
  applyStaticText();
  renderHeader();
  renderFooter();
  renderBlocks();
  observeReveals();
}

document.documentElement.classList.add("js");
renderAll();
bindEvents();
