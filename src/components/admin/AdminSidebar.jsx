import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutGrid, FolderOpen, Image, LogOut, ExternalLink } from 'lucide-react';
import toast from 'react-hot-toast';

const navItems = [
  { to: '/admin', label: 'Dashboard', icon: LayoutGrid, end: true },
  { to: '/admin/projects', label: 'Projects', icon: FolderOpen },
  { to: '/admin/media', label: 'Media', icon: Image },
];

export default function AdminSidebar() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out');
    navigate('/');
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-[#0d0c14] border-r border-white/5 flex flex-col z-50 shrink-0">
      {/* Logo */}
      <div className="px-6 pt-7 pb-8 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <span className="text-sm font-franchise text-primary leading-none">A</span>
          </div>
          <div>
            <p className="text-[#fcf2ec] font-clash font-semibold text-sm leading-none">Portfolio CMS</p>
            <p className="text-[#fcf2ec]/30 font-hanken text-xs mt-0.5 truncate">{user?.email}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 flex flex-col gap-1">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-clash transition-all duration-150 ${
                isActive
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'text-[#fcf2ec]/50 hover:text-[#fcf2ec] hover:bg-white/5'
              }`
            }
          >
            <Icon className="w-4 h-4 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="px-3 pb-6 flex flex-col gap-1 border-t border-white/5 pt-4">
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-clash text-[#fcf2ec]/50 hover:text-[#fcf2ec] hover:bg-white/5 transition-all duration-150"
        >
          <ExternalLink className="w-4 h-4 shrink-0" />
          View Portfolio
        </a>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-clash text-[#fcf2ec]/50 hover:text-red-400 hover:bg-red-400/5 transition-all duration-150 w-full text-left"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
