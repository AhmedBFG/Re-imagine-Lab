/* =====================================================================
   QUOTE FORM (quote.html only)
   - Fills the "service" and "machine" dropdowns from DATA
   - Pre-selects them from the URL (?service=web or ?machine=cnc)
   - Validates fields with clear, translated messages
   - Sends the request:
       * to DATA.quoteForm.endpoint (e.g. Formspree) if it is set
       * otherwise opens the visitor's email app with a pre-filled email
   ===================================================================== */

(function () {
  const form = document.getElementById("quote-form");
  if (!form) return;

  const successBox = document.getElementById("quote-success");
  const mailtoBox = document.getElementById("quote-mailto");
  const summary = document.getElementById("form-summary");
  const submitBtn = form.querySelector('[type="submit"]');
  const cfg = DATA.quoteForm;
  let lastMailto = "";

  /* ---------- Dropdowns ---------- */
  function fillSelects() {
    const service = form.elements.service;
    const machine = form.elements.machine;
    const keepService = service.value || new URLSearchParams(location.search).get("service") || "";
    const keepMachine = machine.value || new URLSearchParams(location.search).get("machine") || "";

    service.innerHTML =
      `<option value="">${esc(t("quote.choose"))}</option>` +
      DATA.services.map((s) => `<option value="${s.id}">${esc(tr(s.title))}</option>`).join("");
    machine.innerHTML =
      `<option value="">${esc(t("quote.machine.none"))}</option>` +
      DATA.machines.map((m) => `<option value="${m.id}">${esc(tr(m.name))}</option>`).join("");

    if (DATA.services.some((s) => s.id === keepService)) service.value = keepService;
    if (DATA.machines.some((m) => m.id === keepMachine)) machine.value = keepMachine;
  }

  /* ---------- Validation ---------- */
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // Each rule returns a TEXT key for the error, or "" when valid.
  const RULES = {
    name: (v) => (v.trim().length < 2 ? "quote.err.required" : ""),
    email: (v) => (!v.trim() ? "quote.err.required" : EMAIL_RE.test(v.trim()) ? "" : "quote.err.email"),
    phone: (v) => (!v.trim() ? "quote.err.required" : v.replace(/\D/g, "").length >= 8 ? "" : "quote.err.phone"),
    status: (v) => (v ? "" : "quote.err.required"),
    service: (v) => (v ? "" : "quote.err.required"),
    description: (v) => (!v.trim() ? "quote.err.required" : v.trim().length < 20 ? "quote.err.description" : ""),
    contactMethod: (v) => (v ? "" : "quote.err.required"),
    file: () => {
      const f = form.elements.file.files[0];
      return f && f.size > cfg.maxFileMB * 1024 * 1024 ? "quote.err.fileSize" : "";
    },
  };

  function fieldValue(name) {
    const el = form.elements[name];
    return el instanceof RadioNodeList ? el.value : el.value ?? "";
  }

  /** Shows or clears the error for one field. Returns true when valid. */
  function validateField(name) {
    const errKey = RULES[name](fieldValue(name));
    const errEl = document.getElementById(`err-${name}`);
    const wrapper = form.querySelector(`[data-field="${name}"]`);
    const inputs = form.querySelectorAll(`[name="${name}"]`);

    errEl.dataset.key = errKey;
    errEl.textContent = errKey ? t(errKey) : "";
    wrapper?.classList.toggle("has-error", !!errKey);
    inputs.forEach((i) => i.setAttribute("aria-invalid", errKey ? "true" : "false"));
    return !errKey;
  }

  function showSummary(key) {
    const el = summary.querySelector("[data-summary-text]");
    el.dataset.key = key;
    el.textContent = t(key);
    summary.hidden = false;
  }

  function validateAll() {
    const invalid = Object.keys(RULES).filter((name) => !validateField(name));
    if (invalid.length) {
      showSummary("quote.err.summary");
      form.querySelector(`[name="${invalid[0]}"]`).focus();
    } else {
      summary.hidden = true;
    }
    return invalid.length === 0;
  }

  // Validate a field when the visitor leaves it, and live once it has an error
  form.addEventListener("focusout", (e) => {
    const name = e.target.name;
    if (RULES[name] && e.target.type !== "radio" && e.target.value) validateField(name);
  });
  form.addEventListener("input", (e) => {
    const name = e.target.name;
    if (RULES[name] && form.querySelector(`[data-field="${name}"]`)?.classList.contains("has-error")) validateField(name);
  });
  form.addEventListener("change", (e) => {
    const name = e.target.name;
    if (name === "file") updateFileName();
    if (name === "status") updateDiscountHint();
    if (RULES[name] && (e.target.type === "radio" || name === "file" || e.target.tagName === "SELECT")) validateField(name);
  });

  /* ---------- Small UI helpers ---------- */
  function updateFileName() {
    const f = form.elements.file.files[0];
    document.getElementById("file-name").textContent = f ? `${f.name} (${(f.size / 1024 / 1024).toFixed(1)} MB)` : "";
  }

  function updateDiscountHint() {
    document.getElementById("discount-note").classList.toggle("is-active", fieldValue("status") === "eniso");
  }

  /* ---------- Build a readable summary of the request ---------- */
  function readableData() {
    const svc = DATA.services.find((s) => s.id === fieldValue("service"));
    const mac = DATA.machines.find((m) => m.id === fieldValue("machine"));
    return [
      [t("quote.name"), fieldValue("name").trim()],
      [t("quote.email"), fieldValue("email").trim()],
      [t("quote.phone"), fieldValue("phone").trim()],
      [t("quote.status"), t(`quote.status.${fieldValue("status")}`)],
      [t("quote.service"), svc ? tr(svc.title) : ""],
      [t("quote.machine"), mac ? tr(mac.name) : t("quote.machine.none")],
      [t("quote.contactMethod"), t(`quote.contact.${fieldValue("contactMethod")}`)],
      [t("quote.description"), fieldValue("description").trim()],
    ];
  }

  /* ---------- Submit ---------- */
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (form.elements._gotcha.value) return; // spam bot filled the hidden field
    if (!validateAll()) return;

    if (cfg.endpoint) {
      await sendToEndpoint();
    } else {
      openMailto();
    }
  });

  async function sendToEndpoint() {
    const data = new FormData();
    readableData().forEach(([label, value]) => data.append(label, value));
    data.append("_replyto", fieldValue("email").trim());
    data.append("_subject", `${t("quote.mailSubject")} – ${fieldValue("name").trim()}`);
    data.append("language", lang);
    const file = form.elements.file.files[0];
    if (file) data.append("file", file);

    submitBtn.disabled = true;
    submitBtn.querySelector("span").textContent = t("quote.sending");
    try {
      const res = await fetch(cfg.endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      showPanel(successBox);
    } catch (err) {
      console.error("Quote form error:", err);
      showSummary("quote.err.network");
      summary.focus();
    } finally {
      submitBtn.disabled = false;
      submitBtn.querySelector("span").textContent = t("quote.submit");
    }
  }

  // Fallback while no endpoint is configured: pre-filled email to the lab
  function openMailto() {
    const body = readableData().map(([label, value]) => `${label}: ${value}`).join("\n");
    const subject = `${t("quote.mailSubject")} – ${fieldValue("name").trim()}`;
    lastMailto = `mailto:${DATA.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = lastMailto;
    showPanel(mailtoBox);
  }

  document.getElementById("mailto-retry").addEventListener("click", () => {
    if (lastMailto) window.location.href = lastMailto;
  });

  function showPanel(panel) {
    form.hidden = true;
    summary.hidden = true;
    panel.hidden = false;
    panel.querySelector("h2").focus();
    panel.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  document.querySelectorAll("[data-form-reset]").forEach((btn) =>
    btn.addEventListener("click", () => {
      form.reset();
      updateFileName();
      updateDiscountHint();
      form.querySelectorAll(".has-error").forEach((el) => el.classList.remove("has-error"));
      form.querySelectorAll("[aria-invalid]").forEach((el) => el.setAttribute("aria-invalid", "false"));
      form.parentElement.querySelectorAll(".field-error, [data-summary-text]").forEach((el) => { el.textContent = ""; el.dataset.key = ""; });
      successBox.hidden = true;
      mailtoBox.hidden = true;
      form.hidden = false;
      form.elements.name.focus();
    })
  );

  /* ---------- Language change: refresh dropdowns and visible errors ---------- */
  document.addEventListener("langchange", () => {
    fillSelects();
    form.parentElement.querySelectorAll(".field-error, [data-summary-text]").forEach((el) => {
      if (el.dataset.key) el.textContent = t(el.dataset.key);
    });
  });

  // ?status=eniso (from the student banner) pre-selects the status
  const statusParam = new URLSearchParams(location.search).get("status");
  const statusRadio = form.querySelector(`[name="status"][value="${CSS.escape(statusParam || "")}"]`);
  if (statusRadio) statusRadio.checked = true;

  fillSelects();
  updateDiscountHint();
})();
