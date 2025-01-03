import React, { useState, useEffect } from 'react'
import api from '../utils/api'
import { jwtDecode } from 'jwt-decode'
import { Link } from 'react-router-dom'

const Purchases = () => {
  const [student, setStudent] = useState('')
  const [courses, setCourses] = useState([])

  const fetchCourses = async () => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    try {
      const res = await api('/purchases/get', { userId: userId });
      setStudent(res.data.user.charAt(0).toUpperCase() + res.data.user.slice(1));
      console.log(res.data.purchasedCourses);
      setCourses(res.data.purchasedCourses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, [])

  return (
    <div className='w-full px-40 bg-slate-50'>
      <h1 className='text-6xl font-medium py-8 text-center'><span className='text-emerald-500'>{student}'s</span>,  Purchased Courses</h1>
      <hr />
      <div>
        <div className="flex flex-wrap justify-around py-2 gap-8">
          {courses.map((course) => (
            <div key={course._id} className="size-96 bg-white shadow-lg rounded-lg flex flex-col justify-evenly items-center">
              <img src={course.img || 'https://placehold.co/600x400'} className='rounded-md' alt={course.name} />
              <h2 className='text-2xl font-semibold'>{course.title}</h2>
              
              {/* <p>{course.description}</p> */}
              {/* <button onClick={handleClick} className='px-2 py-1.5 border rounded shadow ' >View Details</button> */}
              <div className='flex my-1 justify-center scale-90'>
              <div className='text-xl border py-1 px-5 rounded-2xl '>Purchased ✔️</div>
              </div>
            </div>
          ))}

          <Link to='/home' className='text-center mt-10 text-6xl py-20 rounded-full bg-blue-400 text-white  w-full'> Go to Courses Page </Link>
        </div> 
      </div>

    </div>
  )
}

export default Purchases