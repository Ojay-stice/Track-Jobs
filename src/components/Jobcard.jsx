import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaLocationPin } from "react-icons/fa6";

function Jobcard({job}) {
    const [showDesc, setshowDesc] = useState(false);
    let description = job.description
    if (!showDesc){
        description = description.substring(0, 60) + "...."
    }

  return (
    <>
  <div key={job.id} className='p-4 flex flex-col gap-3'>
        <div>
            <p>{job.type}</p>
            <h2>{job.title}</h2>
        </div>
        <div>
            <p>{description}</p>
            <button onClick={()=> setshowDesc((prevState) => !prevState)} className='text-blue-600 cursor-pointer'>{showDesc ? "Less" : "More"}</button>
            <p className='text-blue-600'>{job.salary}/Year</p>
        </div>
        <div className='flex items-center justify-between'>
            <p className='text-red-500 flex justify-center items-center gap-2'><FaLocationPin />{job.location}</p>
            <Link to={`/jobs/${job.id}`} className='px-7 py-2 bg-blue-600 cursor-pointer' >Read more</Link>
        </div>
    </div>
    </>
  )
}

export default Jobcard


