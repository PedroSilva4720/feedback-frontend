import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CreateUser from '../pages/CreateUser.jsx'
import CreatePost from '../pages/CreatePost.jsx'
import ValidateToken from '../pages/validateToken/ValidateToken.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Dashboard from '../pages/dashboard/Dashboard.jsx'

export default () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-user' element={<CreateUser />} />
      <Route path='/create-post/:userid' element={<CreatePost />} />
      <Route path='/validate' element={<ValidateToken />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </Router>
)
