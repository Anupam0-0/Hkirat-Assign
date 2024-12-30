import React, { useEffect, useState } from 'react'


const Main = () => {
    const [newtask, setNewTask] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found! Please login first.');
            }
            const res = await fetch('http://localhost:3000/task/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Add the token here
                },
            });
            // console.log('Token:', token);
            // console.log('Authorization Header:', `Bearer ${token}`);
            if (res.ok) {
                const data = await res.json();
                // console.log('Tasks:', data);
                setData(data);
                // console.log(data);
                setLoading(false);
            } else {
                console.error('Failed to fetch tasks:', res);
                setLoading(false);
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    const addNewTask = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found! Please login first.');
            }
            const res = await fetch('http://localhost:3000/task/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Add the token here
                },
                body: JSON.stringify({ title: newtask }),
            });
            if (!res.ok) throw new Error('Failed to add task');
            fetchData();
            setNewTask('');
        } catch (error) {
            setError(error.message);
        }
    }

    const handleComplete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found! Please login first.');
            }
            const res = await fetch(`http://localhost:3000/task/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`, // Add the token here
                },
                body: JSON.stringify({ isCompleted: true }),
            });
            if (!res.ok) throw new Error('Failed to complete task');
            fetchData();
        } catch (error) {
            setError(error.message);
        }
    }

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found! Please login first.');
            }
            const res = await fetch(`http://localhost:3000/task/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`, // Add the token here
                },
            });
            if (!res.ok) throw new Error('Failed to delete task');
            fetchData();
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className='py-10 px-20 w-full flex justify-center items-center'>

            <div className='w-[80vw] p-8 border flex flex-col'>
                <h1 className='text-4xl text-center text-blue-600 font-bold'>TODO LIST :</h1>

                <div className='w-full flex justify-center my-8'>
                    <input type="text" value={newtask} onChange={(e) => setNewTask(e.target.value)} placeholder='Add new task...' onSubmit={addNewTask}
                        className='w-96 text-lg p-2 rounded-md border outline-none' /> &nbsp;
                    <button className='py-1.5 px-3 text-xl font-semibold bg-blue-400 text-white rounded-md hover:bg-blue-600 active:scale-95' onClick={addNewTask}> Add </button>
                </div>

                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <ol className='border rounded-md py-10 bg-amber-50'>
                        {data.map((item) => (
                            <div key={item._id} className='flex justify-between mx-12  py-2 border-b'>
                                <li onClick={() => handleComplete(item._id)} className={` text-xl flex items-center px-4  w-80 cursor-pointer ${item.isCompleted ? 'line-through' : ''}`}>{item.title}</li>
                                <button onClick={() => handleDelete(item._id)} className='text-lg size-12 rounded-full  hover:bg-red-100'>🗑️</button>
                            </div>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    )
}

export default Main