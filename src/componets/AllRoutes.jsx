import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Company from '../pages/AboutUs/Company'
import Blogs from '../pages/Blogs/Blogs'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Company />} />
        <Route path="/blogs" element={<Blogs />} />
    </Routes>
  )
}

export default AllRoutes
