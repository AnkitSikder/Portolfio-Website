import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import AdminLogin from '../../pages/admin/AdminLogin';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d0c14] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          <span className="text-sm text-[#fcf2ec]/40 font-clash tracking-wider">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AdminLogin />;
  }

  return children;
}
