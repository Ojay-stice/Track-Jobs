
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router';



function EditPage() {

const navigate = useNavigate()
  const { id } = useParams();
  const [error, setError]= useState(null)
  const [job, setJobs] = useState({
   
      title: " ",
      type: " ",
      description: " ",
      location: " ",
      salary: " ",
      company: {
        name: " ",
        description: " ",
        contactEmail: " ",
        contactPhone: " "
      }
  })

   useEffect(() => {
         const fetchJobs = async () => {
             const apiUrl = `http://localhost:8000/jobs/${id}`
 
             try {
                 const response = await fetch(apiUrl);
                 if (!response.ok){
                     throw new Error (`HTTP error! status: ${response.status}`);
                 }
                 const data = await response.json();
                 console.log(data);
                 setJobs(data);
               
             } catch (error) {
                 setError(error);
                 console.error('Failed to fetch jobs:', error)
             }finally{
                 // setisLoading(false)
             }
             console.log(job)
 
         }
         fetchJobs();
     }, [id])

     if (error){
      return<div> Error: {error.message}</div>
  }

  const handleChange = (event) =>{
    setJobs({
      ...job,
      [event.target.name]: event.target.value
    });
  }
const handleSubmit = async (event) =>{
  event.preventDefault();
  try {
    const response = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(job)
    });
    if (!response.ok){
      throw new Error (`HTTP error! status: ${response.status}`);
  }
  navigate("/jobs")

  } catch (error) {
    setError(error)
  }
  if (error){
    return<div> Error: {error.message}</div>
}
};
  return (
    <section className=' flex justify-center bg-[#f7f7f7] '>
    <div className='w-[600px] bg-white p-5 my-6'>
    <h2 className='text-center text-2xl font-medium'>Add Job</h2>
      <form action="" method="post" onSubmit={handleSubmit} className='flex flex-col'>
        
      <label className=' font-semibold' htmlFor="type">Job Type</label>
          <select name="type" onChange={handleChange} id="type" value={job.type} className='my-2 border rounded outline-none p-3'>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Remote">Remote</option>
            <option value="Intership">Intership</option>

          </select>

          <label className='pt-4 font-semibold' htmlFor="title">Job Listing Name</label>
          <input className='border outline-none py-3 px-2 rounded my-2' onChange={handleChange} id='title'  type="text" name='title' value={job.title} placeholder='eg. Beautiful Apartment, requirements, etc ' />

          <label className='pt-4 font-semibold' htmlFor="dercription">Description</label>
          <textarea className='h-[150px] border rounded outline-none my-3 p-3' onChange={handleChange} name="dercription" value={job.description} placeholder='Add any job duties, expectation, requirements, etc' id="dercription"></textarea>

          <label className='pt-4 font-semibold' htmlFor="salary">Salary</label>
          <select className='my-2 border rounded outline-none p-3' onChange={handleChange} name="salary" id="salary" value={job.salary}>
              <option value="Under50k">under 50k</option>
              <option value="Under50k"></option>
              <option value="Under50k"></option>
              <option value="Under50k"></option>
              <option value="Under50k"></option>
          </select>

          <label className='pt-4 font-semibold' htmlFor="location">Location</label>
          <input className='border outline-none py-3 px-2 rounded my-2' id='location' onChange={handleChange} type="text" name='location' value={job.location} placeholder='Company Location' />

          <h4 className='text-2xl my-4'>Company Info</h4>

          <label className='pt-4 font-semibold py-3' htmlFor="companyname">Company Name</label>
          <input className='border outline-none py-3 px-2 rounded ' name='name' onChange={handleChange} type="text"  value={job.company.name} placeholder='Company Name'  />

          <label className='pt-4 font-semibold py-3' htmlFor="description">Company Description</label>
          <textarea className='h-[150px] border rounded outline-none p-3' name="description" value={job.company.description} onChange={handleChange} id="description" placeholder='What does your company do?'></textarea>

          <label className='pt-4 font-semibold' htmlFor="email">Contact Email</label>
          <input className='border outline-none py-3 px-2 rounded my-2' id='email' onChange={handleChange} type="text" name='email' value={job.company.contactEmail} placeholder='Email address for applicants' />

          <label className='pt-4 font-semibold' htmlFor="contact">Contact phone</label>
          <input className='border outline-none py-3 px-2 rounded my-2' id='contact' onChange={handleChange} type="text" name='contact' value={job.company.contactPhone} placeholder='Optional phone for applicants' />

          <button className='bg-blue-600 w-full py-2 rounded-2xl mt-4 text-white font-medium cursor-pointer' type='submit'> Add Job</button>
      </form>
    </div>
  </section>
  )
}

export default EditPage