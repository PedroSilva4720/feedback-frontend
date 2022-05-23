import React, { useState } from 'react'

import ShortInput from '../components/shortInput/ShortInput'
import { validateToken } from '../services'

export default () => {
  const [token, setToken] = useState('')

  const handleSubmit = async e => {
    const res = await validateToken(token)
    alert(res.data)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ShortInput func={setToken} />
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}
