import React from 'react'

const Sidebar = ({isSidebarOpen, handleSidebar}) => {

    return (
        <div className={`${isSidebarOpen ? "" : "-right-64"}`}>


            {/*  SIDE BAR  */}
        <div className={`fixed border-l shadow-2xl shadow-teal-300 h-screen w-96 text-white bg-slate-950
            transition-all ease-in-out duration-500 opacity-100
         ${isSidebarOpen ? "right-0" : "-right-96"} `}>
            <div className='flex justify-end border-b'>
                <button className='p-5' onClick={handleSidebar} >CLOSE</button>

            </div>
            <ul className='h-full flex flex-col py-8 px-10 '>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
                <li className='p-4'>Services</li>
                <li className='p-4'>Portfolio</li>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
                <li className='p-4'>Services</li>
                <li className='p-4'>Portfolio</li>


            </ul>
        </div>
        </div>
    )
}

export default Sidebar