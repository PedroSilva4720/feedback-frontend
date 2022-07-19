import React, { useState } from 'react'

import ShortInput from '../../components/shortInput/ShortInput'
import { useToken } from '../../services'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default () => {
  const [token, setToken] = useState()

  const positiveNotify = message => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const negativeNotify = message => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const handleSubmit = e => {
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
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <ShortInput func={setToken} info='Token' />
          <br />
          <button className='btn-submit' type='submit'>
            Validar
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}
