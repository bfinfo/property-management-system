import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import SmartService from './pages/SmartService'
import CommunityService from './pages/CommunityService'
import Complaints from './pages/Complaints'
import Activities from './pages/Activities'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/smart-service" element={<SmartService />} />
        <Route path="/community-service" element={<CommunityService />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </div>
  )
}

export default App
