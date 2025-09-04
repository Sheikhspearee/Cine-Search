# 🎬 Cine Search (Completed)

Cine Search is a React application I built to **learn React** by creating something fun and practical.  
The project explores real-world app features like **API integration**, **state management**, **routing**, and **local storage** while keeping the UI simple and responsive.  

I chose movies because everyone enjoys them, and TMDB provides a free, well-documented API that made experimenting enjoyable. Through this project, I practiced:

- Fetching and displaying data from an external API  
- Managing state across components and context  
- Using React Router for client-side navigation  
- Persisting data with `localStorage`  
- Building responsive layouts with plain CSS  

## ✨ Features

- **Popular Movies**: Automatically loads trending/popular titles  
- **Search**: Find movies by title using TMDB's database  
- **Favorites**: Add/remove favorites (stored in `localStorage`)  
- **Routing**: Navigate between Home and Favorites without reloads  
- **Responsive UI**: Clean, mobile-friendly layout  

## 🧰 Tech Stack

- **React** (v19) — main framework I'm learning  
- **Vite** (v7) — dev server and build system  
- **React Router** (v7) — client-side routing  
- **CSS** — lightweight styling  
- **ESLint** — code linting and consistency  

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 18+ (LTS recommended)  
- **TMDB API Key**: [Create one here](https://www.themoviedb.org/settings/api)  

### Installation

```bash
git clone <your-repo-url>
cd Cine-Search/frontend
npm install
```

### Environment Setup

Create `.env` in `frontend/` and add:

```env
VITE_TMDB_API_KEY=your_tmdb_key_or_token
```

### Run the App

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## 📦 Scripts

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

## 📁 Project Structure

```
frontend/
├─ src/
│  ├─ pages/          # Home + Favorites
│  ├─ components/     # NavBar, MovieCard, etc.
│  ├─ contexts/       # MovieContext for favorites
│  ├─ services/       # TMDB API calls
│  └─ css/            # Styles
└─ public/
```

## 🔌 API Usage

**Base**: `https://api.themoviedb.org/3`

**Endpoints used**:

- `GET /movie/popular`
- `GET /search/movie?query=<string>`

## 🌐 Deployment

1. **Build**: `npm run build`
2. **Deploy** the `dist/` folder to hosting (Netlify, Vercel, GitHub Pages, etc.)
3. **Configure** SPA fallback so `/favorites` works on refresh

## 📝 Why I Built This

This project is my React learning journey in action. It taught me:

- How to structure and organize a React project
- How to use props, state, and context effectively
- How to integrate third-party APIs
- How to add routing and persistence

Most importantly, it gave me confidence to start building more complex React projects.

## 🙌 Acknowledgements

- **TMDB** for movie data and images

