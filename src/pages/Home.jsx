import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <>
      <div className='container'>
        <Link to='/create-user'>Criar usuario</Link>
        <p>---------</p>
        <br />
        <Link to='/login'>Login</Link>
      </div>
    </>
  )
}
