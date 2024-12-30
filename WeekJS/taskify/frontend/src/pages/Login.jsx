import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // New state for error message
    const [register, setRegister] = useState(false);
    const navigate = useNavigate(); // Correct useNavigate

    const handleSubmit = async (e) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // Store the token
                localStorage.setItem('token', data.token);
                navigate('/main');
            } else {
                alert('Login failed!');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='h-screen w-full flex bg-blue-50 justify-center items-center'>
            <form className='bg-slate-50 border shadow-md px-10 py-8 flex flex-col gap-2 rounded-lg' onSubmit={handleSubmit} >
                <h1 className='text-2xl text-center font-medium pb-4 text-blue-500'>LOG IN</h1>
                {errorMessage && <p className='text-red-500'>{errorMessage}</p>} {/* Display error message */}
                <label className='text-xl'> Username : </label>
                <input
                    type="text"
                    className='w-96 p-1 border outline-none rounded'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label className='text-xl'> Password :</label>
                <input
                    type="password"
                    className='w-96 p-1 border outline-none rounded'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='p-1.5 border text-lg font-semibold text-white bg-blue-400 border-blue-500 rounded mt-8 active:bg-blue-500 active:text-white'> Log in</button>
                {register ? (
                    <p className="text-green-500 px12">You Are Registered Successfully</p>
                ) : (
                    <p className="text-red-500 px-1 ">You Are Not Registered</p>
                )}
            </form>
        </div>
    )
}

export default Login