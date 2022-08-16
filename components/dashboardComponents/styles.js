import { styled } from '@stitches/react'

import * as theme from '../../styles/theme'

export const Card = styled('div', {
  position: 'relative',
  backgroundColor: 'White',
  margin: '10px',
  padding: '10px',
  minHeight: '200px',
  maxHeight: '400px',
  overflow: 'auto',
  paddingBottom: '10px',
  borderRadius: '15px',
  listStyle: 'none',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderTop: `35px solid ${theme.screen.secondaryBlue}`,
})

export const Cards = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  minHeight: '100vh',
  borderRight: '1px solid rgba(0, 0, 0, 0.05)',
})

export const UserInfo = styled('div', {
  position: 'absolute',
  top: '-30px',
  left: '15px',
})

export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
})

export const AverageContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  '&>*': {
    paddingTop: '10px',
  },
})

export const LabelText = styled('h4', {
  marginTop: '20px',
  color: theme.screen.primaryGray,
  fontWeight: 300,
})
