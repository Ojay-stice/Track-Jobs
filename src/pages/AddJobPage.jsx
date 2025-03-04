import React from 'react'

function AddJobPage() {
  return (
    <section className=' flex justify-center bg-[#f7f7f7] '>
      <div className='w-[600px] bg-white p-5 my-6'>
      <h2 className='text-center text-2xl font-medium'>Add Job</h2>
        <form action="" method="post" className='flex flex-col'>
            <label className=' font-semibold' htmlFor="jobtype">Job Type</label>
            <input className='border outline-none py-3 px-2 rounded my-2' type="text" placeholder='Full-Time' />

            <label className='pt-4 font-semibold' htmlFor="jobListin">Job Listing Name</label>
            <input className='border outline-none py-3 px-2 rounded my-2' type="text" placeholder='eg. Beautiful Apartment, requirements, etc ' />

            <label className='pt-4 font-semibold' htmlFor="dercription">Description</label>
            <textarea className='h-[150px] border rounded outline-none my-3 p-3' name="" placeholder='Add any job duties, expectation, requirements, etc' id=""></textarea>

            <label className='pt-4 font-semibold' htmlFor="salary">Salary</label>
            <select className='my-2 border rounded outline-none p-3' name="" id="">
                <option value="Under50k">under 50k</option>
                <option value="Under50k"></option>
                <option value="Under50k"></option>
                <option value="Under50k"></option>
                <option value="Under50k"></option>
            </select>

            <label className='pt-4 font-semibold' htmlFor="location">Location</label>
            <input className='border outline-none py-3 px-2 rounded my-2' type="text" placeholder='Company Location' />

            <h4 className='text-2xl my-4'>Company Info</h4>

            <label className='pt-4 font-semibold py-3' htmlFor="companyname">Company Name</label>
            <input className='border outline-none py-3 px-2 rounded ' type="text" placeholder='Company Name' />

            <label className='pt-4 font-semibold py-3' htmlFor="comeDescription">Company Description</label>
            <textarea className='h-[150px] border rounded outline-none p-3' name="" id="" placeholder='What does your company do?'></textarea>

            <label className='pt-4 font-semibold' htmlFor="email">Contact Email</label>
            <input className='border outline-none py-3 px-2 rounded my-2' type="text" placeholder='Email address for applicants' />

            <label className='pt-4 font-semibold' htmlFor="contact">Contact phone</label>
            <input className='border outline-none py-3 px-2 rounded my-2' type="text" placeholder='Optional phone for applicants' />

            <button className='bg-blue-600 w-full py-2 rounded-2xl mt-4 text-white font-medium cursor-pointer' type='submit'> Add Job</button>
        </form>
      </div>
    </section>
  )
}

export default AddJobPage