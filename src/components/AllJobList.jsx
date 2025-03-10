import React, { useState, useEffect } from 'react'
import { ClipLoader } from 'react-spinners'
import Jobcard from './Jobcard'



const override ={
    display: "block",
    margin:"0 auto",
    borderColor: "blue",
}
function AllJobList() {
    const [jobs, setJobs] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [error, setError] = useState (null)

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = `http://localhost:8000/jobs`

            setisLoading(true)
            try {
                const response = await fetch(apiUrl);
                if (!response.ok){
                    throw new Error (`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                setJobs(data);
                setisLoading(false)
            } catch (error) {
                setError(error);
                console.error('Failed to fetch jobs:', error)
            }finally{
                // setisLoading(false)
            }
            console.log(jobs.company.name)
        }
        fetchJobs();
    }, [])


       if (isLoading) {
        return <div>
            <p>Loading Available Jobs...</p>
            <ClipLoader 
            color='blue'
            loading= {isLoading}
            cssOverride={override}
            speedMultiplier={1.5}
            size={150}
            aria-label='Loading Spinner'
            data-testid ="loader"
            />
        </div>;
       }
       if (error){
        return <div> Error: {error.message}</div>
       }

  return (
    <section> 
    <h2>All Jobs listings</h2>
      <div className='grid grid-cols-3 gap-4'>
        {
            jobs.map((job) => (
                <Jobcard job={job} key={job.id}/>
            ))
        }
      </div>
       
    </section>
  )
}

export default AllJobList