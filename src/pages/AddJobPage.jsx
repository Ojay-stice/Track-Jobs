import React  from 'react'
import { useNavigate } from 'react-router';
import { useState } from 'react';
function AddJobPage() {

  
  const navigate = useNavigate()
  const [error, setError]= useState(null)

  const [title, setTitle] = useState("")
  const [type, setType] = useState("Full-time")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [salary, setSalary] = useState("under 50k")
  const [companyName, setcompanyName] = useState("")
  const [companyDescription, setCompanyDescription] = useState("")
  const [contactEmail, setcontactEmail] = useState("")
  const [contactPhone, setcontactPhone] = useState("")

  const newJobs = {
      
    title,
    type,
    description,
    location,
    salary,
    company: {
      name: companyName,
      description: companyDescription,
      contactEmail: contactEmail,
      contactPhone: contactPhone
    }
}

  const handlePost = async (event) =>{
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/jobs`, {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(newJobs)
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
      <form action="" method="post" onSubmit={handlePost} className='flex flex-col'>

          <label className=' font-semibold' htmlFor="type">Job Type</label>
          <select name="type" onChange={(e)=>{setType(e.target.value)}} id="type" value={type} className='my-2 border rounded outline-none p-3'>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Remote">Remote</option>
            <option value="Intership">Intership</option>

          </select>

          <label className='pt-4 font-semibold' htmlFor="title">Job Listing Name</label>
          <input className='border outline-none py-3 px-2 rounded my-2' onChange={(e)=>{setTitle(e.target.value)}} id='title'  type="text" name='title' value={title} placeholder='eg. Beautiful Apartment, requirements, etc ' />


          <label className='pt-4 font-semibold' htmlFor="dercription">Description</label>
          <textarea className='h-[150px] border rounded outline-none my-3 p-3' onChange={(e)=>{setDescription(e.target.value)}} name="dercription" value={description} placeholder='Add any job duties, expectation, requirements, etc' id="dercription"></textarea>

          <label className='pt-4 font-semibold' htmlFor="salary">Salary</label>
          <select className='my-2 border rounded outline-none p-3' onChange={(e)=>{setSalary(e.target.value)}} name="salary" id="salary" value={salary}>
              <option value="Under50k">under 50k</option>
              <option value="Under50k"></option>
              <option value="Under50k"></option>
              <option value="Under50k"></option>
              <option value="Under50k"></option>
          </select>

          <label className='pt-4 font-semibold' htmlFor="location">Location</label>
          <input className='border outline-none py-3 px-2 rounded my-2' id='location' onChange={(e)=>{setLocation(e.target.value)}} type="text" name='location' value={location} placeholder='Company Location' />

          <h4 className='text-2xl my-4'>Company Info</h4>

          <label className='pt-4 font-semibold py-3' htmlFor="companyname">Company Name</label>
          <input className='border outline-none py-3 px-2 rounded ' name='name' onChange={(e)=>{setcompanyName(e.target.value)}} type="text"  value={companyName} placeholder='Company Name'  />

          <label className='pt-4 font-semibold py-3' htmlFor="description">Company Description</label>
          <textarea className='h-[150px] border rounded outline-none p-3' name="description" value={companyDescription} onChange={(e)=>{setCompanyDescription(e.target.value)}} id="description" placeholder='What does your company do?'></textarea>

          <label className='pt-4 font-semibold' htmlFor="email">Contact Email</label>
          <input className='border outline-none py-3 px-2 rounded my-2' id='email' onChange={(e)=>{setcontactEmail(e.target.value)}} type="text" name='email' value={contactEmail} placeholder='Email address for applicants' />

          <label className='pt-4 font-semibold' htmlFor="contact">Contact phone</label>
          <input className='border outline-none py-3 px-2 rounded my-2' id='contact' onChange={(e)=>{setcontactPhone(e.target.value)}} type="text" name='contact' value={contactPhone} placeholder='Optional phone for applicants' />

          <button className='bg-blue-600 w-full py-2 rounded-2xl mt-4 text-white font-medium cursor-pointer' type='submit'> Add Job</button>
      </form>
      </div>
    </section>
  )
}

export default AddJobPage