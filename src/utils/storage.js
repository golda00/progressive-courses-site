import { courseData } from '../data/courseData'

const STORAGE_KEY = 'progressive_courses_v3'

export function loadAllCourses(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY)
    if(raw) return JSON.parse(raw)
  }catch(e){}
  // fallback to bundled data
  return courseData
}

export function saveAllCourses(obj){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj))
    return true
  }catch(e){
    return false
  }
}

export function getCourses(key){
  const all = loadAllCourses()
  return all[key] || []
}
