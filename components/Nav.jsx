import React from 'react'
import { NavLink } from 'react-router'
import Logo from './Logo'
function Nav() {

  return (
    <>
      <nav className='text-black flex justify-between items-center text-base cursor-pointer px-12'>
       <Logo />
        <ul className="flex  items-center  h-[56px] gap-[4px]">
        <NavLink to="/home" className={({ isActive }) =>
              isActive ? "text-black px-4" : "text-blue-500 px-4"
          }>Home</NavLink>
           <NavLink to="jobs" className={({ isActive }) =>
              isActive ?  "text-black px-4" : "text-blue-500 px-4"
          }>Jobs</NavLink>
           <NavLink to="/home/addjob" className={({ isActive }) =>
              isActive ?  "text-black px-4" : "text-blue-500 px-4"
          }>Add Jobs</NavLink>
          
        </ul>
      </nav>
   
    </>
  )
}

export default Nav