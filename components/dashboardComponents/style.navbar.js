import { styled } from '@stitches/react'

import * as theme from '../../styles/theme'

export const Navbar = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2fr 3fr',
  justifyContent: 'space-between',
  padding: '20px 0px',
  backgroundColor: theme.screen.primaryBlue,
  textDecoration: 'none',
  color: 'white',
})

export const Links = styled('div', {
  display: 'flex',
  justifyContent: 'space-evenly',
})

export const LogoutLink = styled('a', {
  cursor: 'pointer',
  textAlign: 'end',
  margin: '0px 15px',
  textDecoration: 'none',
  color: 'white',
  '&:hover': {
    color: theme.screen.primaryGray,
    transition: 'color 0.5s',
  },
})

export const NavigateLink = styled('a', {
  textDecoration: 'none',
  color: 'white',
  '&:hover': {
    color: theme.screen.primaryGray,
    transition: 'color 0.5s',
  },
})
