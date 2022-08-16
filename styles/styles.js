import { styled } from '@stitches/react'
import * as theme from './theme'

export const Container = styled('div', {
  backgroundColor: theme.screen.backgroundGray,

  display: 'flex',
  width: '100%',
  minHeight: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
})

export const SubmitButton = styled('button', {
  background: theme.screen.primaryBlue,

  border: 'none',
  outline: 'none',
  color: '#ecf8f8',
  borderRadius: '5px',
  textAlign: 'center',
  boxShadow: '0 6px 20px -5px rgba(0, 0, 0, 0.4)',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',

  fontSize: '22px',
  width: '230px',
  height: '60px',
})
