import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getDashboardItems, getQuests } from '../../services'
import Feedbacks from './components/Feedbacks'
import Average from './components/Average'

import './style.css'
import NavBar from '../../pagesComponents/navBar'

export default () => {
  const navigate = useNavigate()

  const [items, setItems] = useState([])
  const [quests, setQuests] = useState()

  const { companyid } = useParams()

  const jwt = localStorage.getItem('auth')

  getDashboardItems(jwt, companyid).then(res => {
    setItems(res)
  })

  if (items == 'error') {
    navigate(`/login`, { replace: true })
  }

  getQuests(companyid).then(res => {
    setQuests(res)
  })

  return (
    <>
      <NavBar />
      <p>Dashboard</p>
      {items && quests ? <Average list={items} quests={quests} /> : <></>}
      {items && quests ? <Feedbacks list={items} quests={quests} /> : <></>}
    </>
  )
}
