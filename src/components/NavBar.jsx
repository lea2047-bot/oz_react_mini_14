import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand">🎬 Mini Movies</Link>
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
