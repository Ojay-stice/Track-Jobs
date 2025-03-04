import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaLocationPin } from "react-icons/fa6";

function Jobcard({job}) {
    const [showDesc, setshowDesc] = useState(false);
    let description = job.description
    if (!showDesc){
        description = description.substring(0, 100) + "...."
    }

  return (
    <>
  <div key={job.id} className=''>
        <div>
            <p>{job.type}</p>
            <h2>{job.title}</h2>
        </div>
        <div>
            <p>{job.description}</p>
            <button onClick={()=> setshowDesc((prevState)=>!prevState)} className='text-blue-600'>{showDesc ? "Less" : "More"}</button>
            <p className='text-blue-600'>{job.salary}/Year</p>
        </div>
        <div className='flex justify-between'>
            <p className='text-red-500'><FaLocationPin />{job.location}</p>
            <Link to={`/jobs/${job.id}`} className='px-7 py-2 bg-blue-600' >Read more</Link>
        </div>
    </div>
    </>
  )
}

export default Jobcard


