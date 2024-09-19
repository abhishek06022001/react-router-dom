import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard'
function Sidebar() {
    return (
        <div className='bg-zinc-900 min-w-44 p-1  h-full '>
            <div className='font-semibold from-neutral-700 bg-yellow-100 rounded-lg mt-2 p-2'>
                <Link to={'/dashboard'} > Dashboard </Link>
            </div>
            <div className='font-semibold from-neutral-700 bg-yellow-100 rounded-lg mt-2 p-2'>
                <Link to={'/login'} >  Sign in </Link>
            </div>
            <div className='font-semibold from-neutral-700 bg-yellow-100 rounded-lg mt-2 p-2'>
                <Link> Sign out </Link>
            </div>
            <div className='font-semibold from-neutral-700 bg-yellow-100 rounded-lg mt-2 p-2'>
                <Link> Register </Link>
            </div>
        </div>
    )
}
export default Sidebar