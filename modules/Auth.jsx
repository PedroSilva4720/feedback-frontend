import React, { useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
import { refreshToken } from '../services'

export default function Auth(props) {
  // const navigate = useNavigate()
  // const location = useLocation()

  // useEffect(() => {
  //   const oldToken = localStorage.getItem('auth')
  //   refreshToken(oldToken).then(token => {
  //     if (token != 'error') {
  //       localStorage.setItem('auth', token)
  //     } else {
  //       navigate('/login', { replace: true })
  //     }
  //   })
  // }, [location])

  return <>{props.children}</>
}
