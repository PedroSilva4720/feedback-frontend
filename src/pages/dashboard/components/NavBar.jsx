import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import './style.css'

export default () => {
  const navigate = useNavigate()

  const { companyid } = useParams()

  const logout = () => {
    localStorage.removeItem('auth')
    navigate('/login', { replace: true })
  }

  return (
    <>
      <div className='navBar'>
        <div className='links'>
          <Link to={`/editquests/${companyid}`}>Editar</Link>
          <Link to={`/dashboard/${companyid}`}>Dashboard</Link>
          <Link to={`/create-user/${companyid}`}>Criar Feedback</Link>
          <Link to='/verify'>Verificar</Link>
        </div>
        <a className='logout' onClick={logout}>
          Logout
        </a>
      </div>
    </>
  )
}
