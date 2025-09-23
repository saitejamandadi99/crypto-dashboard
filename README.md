# Crypto Dashboard

A production-like, responsive cryptocurrency dashboard inspired by [CoinGecko](https://www.coingecko.com). This app fetches live market data from the CoinGecko API and provides a rich, interactive experience featuring all-coins overview, highlights, sorting/filtering, pagination, and robust error/loading states.

## 🚀 Live Demo

[[Hosted Link](https://crypto-dashboard-frontend-alpha.vercel.app/)](#)

---

## 📝 Features

- **All Coins View:**
  - Fetches and displays live data for all coins (rank, name, symbol, price, 24h change, market cap, volume).
  - Pagination for efficient navigation.
  - Search by name or symbol.
  - Sort by price, 24h change, market cap, or volume.

- **Highlights Section:**
  - Top Gainers (24h)
  - Top Losers (24h)
  - Trending Coins
  - Easily extensible for custom highlights.

- **Resilient UX:**
  - Loading skeletons and spinners.
  - Retry on failure with user-friendly error messages.
  - Empty state messaging for no results.

- **API/Data Handling:**
  - Efficient data fetching with pagination and debounced search.
  - Client-side filtering and sorting for responsiveness.
  - Environment-driven configuration.
  - Basic in-memory caching.
  - Rate-limit awareness and error handling.

---

## 🏗️ Tech Stack & Architecture

- **Framework:** [Next.js](https://nextjs.org/) (React-based)
- **Styling:** *(Specify if using Tailwind, Bootstrap, ShadCn, etc. or plain CSS)*
- **API:** [CoinGecko V3 API](https://www.coingecko.com/api/documentations/v3)
- **State Management:** React state/hooks
- **Structure:**
  ```
  src/
    app/          # Pages & routes
    components/   # UI components
    services/     # API and utility services
  .env.example    # Example environment variables
  ```
- **Linting/Formatting:** ESLint, Prettier


## ⚡ Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/saitejamandadi99/crypto-dashboard.git
cd crypto-dashboard
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

- Copy `.env.example` to `.env.local`:
  ```bash
  cp .env.example .env.local
  ```
- Add your [CoinGecko API key](https://docs.coingecko.com/docs/setting-up-your-api-key) if required:
  ```
  COINGECKO_API_KEY=your_api_key_here
  COINGECKO_API_URL=https://api.coingecko.com/api/v3
  ```
  > **Never commit your real API key!**

### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the dashboard.

### 5. Build for Production
```bash
npm run build
npm start
```

---

## 🔍 API Endpoints Used

- `/coins/markets` (market data, pagination, sorting)
- `/search/trending` (trending coins)
- `/coins/{id}` (coin details)

Full API docs: [CoinGecko V3](https://www.coingecko.com/api/documentations/v3)

---


## 🔒 Assumptions & Limitations

- Uses client-side filtering/sorting for per-page data.
- CoinGecko API key/config is required for some endpoints; instructions provided.
- Caching is basic (in-memory); not persisted across reloads.
- No persistent user auth/session (public dashboard only).
- Intended as a demo; not for production trading or financial advice.

---

## 🚧 Future Improvements

- Add real-time updates via websockets.
- Improve accessibility (a11y) and keyboard navigation.
- Add advanced filtering and custom highlight sections.
- Introduce persistent caching (e.g., IndexedDB/localStorage).
- Harden error boundaries, logging, and monitoring for production.
- Modularize further for multi-page scale.

---

## 🛡️ Security

- No API keys committed; use `.env.local` for secrets.
- All API errors are handled gracefully.

---

## 📝 License

MIT License. See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

- [CoinGecko](https://www.coingecko.com) for API and inspiration.
