import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
    return (
        <div>
            <div className="p-10 text-2xl">
                This Home Page  <br />
                <Link to='/login' className="text-blue-500 underline">Go to Login</Link>
            </div>

        </div>
    )
}

export default Index