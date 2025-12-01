import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';

export default function Layout() {
  return (
  <div className="min-h-full flex flex-col">
    <NavBar />
    <main className=" mx-auto w-[min(1200px,92vw)] mt-7 mb-20">
      <Outlet />
    </main>
  </div>
);

}
