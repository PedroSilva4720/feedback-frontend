import React, { useState } from 'react'

import './styles.css'

import SelectItem from '../../components/selectItem/SelectItem'
import ShortInput from '../../components/shortInput/ShortInput'

export default () => {
  const [quest00, setQ00] = useState('')
  const [quest01, setQ01] = useState('')
  const [quest02, setQ02] = useState('')
  const [quest03, setQ03] = useState('')
  const [quest10, setQ10] = useState('')
  const [quest11, setQ11] = useState('')
  const [quest12, setQ12] = useState('')
  const [quest13, setQ13] = useState('')
  const [quest20, setQ20] = useState('')
  const [quest21, setQ21] = useState('')
  const [quest22, setQ22] = useState('')
  const [quest23, setQ23] = useState('')
  const [quest30, setQ30] = useState('')
  const [quest31, setQ31] = useState('')
  const [quest32, setQ32] = useState('')
  const [quest33, setQ33] = useState('')
  const [quest40, setQ40] = useState('')
  const [quest41, setQ41] = useState('')
  const [quest42, setQ42] = useState('')
  const [quest43, setQ43] = useState('')
  const [quest50, setQ50] = useState('')
  const [quest51, setQ51] = useState('')
  const [quest52, setQ52] = useState('')
  const [quest53, setQ53] = useState('')
  const [quest60, setQ60] = useState('')
  const [quest61, setQ61] = useState('')
  const [quest62, setQ62] = useState('')
  const [quest63, setQ63] = useState('')
  const [quest70, setQ70] = useState('')
  const [quest71, setQ71] = useState('')
  const [quest72, setQ72] = useState('')
  const [quest73, setQ73] = useState('')
  const [quest80, setQ80] = useState('')
  const [quest81, setQ81] = useState('')
  const [quest82, setQ82] = useState('')
  const [quest83, setQ83] = useState('')
  const [quest90, setQ90] = useState('')
  const [quest91, setQ91] = useState('')
  const [quest92, setQ92] = useState('')
  const [quest93, setQ93] = useState('')
  let resp = []

  const quests = [
    quest01,
    quest11,
    quest21,
    quest31,
    quest41,
    quest51,
    quest61,
    quest71,
    quest81,
    quest91,
  ]

  const questsFunc = [
    [setQ00, setQ01, setQ02, setQ03],
    [setQ10, setQ11, setQ12, setQ13],
    [setQ20, setQ21, setQ22, setQ23],
    [setQ30, setQ31, setQ32, setQ33],
    [setQ40, setQ41, setQ42, setQ43],
    [setQ50, setQ51, setQ52, setQ53],
    [setQ60, setQ61, setQ62, setQ63],
    [setQ70, setQ71, setQ72, setQ73],
    [setQ80, setQ81, setQ82, setQ83],
    [setQ90, setQ91, setQ92, setQ83],
  ]

  for (let i = 0; i <= 9; i++) {
    resp.push(
      <>
        <div className='quest'>
          <h3>Pergunta {i + 1}</h3>
          <p>Digite a palavra-chave da pergunta</p>
          <ShortInput func={questsFunc[i][0]} info='Palavra-chave' />
          <p>Selecione o tipo</p>
          <SelectItem
            func={questsFunc[i][1]}
            options={['Selecionar', 'Digitar Curto', 'Digitar Longo', 'Nota']}
          />
          {quests[i] == 'Selecionar' ? (
            <>
              <p>Digite as opções separadas por vírgula</p>
              <ShortInput func={questsFunc[i][2]} info='Opções' />
            </>
          ) : (
            <></>
          )}
          <p>Digite o título da pergunta</p>
          <ShortInput func={questsFunc[i][3]} info='Título' />
        </div>
      </>
    )
  }
  return (
    <>
      <div className='container'>
        <div className='quests'>{resp.map(item => item)}</div>
      </div>
    </>
  )
}
