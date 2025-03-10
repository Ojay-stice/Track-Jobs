
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ClipLoader } from 'react-spinners'
import { Link } from 'react-router'


const override ={
    display: "block",
    margin:"0 auto",
    borderColor: "blue",
}

function SingleJobPage() {
    const { id } = useParams();
     const [jobs, setJobs] = useState([])
    const [error, setError]= useState(null)
    const [isLoading, setisLoading] = useState(true)
      useEffect(() => {
            const fetchJobs = async () => {
                const apiUrl = `http://localhost:8000/jobs/${id}`
    
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
                console.log(jobs)
    
            }
            fetchJobs();
        }, [id])
        
       if (isLoading) {
        return <div>
            <p>Loading Job...</p>
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
            return<div> Error: {error.message}</div>
        }

        if(!jobs){
            return <div>Job not found!</div>;
        }
        const handleDelete = async () => {
            const confirmDelete = window.confirm('Are you sure you want to delete this job')
            if(confirmDelete){
                try{ 
                const response = await fetch(`http://localhost:8000/jobs/${id}`, {
                    method: "DELETE",
                    headers: {
                      "Content-Type": 'application/json'
                    }
                  });
                  if (!response.ok){
                    throw new Error (`HTTP error! status: ${response.status}`);
                }
                navigate("/")
              
                } catch (error) {
                  setError(error)
                }
            }
        }
  return (
    <section>
        {
            <div className='grid grid-cols-4 p-4 gap-5'>
                    <div className='grid col-span-3 rounded-xl p-4'>
                        <p>{jobs.type}</p>
                        <h2 className='text-5xl'>{jobs.title}</h2>
                        <p className='text-red-600'>{jobs.location}</p>
                    </div>
                    <div className='grid col-span-3 row-span-2 rounded-xl p-4'>
                        <h3>Job Description</h3>
                        <p>{jobs.description}</p>

                        <h3>Salary</h3>
                        <p>{jobs.salary}/year</p>
                    </div>
                    <div className='rounded-xl'>
                        <h3>Company Info</h3>
                        <h4>{jobs.company.name}</h4>
                        <p>{jobs.company.description}</p>
                        <div>
                            <h4>Contact Email</h4>
                            <p>{jobs.company.contactEmail}</p>
                            <h4>Contact Phone</h4>
                            <p>{jobs.company.contactPhone}</p>
                        </div>

                        <div>
                            <h5>Manage Job</h5>
                            <Link className='py-2 bg-blue-600 px-5' to={`/editjob/${id}`}>Edit</Link>
                            <button onClick={handleDelete} className='py-2 bg-red-600 px-5' >Delete</button>
                        </div>
                    </div>

            </div>
        }
    </section>
  )
}

export default SingleJobPage