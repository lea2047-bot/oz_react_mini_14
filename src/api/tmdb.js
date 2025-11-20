const BASE = 'https://api.themoviedb.org/3';
const IMG = 'https://image.tmdb.org/t/p';

const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
};

async function callTMDB(endpoint, params = {}) {
  const url = new URL(`${BASE}${endpoint}`);
export async function fetchPopular(page = 1, lang = 'ko-KR') {
  const url = `${BASE}/movie/popular?language=${lang}&page=${page}`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`TMDB 요청 실패: ${res.status}`);
  const data = await res.json();
  return (data.results ?? []).filter((m) => m?.adult === false);
}

export async function fetchMovieDetail(id, lang = 'ko-KR') {
  const url = `${BASE}/movie/${id}?language=${lang}`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`TMDB 상세 요청 실패: ${res.status}`);
  return await res.json();
}

export async function fetchSearchMovies(query, page = 1, lang = 'ko-KR') {
  if (!query || query.trim() === '') return [];
  const url = `${BASE}/search/movie?query=${encodeURIComponent(query)}&language=${lang}&page=${page}&include_adult=false`;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`TMDB 검색 요청 실패: ${res.status}`);
  const data = await res.json();
  return data.results ?? []; 
}

export function imgUrl(path, size = 'w500') {
  if (!path) return '';
  return `${IMG}/${size}${path}`;
}
