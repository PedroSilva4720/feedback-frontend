import React, { useState } from 'react'

import ShortInput from '../../components/shortInput/ShortInput'
import { useToken } from '../../services'

export default () => {
  const [token, setToken] = useState()

  const handleSubmit = e => {
    e.preventDefault()
    console.log(token)
    useToken(token).then(res => alert(res.data))
  }

  return (
    <>
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
