import React from 'react'; 
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetail, imgUrl } from '../api/tmdb';
import useFetch from '../hooks/useFetch';

export default function MovieDetail() {
  const { id } = useParams();
  const { data, error: err, loading } = useFetch(
    () => fetchMovieDetail(id, 'ko-KR'),
    [id]
  );

  if (err) return <p style={{ color: 'tomato' }}>에러: {err}</p>;
  if (!data) return <p>로딩 중...</p>;

  return (
    <section className="flex gap-6">
  <div>
    <img
      src={imgUrl(data.poster_path, 'w500')}
      alt={data.title}
      className="w-[300px] rounded-lg shadow-lg object-cover"
          />
         : (
          <div className="detail-poster placeholder">No Poster</div>
        )
      </div>

      <div className="detail-right">
        <div className="detail-top">
          <h1 className="detail-title">{data.title}</h1>
          <div className="detail-score">
            <span className="star">★</span>{data.vote_average}
          </div>
        </div>

        <div className="detail-genres">
          {data.genres?.map(g => g.name).join(' · ') || '장르 정보 없음'}
        </div>

        <div className="detail-overview">{data.overview || '줄거리 정보 없음'}</div>

        <Link to="/" className="btn-back" style={{ marginTop: 20, display: 'inline-block', color: '#ccc' }}>
          ← 돌아가기
        </Link>
      </div>
    </section>
  );
}

