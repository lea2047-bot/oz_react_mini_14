import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchMovieDetail, imgUrl } from '../api/tmdb';

export default function MovieDetail() {
  const { id } = useParams();
  const { data, error: err } = useFetch(
    () => fetchMovieDetail(id, 'ko-KR'),
    [id]
  );

  if (err)
  return <p className="text-red-400">에러: {String(err)}</p>;
  if (!data) return <p>로딩 중...</p>;

  return (
    <section className="flex gap-10 mt-6">
      <div>
        {data.poster_path ? (
          <img
            src={imgUrl(data.poster_path, 'w500')}
            alt={data.title}
            className="w-[300px] rounded-lg shadow-lg object-cover"
          />
        ) : (
          <div className="w-[300px] h-[450px] rounded-lg bg-gray-700 flex items-center justify-center">
            No Poster
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between">
          <h1 className="text-[28px] font-bold leading-tight">{data.title}</h1>

          <div className="flex items-center gap-2 text-yellow-400 font-extrabold">
            <span className="text-base relative">★</span>
            <span>{data.vote_average}</span>
          </div>
        </div>

        <div className="px-4 py-3 rounded-xl leading-relaxed min-h-[150px] bg-(--panel-2) text-[#d7dbe3]">

          {data.genres?.map((g) => g.name).join(" · ") || "장르 정보 없음"}
        </div>

        <div className="px-4 py-3 rounded-xl leading-relaxed min-h-[150px]"style={{ background: "var(--panel-2)", color: "#d7dbe3" }}>

          {data.overview || "줄거리 정보 없음"}
        </div>

        <Link
          to="/"
          className="mt-3 inline-block text-[#ccc]"
        >
          ← 돌아가기
        </Link>
      </div>
    </section>
  );
}
