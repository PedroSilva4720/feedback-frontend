import { styled } from '@stitches/react'
import * as theme from '../../styles/theme'

export const Card = styled('div', {
  backgroundColor: '#fff',
  margin: '10px',
  padding: '30px',
  minHeight: '200px',
  maxHeight: '400px',
  borderRadius: '15px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
})

export const CardsContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
})

export const Container = styled('div', {
  backgroundColor: theme.screen.backgroundGray,
  width: '100%',
  minHeight: '100vh',
})
