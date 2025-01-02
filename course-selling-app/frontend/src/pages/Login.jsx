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
        <div className='h-screen flex flex-col justify-center items-center gap-5'>
            <h1 className='text-4xl'>Login</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-8 p-10 border shadow rounded '>
                <input
                    type="email"
                    value={email}
                    className='p-2 outline-none'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    className='p-2 outline-none'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit" className='p-2 bg-blue-400 rounded text-white'>Login</button>
                <div>New ? <Link to='/signup'>Signup</Link></div>
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
