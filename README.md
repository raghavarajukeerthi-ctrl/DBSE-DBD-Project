# GoVeya — Multi-Modal Indian Travel Booking Platform

GoVeya is a modern travel booking web app for buses, trains, and flights across India. Built with React, Vite, and Tailwind CSS.

---

## Features

### Booking Flow
- **Search** — Search buses, trains, or flights between 20 Indian cities with filters (price, stops, departure time) and sorting (cheapest, fastest, best rated)
- **Seat Selection** — Interactive seat maps with dynamic occupied/available seats:
  - Bus: 2+2 seating layout
  - Train: Coach sections with berth labels (LB, MB, UB, SLB, SUB)
  - Flight: Business class + Economy with A–F columns
- **Passenger Details** — Collect full details for every passenger (name, age, gender, phone, email)
- **Payment** — Three payment methods:
  - UPI (enter UPI ID or scan a real QR — auto-pays silently after 30 seconds)
  - Net Banking (8 major Indian banks)
  - Credit / Debit Card (live card preview with formatting)
- **Ticket** — Downloadable ticket with all passenger details, booking summary, and a real scannable QR code

### Smart Journey
- Multi-modal route combinations (bus + train, train + flight, etc.)
- Risk assessment and time/cost comparisons

### User Dashboard
- Booking history with status tracking
- Upcoming trips and past journeys

### Admin Dashboard
- **Overview** — Booking stats, monthly revenue chart, transport split (pie chart), popular routes
- **Payment Management** — Searchable payment records with status badges
- **Booking Management** — Full booking table with filters
- **Transport Management** — Add/edit/delete buses, trains, and flights

---

## Admin Access

Navigate to **Login → Admin Login** or go directly to `/admin/login`.

| Email | Password |
|-------|----------|
| jaswanthtetala@gmail.com | JK@1605 |
| keerthivarma1608@gmail.com | JK@1605 |

---

## Sample Data

| Transport | Count |
|-----------|-------|
| Buses | 50 |
| Trains | 50 |
| Flights | 100 |

Operators include IntrCity SmartBus, VRL Travels, KSRTC, MSRTC, Rajdhani Express, Vande Bharat, IndiGo, Air India, SpiceJet, and more.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Language | TypeScript 5.7 |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| Charts | Recharts |
| Icons | Lucide React |
| QR Codes | qrcode.react |

---

## Project Structure

```
src/
├── App.tsx                  # Root — splash → gate → app stages
├── index.css                # Global styles, Tailwind, CSS tokens
├── data/
│   └── index.ts             # All sample data (buses, trains, flights)
├── components/
│   ├── SplashScreen.tsx     # Cinematic intro animation
│   ├── LandingGate.tsx      # Start Booking gate page
│   ├── Header.tsx           # Top navigation bar
│   └── SearchPanel.tsx      # Reusable search form
└── pages/
    ├── Home.tsx             # Mode selection (Bus/Train/Flight/Smart)
    ├── SearchResults.tsx    # Filtered & sorted results list
    ├── SeatSelection.tsx    # Interactive seat map
    ├── PassengerDetails.tsx # Per-passenger form
    ├── Payment.tsx          # UPI / Net Banking / Card
    ├── Ticket.tsx           # Booking confirmation + QR
    ├── SmartJourney.tsx     # Multi-modal journey planner
    ├── Dashboard.tsx        # User booking history
    ├── Login.tsx            # User login + admin login link
    ├── Signup.tsx           # New user registration
    └── admin/
        ├── AdminLogin.tsx   # Admin authentication
        └── AdminDashboard.tsx # Full admin control panel
```

---

## App Flow

```
Splash Animation → Landing Gate → Home
                                    ├── Bus / Train / Flight
                                    │     └── Search Results
                                    │           └── Seat Selection
                                    │                 └── Passenger Details
                                    │                       └── Payment
                                    │                             └── Ticket
                                    └── Smart Journey
```

---

## Development

The Vite dev server runs automatically. Changes to source files are reflected instantly via hot reload.

```bash
pnpm dev       # Start dev server
pnpm build     # Production build
pnpm preview   # Preview production build
```
