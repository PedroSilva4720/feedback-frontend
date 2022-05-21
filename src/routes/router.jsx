import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CreateUser from '../components/CreateUser.jsx'
import CreatePost from '../components/CreatePost.jsx'

export default () => (
  <Router>
    <Routes>
      <Route path='/create-user' element={<CreateUser />} />
      <Route path='/create-post/:userid' element={<CreatePost />} />
    </Routes>
  </Router>
)
