import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import Student from './components/Student.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import Admin from './pages/Client/Admin.jsx'
import SingleJobPage from './pages/SingleJobPage.jsx'
import AddJobPage from './pages/AddJobPage.jsx'
import EditPage from './pages/EditPage.jsx'
import Jobs from './pages/Jobs.jsx'


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element ={<App />} />
      <Route path='' element ={<MainLayout />}> 
        <Route index element={<Home />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='admin' element={<Admin />}/> 
        <Route path='/jobs/:id' element={<SingleJobPage />} />
        <Route path='/home/addjob' element={<AddJobPage />}/>
        <Route path='/editjob/:id' element={<EditPage />}/>
        <Route path='/home/deletejob/:id' />
      </Route>
        <Route path='students/:studentId/:studentName/:studentSchool' element={<Student />}/>
    </Routes>

</BrowserRouter>
)
