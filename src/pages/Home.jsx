import React from 'react';
import { fetchPopular } from '../api/tmdb';
import MovieCard from '../components/MovieCard.jsx';
import useFetch from '../hooks/useFetch';

export default function Home() {
  const { data: list, error: err, loading } = useFetch(
    () => fetchPopular(1, 'ko-KR'),
    [] 
  );

  if (err) return <p style={{ color: 'tomato', padding: 24 }}>에러: {err}</p>;
  if (loading) return <p style={{ padding: 24 }}>로딩 중...</p>;

  return (
    <section>
      <h1 className="visually-hidden">Popular Movies</h1>
      <div className="grid">
        {list.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  );
}

