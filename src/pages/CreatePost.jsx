import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { createPost } from '../services'
import Rate from '../components/rate/Rate.jsx'

export default props => {
  const [from, setFrom] = useState('')
  const [clean, setClean] = useState()
  const [service, setService] = useState()
  const [diversity, setDiversity] = useState()
  const [favorite, setFavorite] = useState('')
  const [price, setPrice] = useState()
  const [firstTime, setFirstTime] = useState(false)
  const [comment, setComment] = useState('')

  const navigate = useNavigate()
  const { userid } = useParams()

  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      from,
      clean,
      service,
      diversity,
      favorite,
      price,
      firstTime,
      comment,
    }
    const token = await createPost(data, userid)
    navigate('/create-user', { replace: true })
  }

  const fromFunction = value => setFrom(value)
  const cleanFunction = value => setClean(value)
  const serviceFunction = value => setService(value)
  const diversityFunction = value => setDiversity(value)
  const favoriteFunction = value => setFavorite(value)
  const priceFunction = value => setPrice(value)
  const firstTimeFunction = value => setFirstTime(value)
  const commentFuntion = value => setComment(value)

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <p>from</p>
        <p>Avalie a Limpeza do espaço:</p>
        <Rate func={cleanFunction} />
        <p>Avalie o atendimento:</p>
        <Rate func={serviceFunction} />
        <p>Avalie a diversidade de animais:</p>
        <Rate func={diversityFunction} />
        <p>favorite</p>
        <p>Avalie o preço:</p>
        <Rate func={priceFunction} />
        <p>firstTime</p>
        <p>Comment</p>
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}
