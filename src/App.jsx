import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contacts from './pages/Contacts'
import NoPage from './pages/NoPage'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import MiniBlog from './pages/MiniBlog'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} >

            </Route>
            <Route path='blogs/:id' element={<MiniBlog />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App