import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { Link } from 'react-router';


function Logo() {
  return (
    <>
    <div>
       <Link className='flex'>
         <IoLogoJavascript  className='text-4xl'/>
          <h3 className='text-3xl text-blue-700'>TrackJobs</h3>
        </Link>
    </div></>
  )
}

export default Logo