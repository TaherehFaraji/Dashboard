import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}