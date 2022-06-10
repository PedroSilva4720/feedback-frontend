import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <>
      <Link to='/create-user'>Criar usuario</Link>
      <br />
      <Link to='/login'>Login</Link>
    </>
  )
}
