import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/Jobs.jsx'
import Student from '../components/Student.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import Admin from '../Admin.jsx'
import SingleJobPage from './pages/SingleJobPage.jsx'
import AddJobPage from './pages/AddJobPage.jsx'
import EditPage from './pages/EditPage.jsx'
createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element ={<App />} />
      <Route path='home' element ={<MainLayout />}> 
        <Route index element={<Home />} />
        <Route path='jobs' element={<About />} />
        <Route path='admin' element={<Admin />}/> 
        <Route path='/home/jobs/:id' element={<SingleJobPage />} />
        <Route path='/home/addjob' element={<AddJobPage />}/>
        <Route path='/home/editjob/:id' element={<EditPage />}/>
        <Route path='/home/deletejob/:id' />
      </Route>
        <Route path='students/:studentId/:studentName/:studentSchool' element={<Student />}/>
    </Routes>

</BrowserRouter>
)
