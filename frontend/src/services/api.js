// Read API key from Vite env
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function assertApiKey() {
  if (!API_KEY) {
    throw new Error("Missing TMDB API key. Set VITE_TMDB_API_KEY in frontend/.env");
  }
}

// Helper to fetch and check errors
async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Request failed: ${res.status} ${res.statusText} ${detail}`);
  }
  return res.json();
}

export const getPopularMovies = async () => {
  assertApiKey();
  const data = await fetchJson(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return data.results || [];
};

export const searchMovies = async (query) => {
  assertApiKey();
  const data = await fetchJson(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  return data.results || [];
};
