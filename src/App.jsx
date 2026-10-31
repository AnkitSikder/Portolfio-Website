import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';

// Public layout + pages
import Layout from './components/layout/Layout';
import Home from './pages/Home';

// Case studies are split into their own chunks so the home page ships less JS.
// They are prefetched once the browser is idle, so navigation stays instant.
const loadAuraCharge = () => import('./pages/projects/AuraCharge');
const loadImmersiveTraffic = () => import('./pages/projects/ImmersiveTraffic');
const loadMakhana = () => import('./pages/projects/MakhanaProject');
const loadJioBP = () => import('./pages/projects/JioBPProject');
const AuraCharge = lazy(loadAuraCharge);
const ImmersiveTraffic = lazy(loadImmersiveTraffic);
const MakhanaProject = lazy(loadMakhana);
const JioBPProject = lazy(loadJioBP);
const PortfolioPDF = lazy(() => import('./pages/PortfolioPDF'));

if (typeof window !== 'undefined') {
  const prefetch = () => [loadAuraCharge, loadImmersiveTraffic, loadMakhana, loadJioBP].forEach(load => load());
  window.addEventListener('load', () => {
    if ('requestIdleCallback' in window) window.requestIdleCallback(prefetch, { timeout: 5000 });
    else setTimeout(prefetch, 3000);
  }, { once: true });
}

// Admin (lazy loaded so it never ships to public visitors unless they visit /admin)
import ProtectedRoute from './components/admin/ProtectedRoute';
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));

function AdminFallback() {
  return (
    <div className="min-h-screen bg-[#0d0c14] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-orange-500/30 border-t-orange-500 rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1c1b2a',
            color: '#fcf2ec',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            fontFamily: '"Clash Display", sans-serif',
            fontSize: '14px',
          },
          success: { iconTheme: { primary: '#ff5f1f', secondary: '#fff' } },
        }}
      />

      <Routes>
        {/* ── Public Portfolio ── */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work/auracharge" element={<AuraCharge />} />
          <Route path="work/vrtraffic" element={<ImmersiveTraffic />} />
          <Route path="work/makhana-tool" element={<MakhanaProject />} />
          <Route path="work/jio-bp" element={<JioBPProject />} />
        </Route>

        <Route path="/pdf" element={<Suspense fallback={null}><PortfolioPDF /></Suspense>} />

        {/* ── Admin CMS (lazy + protected) ── */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Suspense fallback={<AdminFallback />}>
                <AdminLayout />
              </Suspense>
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="projects" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

