import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <section
      className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: 'url(/home-bg.jpg)' }} // place this image in /public
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-4">
        <header>
          <h1 className="text-4xl font-extrabold text-white">
            Dive into the World of Tech
          </h1>
          <p className="text-gray-200 mt-2 text-lg">
            Where every project tells a story
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-8">
          <Link
            to="/courses"
            className="block p-6 bg-white/90 backdrop-blur-md rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">Courses</h3>
            <p className="text-sm text-gray-600 mt-2">
              Browse curated 50-hour course modules, view detailed module-wise syllabi and enroll in hands-on projects.
            </p>
          </Link>

          <Link
            to="/subscription"
            className="block p-6 bg-white/90 backdrop-blur-md rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition"
          >
            <h3 className="text-xl font-semibold text-gray-800">Premium Membership</h3>
            <p className="text-sm text-gray-600 mt-2">
              Subscription plans for institutions and students — access bundled courses, certificates and priority support.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
