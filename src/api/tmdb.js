import axios from "axios";
const BASE = 'https://api.themoviedb.org/3';
const IMG = 'https://image.tmdb.org/t/p';

const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
};

const tmdb = axios.create({
  baseURL: BASE,
  headers,
 });

async function callTMDB(endpoint, params = {}) {
  const res = await tmdb.get(endpoint, { params });
  return res.data;
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
