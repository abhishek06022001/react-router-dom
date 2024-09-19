import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Blogs() {
  return (
    <div>
      <h1>This is a blogs page </h1>

      <div className='bg-red-500 rounded-sm p-1 mt-4 text-white'>
        <Link

          to={'8'} >MiniBlog route</Link>
      </div>
      <Outlet />

    </div>
  )
}

export default Blogs