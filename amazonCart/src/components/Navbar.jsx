import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <header className='text-2xl shadow py-3 px-6 flex justify-between items-center ' >
            <Link to='/'> Cart-app </Link>
            <Link to='/cart'>🛒</Link>
        </header>
    )
}

export default Navbar