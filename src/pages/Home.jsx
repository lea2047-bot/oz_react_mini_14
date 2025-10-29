import { useEffect, useState } from 'react';
import { fetchPopular } from '../api/tmdb';
import MovieCard from '../components/MovieCard'; // 이거 꼭 있어야 영화 카드 보임

export default function Home() {
  const [list, setList] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchPopular(1, 'ko-KR');
        setList(data); // 성인물 필터는 tmdb.js 안에서 처리됨
      } catch (e) {
        setErr(String(e));
      }
    })();
  }, []);

  if (err) return <p style={{ color: 'tomato', padding: 24 }}>에러: {err}</p>;
  if (list.length === 0) return <p style={{ padding: 24 }}>로딩 중...</p>;

  return (
    <section>
      <h1 className="visually-hidden">Movies</h1>
      <div className="grid">
        {list.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  );
}
