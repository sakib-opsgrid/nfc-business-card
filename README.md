<div align="center">

# 📇 Najmaz Sakib — Digital Business Card

**A minimal, Apple-inspired NFC-ready digital business card.**
One tap. One URL. Your entire professional identity.

[![Live Site](https://img.shields.io/badge/Live-View%20Card-0a84ff?style=for-the-badge)](https://your-username.github.io)
[![Made with](https://img.shields.io/badge/Built%20with-HTML%20%2B%20CSS%20%2B%20JS-1d1d1f?style=for-the-badge)]()
[![NFC Ready](https://img.shields.io/badge/NFC-Ready-34c759?style=for-the-badge)]()

</div>

---

## ✨ Overview

This repository hosts a **single-file, zero-dependency digital business card** — designed to feel native, fast, and unmistakably premium. It's built to be tapped via an **NFC card**, scanned via QR, or shared as a plain link, and it works identically on **iPhone and Android**.

No app. No install. Just a tap — and the full profile opens instantly in the browser.

<br/>

## 📲 What's Inside

| Feature | Description |
|---|---|
| 👤 **Profile Photo** | Circular avatar, Apple-style framing |
| 📞 **Call** | One-tap dial via `tel:` link |
| 💬 **WhatsApp** | Direct chat launch via `wa.me` |
| 📧 **Email** | One-tap `mailto:` compose |
| 🌐 **Portfolio** | Link to personal/professional site |
| 📘 **Facebook** | Direct profile link |
| 🔗 **LinkedIn** | Direct profile link |
| 📥 **Save Contact** | Generates and downloads a real `.vcf` vCard — saves straight into Contacts on iOS & Android |
| 📱 **NFC Ready** | Designed to be the destination URL written onto any NFC tag/card |

<br/>

## 🎨 Design Philosophy

The design follows Apple's product-page language: generous white space, soft elevation shadows, rounded surfaces, and restrained motion.

- **Palette** — Pure white surface, near-black ink (`#1d1d1f`), iOS system blue accent (`#0a84ff`)
- **Typography** — San Francisco / system font stack for native rendering on every platform
- **Motion** — A single orchestrated entrance animation; no distracting effects
- **Layout** — Avatar → identity → quick actions → link list → save contact, mirroring how people actually scan a card top to bottom

<br/>

## 🚀 Deployment — GitHub Pages

This site is deployed as a static page via **GitHub Pages**, directly from this repository.

### Steps to deploy (or redeploy after edits)

1. Make sure the card file is named exactly **`index.html`** and sits in the repository root.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**.
5. Wait 1–2 minutes. GitHub will publish the site at:

   ```
   https://<your-username>.github.io/
   ```

   *(or `https://<your-username>.github.io/<repo-name>/` if the repo isn't named `<username>.github.io`)*

No build step, no framework, no `npm install` — it's plain HTML/CSS/JS, so GitHub Pages serves it as-is.

<br/>

## 📡 Setting Up the NFC Card

1. Get any writable **NFC tag/card** (NTAG213/215/216 — widely available, inexpensive).
2. Use an NFC-writing app:
   - **iPhone:** [NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
   - **Android:** [NFC Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc)
3. Open the app → **Write** → **Add a record** → **URL/URI**.
4. Enter your published link:

   ```
   https://<your-username>.github.io/
   ```

5. Write the tag, hold it near the card's surface, and confirm the write succeeded.
6. Test it: tap the card against the **back of an iPhone (top area)** or **back of an Android phone** with NFC enabled — the profile should open instantly in the browser.

> 💡 No app is required on the receiving end. NFC on both iOS and Android natively triggers a browser prompt when it reads a URL record.

<br/>

## 🛠 Updating Your Info

All content lives across three files — no build process, no config files.

| To change... | Edit this file → section |
|---|---|
| Name, title | `index.html` → `.name`, `.role` elements |
| Photo | `index.html` → replace the `.avatar` initials block with an `<img>` tag |
| Phone / WhatsApp / Email | `index.html` → `href` values on the `.pa-btn` links |
| Portfolio / Facebook / LinkedIn | `index.html` → `href` values inside `.links` |
| Colors, spacing, shadows | `style.css` → CSS variables at the top (`:root`) |
| vCard data | `script.js` → the `vcard` array |

After editing, commit the change — GitHub Pages redeploys automatically within a minute or two.

<br/>

## 🗂 Repository Structure

```
.
├── index.html      # Markup and content
├── style.css       # All visual styling
├── script.js       # vCard generation + save logic
└── README.md       # This file
```

<br/>

## 📄 License

Personal use. Feel free to fork and adapt the structure for your own digital card — just swap in your own information and assets.

<br/>

---

<div align="center">

**Najmaz Sakib** · Senior Engineer, Service Assurance
[Portfolio](http://sakib-opsgrid.io/portfolio/) · [LinkedIn](https://linkedin.com/in/najmaz-sakib) · [Facebook](http://facebook.com/nickson.music)

</div>
