# Master AI Prompt & System Specifications (ECAITM Project Specification)

## 📌 Architectural, Security, UI, Mobile & Payment Mandates

### 1. Mobile Responsiveness (Android & iOS Devices)
- **Fluid Breakpoints & Column Stacking**: Layout grids, product cards, pricing tiers, and contact forms MUST stack vertically in 1 column (`grid-cols-1`) on mobile viewports (< 768px).
- **Mobile Header Drawer**: On mobile screens (< 1024px), header text links collapse into a hamburger menu button (`☰`) that opens a touch-friendly navigation drawer.
- **Zero Horizontal Scroll**: Body and root containers MUST use `overflow-x: hidden` with fluid image scaling (`max-width: 100%`) to guarantee zero horizontal scroll.

### 2. Page Backgrounds & Unique Theme Palette
- **NO FORCED GLOBAL DARK THEMES**: Never force a uniform dark blue (`#050e1a`) or black background across all pages.
- **Page-Specific Light Themes**: Every page must define its own clean light background palette (`bg-white`, `#ffffff`, `#f8f9fa`, `#f5f0eb`) with high-contrast text and tailored brand section cards.

### 3. Compact Single-Line Header Headings
- **Single-Line Text Constraint**: Header brand logos, titles, and top navigation text headings MUST remain on a single horizontal line (`white-space: nowrap`) and MUST NEVER wrap or take two lines on any desktop or tablet viewport.
- **Top Utility Bar & Live Badges**: Include location selector, quick search trigger, and live user authentication badges (`👤 Username (PAID)` or `👤 Username (Free)`) with `Sign In`, `Sign Up`, and `Logout` controls.

### 4. Page Code Depth & Detail (700-800 Lines Guideline)
- **Deep Implementation**: Header pages, subpages, and components must be comprehensive and detailed (~700-800 lines of rich code per file) featuring interactive accordions, hero carousels, spot-light cards, pricing tiers, and R&D showcase modules.
- **Consistent Brand Identity**: Website brand name, domain, corporate email (e.g. `ali@seedscorpprot.com`), and global HQ addresses must be used consistently across all footers, forms, headers, and meta titles.

### 5. Popup Modal Windows (Explicit Close Crosses & Boundary Containment)
- **Top-Right Close Crosses (`✕`)**: ALL popup modal screens (e.g. AuthModal, SearchModal, Stripe Checkout Modal, Dialogs) MUST feature an explicit close cross button (`✕`) in the top-right corner with hover transitions.
- **Viewport Containment**: Popup modal windows MUST NEVER overflow or extend outside the viewport (`max-width: 90vw`, `max-height: 90vh`, `overflow-y: auto`, `box-sizing: border-box`, `position: relative`).

### 6. End-to-End Stripe Payment Backend Architecture
- **API Endpoints**:
  - `/api/v1/stripe/create-payment-intent/`: Generates Stripe client secrets (`pi_stripe_scp_<timestamp>_secret_<timestamp>`).
  - `/api/v1/subscribe/`: Validates card details, records `SubscriptionOrder`, and updates `UserAccount` (`is_paid = True`, `active_plan`, `paid_until = 30 days from now`).
- **Subscription Pricing Tiers**:
  - **Tier 1 (Starter)**: **$100 / month**
  - **Tier 2 (Enterprise)**: **$200 / month**
  - **Tier 3 (Global / Hyperscaler)**: **$300 / month**
- **Dual Database Persistence**:
  - Real-time transactions stored in SQLite ORM (`db.sqlite3`).
  - Asynchronous Cloud MongoDB Atlas replication helper (`api/db_mongo.py`).
  - Audit trail logging in `AuditLog` table (`SUBSCRIPTION_PURCHASED`, `USER_REGISTRATION`, `SERVICE_DISPATCH_REQUESTED`).

### 7. Strict Authentication & Protected Routes
- **Registration Mandate**: Visitors MUST register/sign up before purchasing subscription plans or requesting paid field services.
- **Protected Features**: Premium tools (EPA Safety Data Sheet SDS Exporter, Seed Genetics Trait Importer, Priority Agronomist Field Dispatch) are locked behind `is_paid === true`.
- **Security Banners**: Unauthenticated or non-paid visitors attempting to access protected routes are presented with an upgrade prompt banner.

### 8. Executive Control Room Security
- **Obfuscated Passcodes**: Passcodes or admin secrets MUST NEVER be displayed in placeholders, hints, or UI text.
- **Secure Inputs**: Admin inputs MUST use `type="password"` with generic placeholder: `placeholder="Enter Administrator Passcode..."`.
- **Server Verification**: Admin endpoints validate the `X-Admin-Passcode` request header server-side.
