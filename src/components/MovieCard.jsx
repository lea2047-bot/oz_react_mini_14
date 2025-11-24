import React from 'react';
import { useNavigate } from 'react-router-dom';

const IMG_BASE = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { id, title, poster_path, vote_average } = movie;

   return (
    <div
  role="button"
  onClick={() => navigate(`/details/${id}`)}
  title={`${title} 상세보기`}
  className="bg-black rounded-lg shadow"
>
  <div className="w-full aspect-[2/3] bg-gray-200">
    {poster_path ? (
     <img
    src={`${IMG_BASE}${poster_path}`}
    alt={title}
    className="w-full h-full object-cover"
  />
    ) : (
      <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
        No Image
      </div>
    )}
  </div>

  <div className="p-3">
    <div
      className="text-sm font-semibold truncate"
      title={title}
    >
      {title}
    </div>
    <div className="flex items-center gap-1 text-sm">
      <span className="text-yellow-500">★</span>
      <span>{Number(vote_average || 0).toFixed(3)}</span>
    </div>
  </div>
</div>

  );
}