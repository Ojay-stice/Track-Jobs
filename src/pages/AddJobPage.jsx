import React from 'react'

function AddJobPage() {
  return (
    <section>
        <h2>Add Job</h2>
        <form action="" method="post">
            <label htmlFor="jobtype">Job Type</label>
            <input type="text" placeholder='Full-Time' />

            <label htmlFor="jobListin">Job Listing Name</label>
            <input type="text" placeholder='eg. Beautiful Apartment, requirements, etc ' />

            <label htmlFor="dercription">Description</label>
            <textarea name="" placeholder='Add any job duties, expectation, requirements, etc' id=""></textarea>

            <label htmlFor="salary">Salary</label>
            <select name="" id="">
                <option value="Under50k"></option>
                <option value="Under50k"></option>
                <option value="Under50k"></option>
                <option value="Under50k"></option>
                <option value="Under50k"></option>
            </select>

            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Company Location' />

            <h4>Company info</h4>

            <label htmlFor="companyname">Company Name</label>
            <input type="text" placeholder='Company Name' />

            <label htmlFor="comeDescription">Company Description</label>
            <textarea name="" id="" placeholder='What does your company do?'></textarea>

            <label htmlFor="email">Contact Email</label>
            <input type="text" placeholder='Email address for applicants' />

            <label htmlFor="contact">Contact phone</label>
            <input type="text" placeholder='Optional phone for applicants' />

            <button type='submit'> Add Job</button>
        </form>
    </section>
  )
}

export default AddJobPage