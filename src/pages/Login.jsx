import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../services'

import PassInput from '../components/passInput/PassInput.jsx'
import ShortInput from '../components/shortInput/ShortInput.jsx'

export default () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await login(username, password)
    if (response.status == 200) {
      localStorage.setItem('auth', response.message)
      navigate(`/dashboard/`, { replace: true })
    }
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <ShortInput func={setUsername} info={'Login'} />
          <PassInput func={setPassword} info={'Senha'} />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </>
  )
}
