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

  const firstTimeFunction = value => {
    const keys = {
      Sim: true,
      Não: false,
    }
    setFirstTime(keys[value])
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <p>De qual atividade você pertence?</p>
          <SelectItem
            func={setFrom}
            options={['Café da Manhã', 'Almoço', 'PicNic']}
          />
          <p>Avalie a Limpeza do espaço:</p>
          <Rate func={setClean} unique='1' />
          <p>Avalie o atendimento:</p>
          <Rate func={setService} unique='2' />
          <p>Avalie a diversidade de animais:</p>
          <Rate func={setDiversity} unique='3' />
          <p>Qual foi seu animal favorito?</p>
          <ShortInput func={setFavorite} info='Animal' />
          <p>Avalie o preço:</p>
          <Rate func={setPrice} unique='4' />
          <p>Sua primeira vez na Fazendinha?</p>
          <SelectItem func={firstTimeFunction} options={['Sim', 'Não']} />
          <p>Por fim, deixe um comentário:</p>
          <LongInput func={setComment} info='Comentário' />
          <br />
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </>
  )
}
