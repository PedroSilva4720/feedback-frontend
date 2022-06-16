import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ShortInput from '../components/shortInput/ShortInput.jsx'
import { createUser } from '../services/index.js'

export default props => {
  const { companyid } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const userToken = await createUser(name, email, phone, companyid)
    navigate(`/create-post/${companyid}/${userToken}`, { replace: true })
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit} autoComplete='off'>
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
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </>
  )
}
