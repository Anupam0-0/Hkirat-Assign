import React, { useState } from 'react'

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted', formData);
    };

    return (
        <div className='h-screen w-full flex bg-blue-50 justify-center items-center'>
            <form className='bg-slate-50 border shadow-md px-10 py-6 flex flex-col gap-2 rounded-lg' onSubmit={handleSubmit} >
                <h1 className='text-2xl text-center font-medium pb-4 text-blue-500'>SIGNUP</h1>
                <label className='text-xl'> Name :</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className='w-96 p-1 border outline-none rounded' />
                <label className='text-xl'> Username :</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} className='w-96 p-1 border outline-none rounded' />
                <label className='text-xl'> Password :</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} className='w-96 p-1 border outline-none rounded' />
                <button type='submit' className='p-1.5 border text-lg font-semibold text-white bg-blue-400 border-blue-500 rounded mt-8 active:bg-blue-500 active:text-white'> Sign up</button>
            </form>
        </div>
    )
}

export default Signup