import React from 'react'
import { Link } from 'react-router-dom'
export function Home(){
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center gap-8">
      <header className="text-center">
 <div className="h-16 w-16 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center">
  <img
    src="src/assets/tech_logo.png"   // place this image in /public
    alt="Tech Icon"
    className="h-full w-full object-cover"
  />
</div>
       <h1 className="mt-4 text-3xl font-extrabold">Dive into the World Of Tech</h1>
        <p className="text-gray-600 mt-1">Where every project tells a story</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-6">
        <Link to="/courses" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold">Courses</h3>
          <p className="text-sm text-gray-600 mt-2">Browse curated 50-hour course modules, view detailed module-wise syllabi and enroll in hands-on projects.</p>
        </Link>

        <Link to="/subscription" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
          <h3 className="text-xl font-semibold">Subscription</h3>
          <p className="text-sm text-gray-600 mt-2">Subscription plans for institutions and students — access bundled courses, certificates and priority support.</p>
        </Link>
      </div>

    
    </section>
  )
}
