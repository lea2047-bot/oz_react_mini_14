import axios from "axios";
const BASE = 'https://api.themoviedb.org/3';
const IMG = 'https://image.tmdb.org/t/p';

const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
};

async function callTMDB(endpoint, params = {}) {
  const url = new URL(`${BASE}${endpoint}`);
  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.set(key, value)
  );

  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`TMDB 요청 실패: ${res.status}`);
  return res.json();
}

export async function fetchPopular(page = 1, lang = 'ko-KR') {
  const data = await callTMDB('/movie/popular', { language: lang, page });
  return (data.results).filter((m) => m?.adult === false);
}

export async function fetchMovieDetail(id, lang = 'ko-KR') {
  return callTMDB(`/movie/${id}`, { language: lang });
}

export async function fetchSearchMovies(query, page = 1, lang = 'ko-KR') {
  if (!query || query.trim() === '') return [];
  const data = await callTMDB('/search/movie', {
    query: query.trim(),
    language: lang,
    page,
    include_adult: 'false',
  });
  return data.results ;
}

export function imgUrl(path, size = 'w500') {
  if (!path) return '';
  return `${IMG}/${size}${path}`;
}
