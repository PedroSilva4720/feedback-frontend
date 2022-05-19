import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </Router>
)
