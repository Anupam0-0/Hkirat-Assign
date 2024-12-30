import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Signup = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [register, setRegister] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/auth/signup', { name, username, password })
            .then(res => {
                console.log(res);
                setRegister(true);
                navigate('/login');
            })
            .catch(err => {
                console.error(err);
            })
    };

    return (
        <div className='h-screen w-full flex bg-blue-50 justify-center items-center'>
            <form className='bg-slate-50 border shadow-md px-10 py-6 flex flex-col gap-2 rounded-lg' onSubmit={handleSubmit} >
                <h1 className='text-2xl text-center font-medium pb-4 text-blue-500'>SIGNUP</h1>
                <label className='text-xl'> Name :</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className='w-96 p-1 border outline-none rounded' />
                <label className='text-xl'> Username :</label>
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} className='w-96 p-1 border outline-none rounded' />
                <label className='text-xl'> Password :</label>
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-96 p-1 border outline-none rounded' />
                <button type='submit' className='p-1.5 border text-lg font-semibold text-white bg-blue-400 border-blue-500 rounded mt-8 active:bg-blue-500 active:text-white'> Sign up</button>
                {register
                    ? <p className="text-green-500 px-12">You Are Registered Successfully</p>
                    : <p className="text-red-500 px-1">You Are Not Registered</p>
                }
            </form>
        </div>
    )
}

export default Signup