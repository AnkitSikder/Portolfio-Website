import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout() {
  // Toggle admin-mode on <body> so the global `cursor: none` CSS is overridden
  useEffect(() => {
    document.body.classList.add('admin-mode');
    return () => {
      document.body.classList.remove('admin-mode');
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#111019] flex">
      <AdminSidebar />
      <main className="flex-1 ml-60 min-h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
