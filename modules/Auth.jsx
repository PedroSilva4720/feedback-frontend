import React, { useEffect } from 'react'
import { refreshToken } from '../services'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { negativeNotify } from './Alerts'

export default function Auth(props) {
  const router = useRouter()

  useEffect(() => {
    const oldToken = localStorage.getItem('auth')
    refreshToken(oldToken).then(token => {
      if (token != 'error') {
        localStorage.setItem('auth', token)
      } else {
        negativeNotify('Por favor faça login novamente.')
        router.push('/login')
      }
    })
  }, [router.pathname])

  return (
    <>
      {props.children}
      <ToastContainer />
    </>
  )
}
