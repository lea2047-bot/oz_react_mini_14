import React from 'react'; 
import { useEffect, useState } from 'react';
import { fetchPopular } from '../api/tmdb';
import MovieCard from '../components/MovieCard.jsx';

export default function Home() {
  const [list, setList] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchPopular(1, 'ko-KR');
        setList(data);
      } catch (e) {
        setErr(String(e));
      }
    })();
  }, []);

  if (err) return <p style={{ color: 'tomato', padding: 24 }}>에러: {err}</p>;
  if (list.length === 0) return <p style={{ padding: 24 }}>로딩 중...</p>;

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
