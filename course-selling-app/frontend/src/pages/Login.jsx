import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext, useAuth } from '../context/AuthContext';
import api from '../utils/api';

const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/user/login', {
                email,
                password,
            });

            // Assuming the token is returned as 'token'
            const { token, user } = response.data;
            login(token, user);

            alert('done');
            setEmail('')
            setPassword('')
            navigate('/home');

        } catch (error) {
            setMessage('Failed to login');
            console.log(error)
        }
    };


    return (
        <div className='h-screen flex bg-slate-100 flex-col justify-center items-center'>

            <form onSubmit={handleSubmit} className='flex w-96 flex-col gap-4 p-10 border shadow-lg rounded-xl bg-white'>
                <h1 className='text-4xl text-center pb-8'>Login</h1>
                
                <input
                    type="email"
                    value={email}
                    className= 'my-2 py-2 px-4 text-lg rounded border shadow-sm outline-none'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    className='my-2 py-2 px-4 rounded text-lg border shadow-sm outline-none'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button 
                    type="submit" 
                    className='my-2 p-2 bg-blue-400 rounded-lg text-xl text-white active:bg-blue-600 active:scale-[0.99] hover:bg-blue-500'
                > Login </button>
                <div className='text-lg px-1'>New ? <Link className=' text-blue-600 underline' to='/signup'>Signup</Link></div>
            </form>

            <p>{message}</p>

        </div>
    );

    const fetchProtectedData = async () => {
        const token = localStorage.getItem('token');

        if (!token) {
            alert('You are not logged in!');
            return;
        }

        try {
            const response = await axios.get('https://your-api-url.com/protected-endpoint', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log('Protected data:', response.data);
        } catch (error) {
            console.error('Failed to fetch protected data:', error);
        }
    };
};

export default App;
