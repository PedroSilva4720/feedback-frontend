import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CreateUser from '../pages/CreateUser.jsx'
import CreatePost from '../pages/createPost/CreatePost.jsx'
import ValidateToken from '../pages/validateToken/ValidateToken.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Dashboard from '../pages/dashboard/Dashboard.jsx'
import EditQuests from '../pages/editQuests/EditQuests.jsx'
import UseToken from '../pages/useToken/UseToken.jsx'

export default () => (
  <Router>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/create-user/:companyid' element={<CreateUser />} />
      <Route path='/create-post/:companyid/:userid' element={<CreatePost />} />
      <Route path='/validate' element={<ValidateToken />} />
      <Route path='/login' element={<Login />} />
      <Route path='/verify' element={<UseToken />} />
      <Route path='/dashboard/:companyid/' element={<Dashboard />} />
      <Route path='/editquests/:companyid/' element={<EditQuests />} />
    </Routes>
  </Router>
)
