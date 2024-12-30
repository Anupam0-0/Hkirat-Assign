import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // New state for error message

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === '' || password === '') {
            setErrorMessage('Username and Password cannot be empty');
            return;
        }
        console.log('Form Submitted');
        console.log('Username:', username);
        console.log('Password:', password);
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
            </form>
        </div>
    )
}

export default Login