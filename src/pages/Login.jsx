import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '../services'

import PassInput from '../components/passInput/PassInput.jsx'
import ShortInput from '../components/shortInput/ShortInput.jsx'

export default () => {
  const navigate = useNavigate()

  localStorage.removeItem('auth')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    login(username, password).then(response => {
      const { managerToken, companyId } = response.response
      if (response.status == 200) {
        localStorage.setItem('auth', managerToken)
        navigate(`/dashboard/${companyId}`, { replace: true })
      }
    })
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <ShortInput func={setUsername} info={'Login'} />
          <PassInput func={setPassword} info={'Senha'} />
          <br />
          <button className='btn-submit' type='submit'>
            Enviar
          </button>
        </form>
      </div>
    </>
  )
}
