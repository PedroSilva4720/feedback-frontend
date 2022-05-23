import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CreateUser from '../pages/CreateUser.jsx'
import CreatePost from '../pages/CreatePost.jsx'
import ValidateToken from '../pages/ValidateToken.jsx'

export default () => (
  <Router>
    <Routes>
      <Route path='/create-user' element={<CreateUser />} />
      <Route path='/create-post/:userid' element={<CreatePost />} />
      <Route path='/validate' element={<ValidateToken />} />
    </Routes>
  </Router>
)
