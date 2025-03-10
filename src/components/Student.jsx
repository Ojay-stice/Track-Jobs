import React from 'react'
import { useParams } from 'react-router'

function Student() {
    let {studentId, studentName, studentSchool} = useParams();

  return (
    <>
    <h2 className='text-3xl text-red-400'>Id: {studentId}</h2>
    <h2>Name: {studentName}</h2>
    <h2 className='text-3xl text-red-400'>School: {studentSchool}</h2>
    </>
  )
}

export default Student