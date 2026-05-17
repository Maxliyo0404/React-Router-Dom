import React from 'react'
import Layout from './Components/Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPages from './pages/AboutPages/AboutPages'
import ContactPages from './pages/ContactPages/ContactPages'
import ServicesPages from './pages/ServicesPages/ServicesPages'

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes element={<Layout/>}>
      <Route  path='about' element={<AboutPages/>} />
      <Route path='contact' element={<ContactPages/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App