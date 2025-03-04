import React from 'react'
import Card from '../../components/Card'
import { Link } from 'react-router'
function Home() {
  return (
    <>
       <section className='w-full h-[400px] bg-blue-600 flex items-center justify-center'>
          <div className='text-center p-4'>
              <h1 className='text-7xl text-white font-extrabold'>Become a Techie</h1>
              <p className='text-xl py-3 font-medium text-white'>Find the Tech job that fits your skill set</p>
          </div>
       </section>

       <section className='grid grid-cols-2 gap-3 my-12 px-6'>
       <Card title={'For Developers'} desc={'Browse our Tech JObs and start your career today'} btnText={'Browse'} color={'bg-black'} path={'/jobs'}/>
       <Card title={'For Employers'} desc={'List your job to find the perfect developer for the role'} btnText={'Add Job'} color={'bg-blue-600'} path={'/jobs'}/>
       </section>
       <section className='text-center h-[150px] text-blue-600 font-semibold w-full  my-5 py-4 bg-[#f7f7f7]'>
        <h2 className='text-4xl'>Recent Jobs</h2>
       
       </section>
       <div className='w-full text-center'>
          <Link className="px-26 py-6 rounded-xl bg-black text-white">View All Jobs</Link>
        </div>
       
    </>
  )
}

export default Home