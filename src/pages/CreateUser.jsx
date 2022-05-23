import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { createUser } from '../services/index.js'

export default props => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const userToken = await createUser(name, email, phone)
    navigate(`/create-post/${userToken}`, { replace: true })
  }

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <label htmlFor='input'>
          Nome:
          <input
            type='text'
            name='nome'
            onChange={event => setName(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor='input'>
          Email:
          <input
            type='email'
            name='email'
            onChange={event => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor='input'>
          Telefone:
          <input
            type='number'
            name='phone'
            onChange={event => setPhone(event.target.value)}
            onKeyPress={event => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault()
              }
            }}
          />
        </label>
        <br />
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}
