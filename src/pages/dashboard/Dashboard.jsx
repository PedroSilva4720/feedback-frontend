import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'

import { getDashboardItems, getQuests } from '../../services'
import Feedbacks from './components/Feedbacks'
import Average from './components/Average'
import NavBar from './components/NavBar'
import Auth from '../../modules/Auth'

import './style.css'

export default () => {
  const location = useLocation()

  const [items, setItems] = useState([])
  const [quests, setQuests] = useState()

  const { companyid } = useParams()

  const er = /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/

  useEffect(() => {
    const jwt = localStorage.getItem('auth')

    if (!!er.exec(jwt)) {
      getDashboardItems(jwt, companyid).then(res => {
        setItems(res)
      })
    }

    getQuests(companyid).then(res => {
      setQuests(res)
    })
  }, [location])

  return (
    <>
      <Auth>
        <NavBar />
        <div className='dashboard-content'>
          {items.every(element => element) && items.length > 0 ? (
            <>
              {items && quests ? (
                <Feedbacks list={items} quests={quests} />
              ) : (
                <></>
              )}
              {items && quests ? (
                <Average list={items} quests={quests} />
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <h4>Não há feedbacks ainda.</h4>
            </>
          )}
        </div>
      </Auth>
    </>
  )
}
