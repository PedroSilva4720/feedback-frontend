import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CreateUser from '../pages/CreateUser.jsx'
import CreatePost from '../pages/CreatePost.jsx'
import ValidateToken from '../pages/validateToken/ValidateToken.jsx'
import Home from '../pages/Home.jsx'

export default () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create-user' element={<CreateUser />} />
      <Route path='/create-post/:userid' element={<CreatePost />} />
      <Route path='/validate' element={<ValidateToken />} />
    </Routes>
  </Router>
)
