import React, { useState } from 'react'
import { useRouter } from 'next/router.js'

import ShortInput from '../../components/shortInput/ShortInput.jsx'

import { createUser } from '../../services/index.js'

import styles from './CreateUser.module.css'

export default function CreateUser() {
  const router = useRouter()
  const { companyid } = router.query

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const userToken = await createUser(name, email, phone, companyid)
    router.push(`/create-post/${companyid}/?questid=${userToken}`)
  }

  return (
    <>
      <div className={styles.container}>
        <form
          onSubmit={handleSubmit}
          autoComplete='off'
          className={styles.form}
        >
          <ShortInput type='text' info='Nome' func={setName} />
          <br />
          <ShortInput type='email' info='Email' func={setEmail} />
          <br />
          <ShortInput
            type='number'
            info='Telefone'
            func={setPhone}
            onKeyPress={event => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault()
              }
            }}
          />
          <br />
          <button className={styles.btn_submit} type='submit'>
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}
