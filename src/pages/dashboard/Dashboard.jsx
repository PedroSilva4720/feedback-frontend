import React, { useState } from 'react'

import { getDashboardItems } from '../../services'
import Feedbacks from './components/Feedbacks'

import './style.css'

export default () => {
  const [items, setItems] = useState([])

  const jwt = localStorage.getItem('auth')

  getDashboardItems(jwt).then(res => setItems(res))

  console.log(items)

  return (
    <>
      <p>Dashboard</p>
      <Feedbacks items={items} />
    </>
  )
}
