// src/App.jsx
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Company from './pages/Company'
import About from './pages/About'
import Careers from './pages/Careers'
import Internship from './pages/Internship'
import Work from './pages/Work'
import Contact from './pages/Contact'
import SkillCertification from './pages/SkillCertification'
import ProfessionalTrack from './pages/ProfessionalTrack'
import CareerLaunch from './pages/CareerLaunch'
import CareerProgram from './pages/CareerProgram'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Company />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/internship' element={<Internship />} />
        <Route path='/certification' element={<SkillCertification />} />
        <Route path='/professional' element={<ProfessionalTrack />} />
        <Route path='/careerlaunch' element={<CareerLaunch />} />
        <Route path='/360career' element={<CareerProgram />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
