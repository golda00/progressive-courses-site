import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { CourseList } from './components/CourseList'
import { CourseDetail } from './components/CourseDetail'
import { Admin } from './components/Admin'
import { Subscription } from "./components/Subscription";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* ✅ Logo-only (no circle) */}
          <Link to="/" className="flex items-center gap-4">
            <img src="/logo.png" alt="GP3 Cloud Innovations logo" className="h-14 w-auto" />
            <div>
              <div className="font-semibold text-lg">GP3 Cloud Innovations (OPC) Private Limited</div>
              <div className="text-xs text-gray-500"></div>
            </div>
          </Link>

          <nav className="flex gap-4">
            <Link to="/" className="text-sm text-indigo-600">Home</Link>
            <Link to="/courses" className="text-sm">Courses</Link>
            <Link to="/subscription" className="text-sm">Premium</Link>
            <Link to="/admin" className="text-sm text-red-600">Admin</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/course/:stream/:id" element={<CourseDetail />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/subscription" element={<Subscription />} />

        </Routes>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} GP3 Cloud Innovations (OPC) Private Limited • Built for Students & Institutions
      </footer>
    </div>
  )
}
