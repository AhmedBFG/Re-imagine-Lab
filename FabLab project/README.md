# Re-Imagine – FabLab Solidaire · Website

Bilingual (FR/EN) marketing site for the Re-Imagine FabLab at ENISO, a collaboration between **Orange** and **JEENISo**.
Plain HTML, CSS and JavaScript. No framework, no build step.

## 1. Run it

**Quickest:** double-click `index.html`. It opens in your browser.

**Recommended** (so it behaves like the real site), from this folder:

```bash
python -m http.server 8080
```

Then open http://localhost:8080.

## 2. Project structure

```
index.html        Home
about.html        About
services.html     Services
equipment.html    Equipment (with category filters)
projects.html     Projects ("Réalisations")
quote.html        Quote request form
contact.html      Contact + map

js/content.js     ← ALL TEXT (FR + EN) AND DATA. Edit this file for content changes.
js/main.js        Language switch, header/footer, cards, filters, animations
js/quote-form.js  Form validation and sending
js/icons.js       Line icons (SVG)
css/style.css     All styles. Brand colors are at the top (":root").
assets/img/       Logos, photos, placeholder image, decorative pattern
```

## 3. Edit content (no coding needed)

Everything is in **`js/content.js`**:

| To change… | Edit… |
|---|---|
| Any sentence on the site | `TEXT` → find the key, change `fr:` and/or `en:` |
| Phone, email, address, hours, social links | `DATA.contact` |
| Services | `DATA.services` |
| Machines | `DATA.machines` (and `DATA.machineCategories` for filters) |
| Projects | `DATA.projects` |
| Partner logos | `DATA.partners` |
| "Who is it for" / "3 steps" | `DATA.audience` / `DATA.steps` |

**Add a machine:** copy one `{ … }` block in `DATA.machines`, change the `id`, `name`, `desc`, `uses`,
and put its photo in `assets/img/machines/`. For a new category, add it to `DATA.machineCategories`.
The filter button appears automatically.

**Replace a placeholder photo:** put the image in `assets/img/machines/` or `assets/img/projects/`
(JPG/WebP, about 1200 px wide, under 300 KB), then change `image: "assets/img/placeholder.svg"` to the new path.
The "Photo coming soon" badge disappears by itself.

**Language:** French is the default. The FR | EN choice is remembered, and `?lang=en` in a link opens the English version.

## 4. Connect the quote form

Right now, with no endpoint set, the form validates the request and then **opens the visitor's email app**
with a pre-filled message to junior.entreprise.eniso@gmail.com. This works, but the visitor still has to press "Send".

To receive requests directly by email (recommended):

1. Create a free account at https://formspree.io with **junior.entreprise.eniso@gmail.com**.
2. Create a form and copy its URL (looks like `https://formspree.io/f/abcdwxyz`).
3. In `js/content.js`, set `DATA.quoteForm.endpoint: "https://formspree.io/f/abcdwxyz"`.
4. Send one test request and confirm the email address when Formspree asks.

Note: Formspree's free plan does not accept **file attachments**. Either upgrade, or remove the file field.
Visitors can always send files via WhatsApp or email.
(EmailJS or a small backend also work. Replace `sendToEndpoint()` in `js/quote-form.js`.)

## 5. Deploy (free options)

- **Netlify Drop:** go to https://app.netlify.com/drop and drag this folder in. Done.
- **GitHub Pages:** push the folder to a GitHub repo, then Settings → Pages → Deploy from branch `main` / root.
- **Any web host:** upload all files as they are (it's a static site).

After deploying, in each HTML file replace `content="assets/img/og-image.jpg"` with the full URL
(e.g. `https://your-site.com/assets/img/og-image.jpg`) so link previews on WhatsApp/Facebook show the image.

## 6. Placeholders still to fill in

| # | What | Where |
|---|---|---|
| 1 | **[CNC MODEL]**: model name of the CNC | `DATA.machines` → `cnc` → `name` |
| 2 | **[DAYS OPEN]**: opening days (hours 8:30–18:00 are set) | `DATA.contact.hours.days` |
| 3 | Formspree (or other) **form endpoint** | `DATA.quoteForm.endpoint` |
| 4 | Site URL for **social preview image** | `og:image` in each HTML file |
| 5 | Optional: link for the Orange logo | `DATA.partners` → Orange → `url` |

All machine and project photos are in place (`assets/img/machines/`, `assets/img/projects/`).
The JEENISo website card after the projects is set in `DATA.siteLink`.

The original logo and lab photos you sent are still in the project root. The site uses the optimized copies in `assets/img/`.
