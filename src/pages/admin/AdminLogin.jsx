import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export default function AdminLogin() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
      toast.success('Welcome back!');
    } catch (err) {
      toast.error(err.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0c14] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
            <span className="text-2xl font-franchise text-primary">A</span>
          </div>
          <h1 className="text-2xl font-clash font-semibold text-[#fcf2ec]">Portfolio CMS</h1>
          <p className="text-sm text-[#fcf2ec]/40 mt-1 font-hanken">Sign in to manage your projects</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#171621] border border-white/10 rounded-2xl p-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/50" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="admin@example.com"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#fcf2ec] text-sm font-hanken placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-clash uppercase tracking-widest text-[#fcf2ec]/50" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#fcf2ec] text-sm font-hanken placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/8 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-primary text-white font-clash font-semibold py-3 px-6 rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 text-sm tracking-wide"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-xs text-[#fcf2ec]/20 mt-6 font-hanken">
          Protected admin area — Ankit Sikder Portfolio
        </p>
      </div>
    </div>
  );
}
