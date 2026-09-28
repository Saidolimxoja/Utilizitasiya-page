# EKO-PARTNER — Environmental Waste Management & Recycling SPA

> **Production-Ready Single Page Application (SPA)** for "EKO-PARTNER", a licensed environmental waste management, recycling, and hazardous disposal enterprise based in Tashkent, Uzbekistan.

---

## 🚀 Key Architectural Highlights

- **100% Serverless Architecture**: Strictly **NO backend server** (no Node.js/Express, Django, PHP servers required to host or maintain).
- **Direct Webhook Submission**: Lead form and interactive waste calculator submissions are sent directly from the client browser to a **Google Apps Script Web App**.
- **Automated Data Persistence**: Every submission is appended instantly into a **Google Sheets** database table.
- **Instant Telegram Bot Dispatch**: Real-time rich HTML notifications sent straight to your managers or Telegram channel/group via the **Telegram Bot API**.
- **Antigravity / Floating UI System**:
  - Island glassmorphic floating navbar hovering with backdrop blur
  - Continuous gentle levitation on trust badges and floating elements (`framer-motion`)
  - 3D hover depth on service cards
  - Deep soft olive/emerald ambient box-shadows
- **Multilingual Support (UZ / RU / EN)**:
  - Uzbek (B2B terminology: Didox, I-IV xavflilik toifalari, ekonazorat)
  - Russian (SanPiN, лицензии, опасные грузы ADR)
  - English (Full compliance & international corporate standards)
  - Persistent state via `localStorage`

---

## 🛠 Tech Stack

- **Framework**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS with custom eco tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti

---

## 📋 Quick Setup & Deployment Guide

### 1. Telegram Bot Setup (via @BotFather)

1. Open Telegram and search for [@BotFather](https://t.me/BotFather).
2. Send `/newbot`.
3. Enter a display name (e.g. `Eko-Partner Dispatch Bot`).
4. Enter a username ending in `bot` (e.g. `EkoPartnerDispatchBot`).
5. Copy the **HTTP API Bot Token** provided (looks like `7123456789:AAHq_AbcDefGhIjKlMnOpQrStUvWxYz`).

### 2. Obtain Your Telegram Chat ID

#### For Personal Notifications:
1. Search for [@userinfobot](https://t.me/userinfobot) in Telegram and press `/start`.
2. Copy your numerical **Id** (e.g., `123456789`).

#### For Team Group / Channel Notifications:
1. Create a Telegram Group (e.g., "EKO-PARTNER • Yangi Arizalar").
2. Add your new bot to the group as an **Administrator**.
3. Add [@RawDataBot](https://t.me/RawDataBot) to the group to inspect the group's chat ID (it usually starts with a minus sign, e.g., `-1001987654321`).
4. Once you have the Chat ID, you can remove `@RawDataBot`.

---

### 3. Deploy Google Apps Script Web App

1. Open [Google Sheets](https://sheets.new) to create a new spreadsheet (e.g. name it `EKO-PARTNER • Leads 2026`).
2. In the top menu, go to **Extensions (Расширения)** > **Apps Script**.
3. Delete any default code in `Code.gs` and paste the entire contents of [`google-apps-script.js`](./google-apps-script.js).
4. Update lines 16–17 in `google-apps-script.js` with your credentials:
   ```javascript
   TELEGRAM_BOT_TOKEN: "YOUR_TELEGRAM_BOT_TOKEN",
   TELEGRAM_CHAT_ID: "YOUR_TELEGRAM_CHAT_ID",
   ```
5. Click **Save** (💾 icon).
6. Test your bot connection: In the Apps Script toolbar function dropdown, select `testTelegramAlert` and click **Run**. Check your Telegram to verify you received the test lead alert!
7. Deploy the Web App:
   - Click the blue **Deploy** button (top right) > **New deployment**.
   - Click the gear icon (⚙️) next to "Select type" and choose **Web app**.
   - Configure:
     - **Description**: `Eko-Partner Lead Webhook v1`
     - **Execute as**: `Me (your_email@gmail.com)`
     - **Who has access**: `Anyone` *(Crucial: Allows the website form to submit without user login)*
   - Click **Deploy**.
   - Copy the generated **Web App URL** (looks like `https://script.google.com/macros/s/AKfycbx.../exec`).

---

### 4. Connect Webhook to Frontend

1. Open `.env` in the project root:
   ```bash
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbx.../exec
   ```
2. *(Note: If `VITE_GOOGLE_SCRIPT_URL` is empty, the app runs in **Demo Simulation Mode**, providing full feedback, modals, and confetti for testing).*

---

### 5. Run the Project Locally

```bash
# Install dependencies
npm install

# Start Vite local development server
npm run dev
```

Open your browser at `http://localhost:5173`.

---

### 6. Build for Production

```bash
# Type check and build optimized static assets
npm run build

# Preview production build locally
npm run preview
```

The resulting `dist/` folder can be uploaded to **Cloudflare Pages, Vercel, Netlify, GitHub Pages, or any static web hosting** with zero backend configuration needed.

---

## 📁 Project Structure

```
├── google-apps-script.js      # Complete Apps Script Webhook with Telegram dispatcher
├── index.html                 # HTML entry with Plus Jakarta Sans & Uzbek meta
├── tailwind.config.js         # Eco brand palette & levitation shadows
├── src/
│   ├── main.tsx               # Application mount point
│   ├── App.tsx                # Master Single Page Application layout
│   ├── index.css              # Custom glassmorphism, scrollbars, and Tailwind directives
│   ├── translations.ts        # Comprehensive UZ, RU, EN B2B dictionary
│   ├── context/
│   │   └── LanguageContext.tsx# Language provider with localStorage sync
│   ├── services/
│   │   └── api.ts             # Direct Google Apps Script submitLeadForm()
│   └── components/
│       ├── Navbar.tsx         # Floating island glassmorphic header + Lang switcher
│       ├── Hero.tsx           # Antigravity entrance + Continuous levitating badges
│       ├── ServicesBento.tsx  # 5-Tile Bento Grid (Medical, Industrial, Chemistry, etc.)
│       ├── CalculatorModal.tsx# 3-Step Interactive Waste Pricing Quiz + Sliders
│       ├── ProcessFlow.tsx    # 4-Step Process: Audit -> Contract -> Transport -> Didox
│       ├── Licenses.tsx       # Watermarked certificate lightbox with zoom modal
│       ├── LeadForm.tsx       # High-converting form with honeypot & phone mask
│       └── Footer.tsx         # Floating footer with Tashkent contact & 2026 copyright
```

---

## 🛡️ Security & Spam Protection

1. **Honeypot Anti-Spam Field**: A hidden input traps bots automatically without interrupting human users with annoying CAPTCHAs.
2. **Concurrent Request Lock**: `LockService.getScriptLock()` prevents race conditions when writing to Google Sheets.
3. **No-CORS Mode**: Ensures the client never gets blocked by preflight CORS checks on Google Apps Script 302 redirects.
4. **Watermarked Licenses**: Visual anti-counterfeiting badges protect company credentials against unauthorized replication.

---

© 2026 EKO-PARTNER LLC. Tashkent, Uzbekistan.
