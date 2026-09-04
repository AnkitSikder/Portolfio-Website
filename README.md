# Ankit Sikder Portfolio

Personal portfolio website for Ankit Sikder — Interaction Designer, Spatial Designer & Creative Technologist.

Built with React + Vite + Supabase CMS.

## Tech Stack
- React 18 + React Router v7
- Vite 8
- Tailwind CSS v3
- Framer Motion (motion)
- GSAP ScrollTrigger
- Lenis smooth scroll
- Spline 3D scenes
- Supabase (CMS + Auth)

## Local Development

1. Clone the repository
2. Create `.env.local` with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Build for Production

```bash
npm run build
```

Output is placed in the `dist/` folder.

## Deployment (Vercel)

1. Push to GitHub.
2. Import the repository on [Vercel](https://vercel.com).
3. Add the following environment variables in Vercel's project settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Vercel will auto-detect Vite and deploy. The included `vercel.json` handles SPA routing.

## Admin CMS

The admin dashboard is available at `/admin` (password protected via Supabase Auth).
Use the admin panel to show/hide projects, update content, and manage media.
