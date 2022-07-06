import React, { useState } from 'react'

import ShortInput from '../../components/shortInput/ShortInput'
import Alert from '../../icons/Alert'
import { useToken } from '../../services'

export default () => {
  const [token, setToken] = useState()
  const [message, setMessage] = useState('')
  const [type, setType] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    useToken(token).then(res => {
      console.log(res.data)
      setMessage(res.data.message)
      setType(res.data.type)
    })
  }

  return (
    <>
      <Alert message={message} type={type} />

      <div className='container'>
        <form onSubmit={handleSubmit}>
          <ShortInput func={setToken} info='Token' />
          <br />
          <button type='submit'>Validar</button>
        </form>
      </div>
    </>
  )
}
