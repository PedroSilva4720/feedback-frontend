import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { login } from '../../services'

import PassInput from '../../components/passInput/PassInput.jsx'
import ShortInput from '../../components/shortInput/ShortInput.jsx'

import { Container, SubmitButton } from '../../styles/styles'
import { Form } from './styles'

export default function Login() {
  const router = useRouter()

  useEffect(() => {
    localStorage.removeItem('auth')
  })

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    login(username, password).then(response => {
      const { managerToken, companyId } = response.response
      if (response.status == 200) {
        localStorage.setItem('auth', managerToken)
        router.push(`/dashboard/${companyId}`)
      }
    })
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <ShortInput func={setUsername} info={'Login'} />
          <PassInput func={setPassword} info={'Senha'} />
          <br />
          <SubmitButton>Enviar</SubmitButton>
        </Form>
      </Container>
      <ToastContainer />
    </>
  )
}
