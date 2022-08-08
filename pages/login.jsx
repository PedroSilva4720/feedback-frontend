import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { login } from '../services'

import styles from '../styles/login.module.css'

import PassInput from '../components/passInput/PassInput.jsx'
import ShortInput from '../components/shortInput/ShortInput.jsx'

export default function Login() {
  const router = useRouter()

  useEffect(() => {
    localStorage.removeItem('auth')
  })

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    login(username, password).then(response => {
      const { managerToken, companyId } = response.response
      if (response.status == 200) {
        localStorage.setItem('auth', managerToken)
        router.push(`/dashboard/${companyId}`)
      }
    })
  }

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <ShortInput func={setUsername} info={'Login'} />
          <PassInput func={setPassword} info={'Senha'} />
          <br />
          <button className={styles.btn_submit} type='submit'>
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}
