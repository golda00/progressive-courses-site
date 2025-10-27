import React from 'react'
import { Link } from 'react-router-dom'
import { getCourses } from '../utils/storage'

export function CourseList(){
  const data = getCourses('COURSES') || []

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map(c => (
          <div key={c.id} className="bg-white p-4 rounded shadow flex flex-col hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{c.title}</h3>
                <div className="text-sm text-gray-500">{c.duration} • {c.level}</div>
              </div>
              <div className="text-xs text-gray-400">{(c.tags||[]).join(', ')}</div>
            </div>

            <p className="text-sm text-gray-700 my-3">{c.oneliner}</p>

            <div className="mt-auto flex gap-2">
              <Link to={`/course/COURSES/${c.id}`} className="px-3 py-2 bg-indigo-600 text-white rounded">View Syllabus</Link>
              <button onClick={() => window.print()} className="px-3 py-2 border rounded">Print</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
