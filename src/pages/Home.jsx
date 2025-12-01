  import React from 'react';
  import { useSearchParams } from 'react-router-dom';
  import { fetchPopular, fetchSearchMovies } from '../api/tmdb';
  import MovieCard from '../components/MovieCard.jsx';
  import useFetch from '../hooks/useFetch'; 
  
  export default function Home() {
    const [searchParams] = useSearchParams();
    const q = (searchParams.get('q') || '').trim();

    const { data: list, error: err, loading } = useFetch(
      () => (q ? fetchSearchMovies(q, 1, 'ko-KR') : fetchPopular(1, 'ko-KR')),
    );

    if (err)
  return (
    <p className="p-6 text-red-500">
      에러: {String(err)}
    </p>
  );

    if (loading)
  return <p className="p-6">로딩 중...</p>;
    return (
      <section>
        <h1 className="sr-only">
          {q ? `Search: ${q}` : 'Popular Movies'}
        </h1>

{list.length === 0 && q && (
  <p className="p-6">
    검색 결과가 없어요: <strong>{q}</strong>
  </p>
)}

        <div className="grid gap-[22px] grid-cols-[repeat(auto-fill,minmax(180px,1fr))]"> 
          {list.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
      </section>
    );
  }

