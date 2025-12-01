import React from 'react';
import movieListData from '../movieListData.json';
import MovieCard from './components/MovieCard.jsx';

export default function App() {
  const list = fetchPopular(); [];

  return (
    <section>
      <h1 className="sr-only">Movies</h1>
      <div className="grid gap-[22px] grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
        {list.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </section>
  );
}
