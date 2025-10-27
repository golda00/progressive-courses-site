import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { CourseList } from './components/CourseList'
import { CourseDetail } from './components/CourseDetail'
import { Admin } from './components/Admin'

export default function App(){
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-full">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="48" fill="url(#g1)" />
<image
  href="src/assets/logo.png"   // or the path to your logo (put logo.png in /public)
  x="50%"
  y="50%"
  width="60"
  height="60"
  transform="translate(-30, -30)" // centers the logo
/>
            </svg>

            <div>
              <div className="font-semibold text-lg">GP3 Cloud Innovations (OPC) Pvt Ltd</div>
              <div className="text-xs text-gray-500"></div>
            </div>
          </Link>
          <nav className="flex gap-4">
            <Link to="/" className="text-sm text-indigo-600">Home</Link>
            <Link to="/courses" className="text-sm">Courses</Link>
            <Link to="/subscription" className="text-sm">Subscription</Link>
            <Link to="/admin" className="text-sm text-red-600">Admin</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/courses" element={<CourseList/>} />
          <Route path="/course/:stream/:id" element={<CourseDetail/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">© {new Date().getFullYear()} Progressive Courses • Built for students & institutions</footer>
    </div>
  )
}
