import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetail, imgUrl } from '../api/tmdb';

export default function MovieDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const d = await fetchMovieDetail(id, 'ko-KR');
        setData(d);
      } catch (e) {
        setErr(String(e));
      }
    })();
  }, [id]);

  if (err) return <p style={{color:'tomato'}}>에러: {err}</p>;
  if (!data) return <p>로딩중…</p>;

  return (
    <>
      <Link to="..">← 뒤로</Link>
      <img src={imgUrl(data.poster_path, 'w780')} alt={data.title}/>
      {/* 제목/개요/장르/평점/개봉일/러닝타임 표시 */}
    </>
  );
}

