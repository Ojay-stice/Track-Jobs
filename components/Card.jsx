import React from 'react'
import { Link } from 'react-router'

function Card({title, desc, btnText, color, path}) {
  return (
    <>
     <div className=' h-[200px] shadow-2xl px-3 py-5 bg-blu' >
       <h2 className='text-3xl font-bold'>{title}</h2> 
       <p className='py-5'>{desc}</p>
       <Link to={path} className={`${color} text-white border px-5 rounded-xl py-3`}> {btnText}</Link>
    </div>
    </>
    
  )
}

export default Card




