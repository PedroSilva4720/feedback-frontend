import React from 'react'

export default ({ items }) => {
  return (
    <>
      <ul className='ul-dashboard'>
        {items.map((item, index) => {
          const firstTime = {
            true: 'Sim',
            false: 'Não',
          }
          return (
            <li className='li-dashboard' key={index}>
              <h4 className='h4-dashboard'>Atividade: </h4>
              <p>{item.from}</p>
              <h4 className='h4-dashboard'>Limpeza: </h4>
              <p>{item.clean}</p>
              <h4 className='h4-dashboard'>Atendimento: </h4>
              <p>{item.service}</p>
              <h4 className='h4-dashboard'>Diversidade: </h4>
              <p>{item.diversity}</p>
              <h4 className='h4-dashboard'>Favorito: </h4>
              <p>{item.favorite}</p>
              <h4 className='h4-dashboard'>Preço: </h4>
              <p>{item.price}</p>
              <h4 className='h4-dashboard'>Primeira vez: </h4>
              <p>{firstTime[item.firstTime]}</p>
              <h4 className='h4-dashboard'>Comentário: </h4>
              <p>{item.comment}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}
