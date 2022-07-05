import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { refreshToken } from '../services'

export default props => {
  const navigate = useNavigate()
  const location = useLocation()

  const er = /^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)/

  useEffect(() => {
    const oldToken = localStorage.getItem('auth')
    refreshToken(oldToken).then(token => {
      if (token != 'error') {
        localStorage.setItem('auth', token)
      }
    })
  }, [location])

  // if (!er.exec(oldToken)) {
  //   navigate('/login', { replace: true })
  // }

  return <>{props.children}</>
}
