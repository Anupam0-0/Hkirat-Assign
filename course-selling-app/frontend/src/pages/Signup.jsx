import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
    <div className='h-screen w-full flex justify-center py-20'>
      <form onSubmit={handleSubmit} className='w-96 border px-8 py-8 h-fit rounded shadow flex flex-col gap-4'>
        <h1 className='text-3xl text-blue-500 text-center py-4 font-semibold'>Sign up</h1>
        <label> Name  <br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name here...' className='p-2 outline-none'
          />
        </label>
        <label> Email  <br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email here...' className='p-2 outline-none'
          />
        </label>
        <label> Password  <br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password here...' className='p-2 outline-none'
          />
        </label>
        <button type='submit' className='p-2 bg-blue-500 text-white rounded'>Sign up</button>
      </form>
    </div>
  )
}

export default Signup;



