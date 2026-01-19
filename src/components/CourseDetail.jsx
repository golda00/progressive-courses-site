import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getCourses } from '../utils/storage'

export function CourseDetail(){
  const {id} = useParams()
  const data = getCourses('COURSES') || []
  const course = data.find(x=>x.id===id)
  if(!course) return (<div>Course not found. <Link to={'/courses'}>Back</Link></div>)

  return (
    <article className="bg-white p-6 rounded shadow">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">{course.title}</h1>
          <div className="text-sm text-gray-500">{course.duration} • {course.level} • {(course.tags||[]).join(', ')}</div>
          {course.oneliner && <p className="mt-2 text-sm text-gray-700">{course.oneliner}</p>}
        </div>
        <div className="text-right">
          <div className="text-sm">Category: <strong>General</strong></div>
        </div>
      </div>

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <h3 className="font-semibold">
  {course.semesters ? "Semester-wise Syllabus" : "Module-wise Syllabus"}
</h3>

<div className="mt-3 space-y-4">

  {/* Semester-wise (Engineering Programs) */}
  {course.semesters && course.semesters.map((s, idx) => (
    <div key={idx} className="p-4 border rounded">
      <h4 className="font-medium text-lg">
        {s.semester}: {s.title}
      </h4>
      <div className="text-xs text-gray-500">{s.duration}</div>

      {s.objective && (
        <p className="text-sm text-gray-700 mt-2">
          <strong>Objective:</strong> {s.objective}
        </p>
      )}

      {s.topics && (
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
          {s.topics.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      )}
    </div>
  ))}

  {/* Module-wise (Existing Courses) */}
  {!course.semesters && (course.modules||[]).map((m, idx) => (
    <div key={idx} className="p-3 border rounded">
      <div className="font-medium">
        Module {idx + 1}: {m.title}
      </div>
      <div className="text-xs text-gray-500">
        Approx. {m.hours} hours
      </div>
      <p className="text-sm text-gray-700 mt-2">{m.description}</p>
      {m.topics && (
        <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
          {m.topics.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      )}
    </div>
  ))}

</div>

          <h4 className="mt-6 font-medium">Capstone / Final Project</h4>
          <p className="text-sm text-gray-700 mt-2">{course.capstone || course.outcome}</p>
        </div>

        <aside className="p-4 bg-slate-50 rounded">
          <h4 className="font-semibold">Tools & Resources</h4>
          <ul className="text-sm text-gray-700 mt-2 list-disc ml-5">
            {(course.tags||[]).map(t=> <li key={t}>{t}</li>)}
          </ul>

          <div className="mt-4">
            <button onClick={() => alert('Enroll flow placeholder — integrate payment or form here')} className="w-full py-2 bg-green-600 text-white rounded">Enroll / Request Demo</button>
          </div>
        </aside>
      </section>

      <div className="mt-6 flex gap-3">
        <Link to={'/courses'} className="text-sm text-indigo-600">← Back to Courses</Link>
        <button onClick={() => window.print()} className="ml-auto px-3 py-2 border rounded">Print Syllabus</button>
      </div>
    </article>
  )
}
