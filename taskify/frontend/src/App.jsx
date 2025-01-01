import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Main from './pages/Main'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/main' element={<Main />} />
    </Routes>
  )
}

export default App


function Home() {
  return (
    <div className='h-screen w-full flex flex-col bg-blue-50 justify-start  items-center'>
      <h1 className='text-9xl mb-20'>Home</h1>
      <a href='/signup' className='text-2xl text-blue-700 underline'>Signup</a>
      <br />
      <a href='/login' className='text-2xl text-blue-700 underline'>Login</a>
    </div>
  )
}