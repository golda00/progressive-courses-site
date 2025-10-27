import React, { useEffect, useState } from 'react'
import { loadAllCourses, saveAllCourses } from '../utils/storage'
import { uid } from '../utils/uid'

export function Admin(){
  const [data, setData] = useState({COURSES:[]})
  const [editing, setEditing] = useState(null)

  useEffect(()=> {
    const all = loadAllCourses()
    setData(all)
  },[])

  function startNew(){
    setEditing({ id: uid(), title:'New Course', duration:'40 hours', tags:[], outcome:'', level:'Beginner', oneliner:'', modules:[], capstone:'' })
  }

  function saveCourse(course){
    const copy = {...data}
    copy['COURSES'] = [...(copy['COURSES']||[]).filter(c=>c.id!==course.id), course]
    setData(copy)
    saveAllCourses(copy)
    setEditing(null)
  }

  function deleteCourse(id){
    if(!confirm('Delete this course?')) return
    const copy = {...data}
    copy['COURSES'] = copy['COURSES'].filter(c=>c.id!==id)
    setData(copy)
    saveAllCourses(copy)
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold">Admin — Edit Courses</h2>
      <p className="text-sm text-gray-600 mt-1">Changes are saved locally (localStorage). For multi-user editing, replace storage utils with Firebase / Airtable.</p>

      <div className="mt-4 flex gap-2">
        <button onClick={startNew} className="ml-auto px-3 py-1 bg-green-600 text-white rounded">+ New Course</button>
      </div>

      <div className="mt-4">
        <ul className="space-y-2">
          {(data['COURSES']||[]).map(c=>(
            <li key={c.id} className="flex items-center justify-between p-2 border rounded">
              <div>
                <div className="font-medium">{c.title}</div>
                <div className="text-xs text-gray-500">{c.duration} • {c.level}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={()=>setEditing(c)} className="px-2 py-1 border rounded">Edit</button>
                <button onClick={()=>deleteCourse(c.id)} className="px-2 py-1 border rounded text-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {editing && (
        <div className="mt-4 p-4 border rounded bg-slate-50">
          <h4 className="font-semibold">Edit Course</h4>
          <label className="block text-sm mt-2">Title</label>
          <input className="w-full p-2 border rounded" value={editing.title} onChange={e=>setEditing({...editing, title:e.target.value})} />
          <label className="block text-sm mt-2">Duration</label>
          <input className="w-full p-2 border rounded" value={editing.duration} onChange={e=>setEditing({...editing, duration:e.target.value})} />
          <label className="block text-sm mt-2">Level</label>
          <input className="w-full p-2 border rounded" value={editing.level} onChange={e=>setEditing({...editing, level:e.target.value})} />
          <label className="block text-sm mt-2">One-liner</label>
          <input className="w-full p-2 border rounded" value={editing.oneliner||''} onChange={e=>setEditing({...editing, oneliner:e.target.value})} />
          <label className="block text-sm mt-2">Tags (comma separated)</label>
          <input className="w-full p-2 border rounded" value={(editing.tags||[]).join(',')} onChange={e=>setEditing({...editing, tags: e.target.value.split(',').map(s=>s.trim()).filter(Boolean)})} />
          <label className="block text-sm mt-2">Capstone</label>
          <input className="w-full p-2 border rounded" value={editing.capstone||''} onChange={e=>setEditing({...editing, capstone:e.target.value})} />

          <div className="mt-3 flex gap-2">
            <button onClick={()=>saveCourse(editing)} className="px-3 py-2 bg-indigo-600 text-white rounded">Save</button>
            <button onClick={()=>setEditing(null)} className="px-3 py-2 border rounded">Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}
