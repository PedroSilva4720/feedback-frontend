import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { createPost } from '../services'
import Rate from '../components/rate/Rate.jsx'
import SelectItem from '../components/selectItem/SelectItem'
import ShortInput from '../components/shortInput/ShortInput'
import LongInput from '../components/longInput/LongInput'

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
    alert(token)
    navigate('/create-user', { replace: true })
  }

  const fromFunction = value => setFrom(value)
  const cleanFunction = value => setClean(value)
  const serviceFunction = value => setService(value)
  const diversityFunction = value => setDiversity(value)
  const favoriteFunction = value => setFavorite(value)

  const priceFunction = value => setPrice(value)
  const firstTimeFunction = value => {
    const keys = {
      Sim: true,
      Não: false,
    }
    setFirstTime(keys[value])
  }
  const commentFunction = value => setComment(value)

  return (
    <>
      <p>{firstTime}</p>
      <form onSubmit={e => handleSubmit(e)}>
        <p>from</p>
        <SelectItem
          func={fromFunction}
          options={['Café da Manhã', 'Almoço', 'PicNic']}
        />
        <p>Avalie a Limpeza do espaço:</p>
        <Rate func={cleanFunction} unique='1' />
        <p>Avalie o atendimento:</p>
        <Rate func={serviceFunction} unique='2' />
        <p>Avalie a diversidade de animais:</p>
        <Rate func={diversityFunction} unique='3' />
        <p>Qual foi seu animal favorito?</p>
        <ShortInput func={favoriteFunction} />
        <p>Avalie o preço:</p>
        <Rate func={priceFunction} unique='4' />
        <p>Sua primeira vez na Fazendinha?</p>
        <SelectItem func={firstTimeFunction} options={['Sim', 'Não']} />
        <p>Por fim, deixe um comentário:</p>
        <LongInput func={commentFunction} />
        <br />
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}
