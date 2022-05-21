import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { createPost } from '../services'

export default props => {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const { userid } = useParams()

  const handleSubmit = async e => {
    e.preventDefault()
    const token = await createPost(data, userid)
    alert(token)
    navigate('/create-user', { replace: true })
  }

  return (
    <>
      <h1>{userid}</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor='input'>
          <input
            type='text'
            name='from'
            onChange={event => setData({ from: event.target.value })}
          />
        </label>
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}
