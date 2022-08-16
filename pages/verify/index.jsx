import React, { useState } from 'react'

import ShortInput from '../../components/shortInput/ShortInput'
import { useToken } from '../../services'
import { positiveNotify, negativeNotify } from '../../modules/Alerts'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import styles from './verify.module.css'

export default function Verify() {
  const [token, setToken] = useState()

  const HandleSubmit = e => {
    e.preventDefault()

    useToken(token).then(res => {
      if (res.data.type == 'positive') {
        positiveNotify(res.data.message)
      }
      if (res.data.type == 'negative') {
        negativeNotify(res.data.message)
      }
    })
  }

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={HandleSubmit}>
          <ShortInput func={setToken} info='Token' />
          <br />
          <button className={styles.btn_submit} type='submit'>
            Validar
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}
