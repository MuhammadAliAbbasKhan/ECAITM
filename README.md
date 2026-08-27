# ECAITM® — Direct-to-Chip Two-Phase Liquid Cooling & AI Thermal Optimization

**ECAITM** is an enterprise-grade AI Thermal Optimization, Direct-to-Chip 2-Phase Liquid Cooling, and Virtual Power Plant (EV-VPP) Smart Grid Integration platform built for high-density AI data centers, HPC GPU clusters (NVIDIA H100/H200/GB200, AMD MI300X), and enterprise hyperscalers.

---

## 🌟 Key Features

- **Direct-to-Chip 2-Phase Dielectric Liquid Cooling Engine**: Sub-1.05 PUE thermal control, heat dissipation up to 100kW+ per rack.
- **Interactive 2D Telemetry & Dynamic CDU Heatmap Canvas**: Real-time monitoring of fluid temperatures, pressure, flow rate (LPM), and PUE efficiency.
- **Production REST API Backend (Django ORM + SQLite + MongoDB Cloud Atlas Sync)**:
  - Strict User Registration & Authentication (`POST /api/v1/auth/register/`, `POST /api/v1/auth/login/`).
  - Stripe Subscription Billing & Single Monthly Payment Protection (`POST /api/v1/checkout/subscribe/`).
  - Priority Onsite Engineer Dispatch & Paid Service Request Portal (`POST /api/v1/services/request/`).
  - Executive Telemetry & System Analytics Portal (`GET /api/v1/admin/analytics/`).
- **Fully Responsive Mobile UI (iOS & Android)**: Optimized for smartphones, tablets, and desktop workstations.

---

## 🛠️ Technology Stack

- **Frontend**: React (Vite), Lucide Icons, Canvas API, Glassmorphic CSS.
- **Backend**: Python 3.12, Django REST Framework.
- **Databases**: SQLite (relational ORM) + MongoDB Atlas (cloud document storage).

---

## 🚀 Quick Start & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/MuhammadAliAbbasKhan/ECAITM.git
cd ECAITM
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 3. Backend Setup
```bash
cd ../backend
pip install django djangorestframework django-cors-headers pymongo
python manage.py migrate
python manage.py runserver 8002
```

---

## 🔒 Security & Admin

- Executive Admin Passcode Header: `X-Admin-Passcode: aliabbas1234578!`
- Django Admin Portal: `http://127.0.0.1:8002/admin/`
