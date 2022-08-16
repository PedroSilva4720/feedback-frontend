import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getDashboardItems, getQuests } from '../../services'
import Feedbacks from '../../components/dashboardComponents/Feedbacks'
import Average from '../../components/dashboardComponents/Average'
import NavBar from '../../components/dashboardComponents/NavBar'
import Auth from '../../modules/Auth'

import styles from './Dashboard.module.css'
import { DashboardContainer } from './styles'

export default function Dashboard() {
  const router = useRouter()
  const { companyid } = router.query

  const [items, setItems] = useState([])
  const [quests, setQuests] = useState()

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
  }, [])

  return (
    <>
      <Auth>
        <DashboardContainer>
          <NavBar companyid={companyid} />
          <div className={styles.dashboard_content}>
            {items !== 'error' ? (
              items.every(element => element) && items.length > 0 ? (
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
              )
            ) : (
              <></>
            )}
          </div>
        </DashboardContainer>
      </Auth>
    </>
  )
}
