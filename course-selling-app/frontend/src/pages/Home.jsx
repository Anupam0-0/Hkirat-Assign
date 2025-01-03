import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';


const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api('/courses/all/');
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        // console.log(decodedToken);

        setCourses(res.data); // Assuming the response has a data property
        // console.log(res.data);

      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  // * course buying function
  const handleClick = async (courseId) => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;
    try {
      // const check = await api.get('/purchases/buy', );
      // console.log(check.data);
      const res = await api.post('/purchases/buy', { courseId: courseId, userId: userId });
      // console.log(res.data);
      // * I explicated the message to see the response
      alert(`** ${res.data.message} -> ${res.data.course.title} **`);
      // console.log(res);
    } catch (error) {
      console.error('Error buying course:', error);
    }
  };

  return (
    <div className='w-full px-40 bg-slate-50'>

      <h1 className='text-6xl font-semibold py-8 text-center'>Available Courses</h1>
      <hr />
      <div className="flex flex-wrap justify-around py-2 gap-8">
        {courses.map((course) => (
          <div key={course._id} className="size-96 bg-white shadow-lg rounded-lg flex flex-col justify-evenly items-center">
            <img src={'https://placehold.co/600x400'} className='rounded-md' alt={course.name} />
            <h2 className='text-2xl font-semibold'>{course.title}</h2>
            {/* <p>{course.description}</p> */}
            {/* <button onClick={handleClick} className='px-2 py-1.5 border rounded shadow ' >View Details</button> */}
            <div className=' w-full px-1 flex my-1 justify-between scale-90'>
              <div className='text-2xl flex items-center justify-center px-2' >$ {course.price}</div>

              <button onClick={() => handleClick(course._id)} className='text-xl px-8 py-2 font-semibold bg-violet-500 shadow-md hover:shadow-lg rounded-md text-white  ' >
                Buy Now
              </button>
            </div>
          </div>
        ))}

        <Link to='/purchases' className='text-center mt-10 text-6xl py-20 rounded-full bg-blue-400 text-white  w-full'> Go to Purchases </Link>
      </div>
    </div>
  );
};

export default Home;
