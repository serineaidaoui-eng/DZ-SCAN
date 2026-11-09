# DZ-SCAN

### Global Smart Product Intelligence Platform

**Scan. Understand. Compare. Discover.**

DZ-SCAN is a global product intelligence platform designed to help users discover, understand, analyze, and compare everyday products using barcode scanning and intelligent data processing.

## Project Vision

Make product information accessible, understandable, and transparent for everyone around the world.

## Main Features

- Barcode scanning and product lookup.
- Product information and ingredient analysis.
- Multilingual product information.
- AI-powered ingredient explanations.
- Product comparison.
- Allergy information and alerts based on declared ingredients.
- User accounts and scan history.
- Favorites and personalized product lists.
- Product information reporting.

*Features are planned and will be implemented progressively.*

## Supported Product Categories

- Food and beverages.
- Cosmetics and skincare.
- Personal care products.
- Household products.

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript |
| Build Tool | Vite |
| Styling | CSS |
| Backend | Python, FastAPI |
| Database | PostgreSQL (planned) |
| AI Integration | LLM API (planned) |
| Version Control | Git, GitHub |

## Project Structure

```text
DZ-SCAN/
├── frontend/
│   ├── public/
│   └── src/
│       ├── services/
│       ├── App.tsx
│       └── App.css
│
├── backend/
│   ├── venv/
│   ├── main.py
│   └── requirements.txt
│
├── docs/
├── .gitignore
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
cd DZ-SCAN
```

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Start the Backend

Open another terminal:

```bash
cd backend
python -m venv venv
```

Activate the environment on Windows:

```powershell
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the API:

```bash
python -m uvicorn main:app --reload --port 8000
```

## API Documentation

FastAPI provides interactive API documentation at:

```text
http://127.0.0.1:8000/docs
```

## Project Status

**Current Stage:** Foundation completed, initial frontend-backend integration working.

## Developer

**SERINEX**

Full-Stack Development | Computer Science | Software Engineering

## License

To be determined before public release.