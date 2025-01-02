import React, { useContext } from 'react'
import { useAuth } from '../context/AuthContext'


const Home = () => {


  return (
    <div className='text-xl'>
            <h1>
            Hello User!
            </h1>
    
    <h2 className='text-lg'>
        idk ur name. But hey!
    </h2> 

        <h2 className='text-4xl'>
             Welcome !
        </h2>
    </div>
  )
}

export default Home