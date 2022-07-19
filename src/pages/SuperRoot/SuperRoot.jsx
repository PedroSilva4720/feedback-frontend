import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('auth')
    navigate('/login', { replace: true })
  }

  const NavBar = () => (
    <>
      <Bar>
        <NavBarLinks>
          <LinkReactRouterDom to='/'> Criar Empresa</LinkReactRouterDom>
          <LinkReactRouterDom to='/'> Criar Manager</LinkReactRouterDom>
        </NavBarLinks>
        <LogOut onClick={handleLogout}>Logout</LogOut>
      </Bar>
    </>
  )

  return (
    <>
      <NavBar />
    </>
  )
}

const Bar = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  justify-content: space-between;
  padding: 20px 0px;
  background-color: #457498;
  text-decoration: none;
  color: white;
`

const LinkReactRouterDom = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: #125488;
    transition: color 0.5s;
  }
`

const NavBarLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const LogOut = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: #125488;
    transition: color 0.5s;
  }
  cursor: pointer;
  text-align: end;
  margin: 0px 15px;
`
