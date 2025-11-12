import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [keyword, setKeyword] = useState('');

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand text-red-600">
          🎬 Mini Movies
        </Link>

        <input
          type="text"
          className="search-input"
          placeholder="영화 제목을 입력하세요..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          />

        <nav className="nav-right">
          <a
            href="https://developer.themoviedb.org/"
            target="_blank"
            rel="noreferrer"
            className="baseurl"
          >
            TMDB API Docs
          </a>
        </nav>
      </div>
    </header>
  );
}


