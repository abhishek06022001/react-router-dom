import React from 'react'
import Sidebar from './Sidebar'
import { Link, Outlet } from 'react-router-dom'
import { FaReact } from "react-icons/fa";
function Layout() {
    return (
        <>
            <div className='flex flex-col flex-1 min-h-screen'>
                <div className='bg-slate-950 text-yellow-500 flex justify-evenly 
                items-center h-16'>
                    <div className='flex items-center 
                    gap-1 w-1/3 '>
                        <FaReact className='h-11 w-16' />
                        <h1 className='text-lg'>The React Router Practice</h1>
                    </div>
                    <div className='right gap-11 flex w-1/3 '>
                        <Link to={'/'} >HOME</Link>
                        <Link to={'/contacts'} >CONTACTS</Link>
                        <Link to={'/blogs'} >BLOGS</Link>
                        <Link to={'/about'} >ABOUT</Link>
                    </div>
                </div>
                <div className='flex flex-1  ' >
                    <Sidebar />
                    <div className='flex flex-1  '>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Layout