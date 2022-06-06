import React, { useState } from 'react'

import ShortInput from '../../components/shortInput/ShortInput'
import { validateToken } from '../../services'

import './style.css'

export default () => {
  const [token, setToken] = useState('')

  const handleSubmit = async e => {
    const res = await validateToken(token)
    alert(res.data)
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <ShortInput func={setToken} info='Token' />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </>
  )
}
