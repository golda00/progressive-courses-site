# Progressive Courses Site (Demo ZIP v3)

This package contains a ready-to-run Vite + React demo with 10 user-provided course titles and descriptions, module-wise syllabus skeletons, and an Admin UI that saves edits to localStorage.

## Quick start

1. unzip progressive-courses-site-v3.zip -d progressive-courses-site-v3
2. cd progressive-courses-site-v3
3. npm install
4. npm run dev
5. Open http://localhost:5173

## Notes on styling

This version uses the Tailwind CDN (script tag in index.html) so styles load immediately in development without a build step. For production builds, install Tailwind locally and configure PostCSS for optimal performance.

## Admin

Visit `/admin` to add/edit/delete courses. Changes are saved in browser localStorage (key: `progressive_courses_v3`). To reset to bundled data, clear that key in DevTools Application > Local Storage.
