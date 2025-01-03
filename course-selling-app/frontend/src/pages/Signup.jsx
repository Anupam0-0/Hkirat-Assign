import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const res = await fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      })

      if (!res.ok) {
        const errorData = await res.json();
        console.log('Error:', errorData);
        return;
      }

      alert('-> Registered successfully <-')
      navigate('/login');

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-100 outline-none'>
      <form onSubmit={handleSubmit} className='w-full max-w-md bg-white border px-8 py-8 h-fit rounded-2xl shadow-lg flex flex-col gap-6 outline-none'>
        <h1 className='text-4xl text-blue-600 text-center py-4 font-bold outline-none'>Sign Up</h1>
        <label className='flex flex-col gap-2 outline-none'>
          <span className='text-lg font-medium tracking-wide outline-none'>Name</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name here...' className='p-3 border text-lg rounded outline-none '
          />
        </label>
        <label className='flex flex-col gap-2 outline-none'>
          <span className='text-lg font-medium tracking-wide outline-none'>Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email here...' className='p-3 border text-lg rounded outline-none '
          />
        </label>
        <label className='flex flex-col gap-2 outline-none'>
          <span className='text-lg font-medium tracking-wide outline-none'>Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password here...' className='p-3 border text-lg rounded outline-none '
          />
        </label>
        <button type='submit' className='p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 outline-none'>Sign Up</button>

        <div className='text-lg px-1'>Already a user ? <Link className=' text-blue-600 underline' to='/login'>Login</Link></div>


      </form>
    </div>
  )
}

export default Signup;



