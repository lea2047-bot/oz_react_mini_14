import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";

export default function NavBar() {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, 500);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (debouncedKeyword && debouncedKeyword.trim() !== "") {
      setSearchParams({ q: debouncedKeyword.trim() });
    } else {
      setSearchParams({});
    }
  }, [debouncedKeyword, setSearchParams]);

  return (
    <header className="w-full bg-gray-900 text-white shadow">
    <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-red-600">
          🎬 Mini Movies
        </Link>

        <input
         type="text"
         placeholder="영화 제목을 입력하세요..."
         value={keyword}
         onChange={(e) => setKeyword(e.target.value)}
         className=" w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-gray-200"
         />
          <nav className="ml-auto">
           <a
             href="https://developer.themoviedb.org/"
             target="_blank"
             rel="noreferrer"
            >
            TMDB API Docs
          </a>
        </nav>
      </div>
      </header>
  );
}