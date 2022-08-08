import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { useRouter } from 'next/router'
// import { Link, useParams, useNavigate } from 'react-router-dom'

import styles from './Components.module.css'

export default function NavBar({ companyid }) {
  const router = useRouter()
  // const navigate = useNavigate()
  // const router = useRouter()

  const logout = () => {
    localStorage.removeItem('auth')
    router.push('/login')
  }

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.links}>
          <Link href={`/editquests/${encodeURIComponent(companyid)}`}>
            <a>Editar</a>
          </Link>
          <Link href={`/dashboard/${companyid}`}>
            <a>Dashboard</a>
          </Link>
          <Link href={`/create-user/${companyid}`}>
            <a>Criar Feedback</a>
          </Link>
          <Link href='/verify'>
            <a>Verificar</a>
          </Link>
          <Link href={`/configs/${companyid}`}>
            <a>Configurações</a>
          </Link>
        </div>
        <a className={styles.logout} onClick={logout}>
          Logout
        </a>
      </div>
    </>
  )
}
