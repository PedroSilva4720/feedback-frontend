import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Links, Navbar, LogoutLink, NavigateLink } from './style.navbar'

export default function NavBar({ companyid }) {
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem('auth')
    router.push('/login')
  }

  return (
    <>
      <Navbar>
        <Links>
          <Link href={`/editquests/${companyid}`}>
            <NavigateLink>Editar</NavigateLink>
          </Link>
          <Link href={`/dashboard/${companyid}`}>
            <NavigateLink>Dashboard</NavigateLink>
          </Link>
          <Link href={`/create-user/${companyid}`}>
            <NavigateLink>Criar Feedback</NavigateLink>
          </Link>
          <Link href='/verify'>
            <NavigateLink>Verificar</NavigateLink>
          </Link>
          <Link href={`/configs/${companyid}`}>
            <NavigateLink>Configurações</NavigateLink>
          </Link>
        </Links>
        <LogoutLink onClick={logout}>Logout</LogoutLink>
      </Navbar>
    </>
  )
}
