import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { createPost, getQuests } from '../../services'

import LongInput from '../../components/longInput/LongInput'
import Rate from '../../components/rate/Rate'
import SelectItem from '../../components/selectItem/SelectItem'
import ShortInput from '../../components/shortInput/ShortInput'

export default () => {
  const [quests, setQuests] = useState()
  const [quest0, setQ0] = useState('')
  const [quest1, setQ1] = useState('')
  const [quest2, setQ2] = useState('')
  const [quest3, setQ3] = useState('')
  const [quest4, setQ4] = useState('')
  const [quest5, setQ5] = useState('')
  const [quest6, setQ6] = useState('')
  const [quest7, setQ7] = useState('')
  const [quest8, setQ8] = useState('')
  const [quest9, setQ9] = useState('')
  const resp = []

  const navigate = useNavigate()
  const { companyid, userid } = useParams()

  const handleSubmit = async e => {
    e.preventDefault()
    const token = await createPost(
      {
        quest0,
        quest1,
        quest2,
        quest3,
        quest4,
        quest5,
        quest6,
        quest7,
        quest8,
        quest9,
      },
      userid
    )
    alert(token)
    navigate(`/create-user/${companyid}`, { replace: true })
  }

  getQuests(companyid).then(setQuests)

  const keys = {
    longInput: (func, value) => <LongInput func={func} info={value} />,
    rate: (func, value) => <Rate func={func} unique={value} />,
    selectItem: (func, options) => {
      const opt = options.toString().split(',')
      return <SelectItem func={func} options={opt} />
    },
    shortInput: (func, value) => <ShortInput func={func} info={value} />,
  }

  if (quests) {
    if (quests.quest0) {
      resp.push([
        quests.quest0Title,
        keys[quests.quest0Type](setQ0, quests.quest0Content),
      ])
    }
    if (quests.quest1) {
      resp.push([
        quests.quest1Title,
        keys[quests.quest1Type](setQ1, quests.quest1Content),
      ])
    }
    if (quests.quest2) {
      resp.push([
        quests.quest2Title,
        keys[quests.quest2Type](setQ2, quests.quest2Content),
      ])
    }
    if (quests.quest3) {
      resp.push([
        quests.quest3Title,
        keys[quests.quest3Type](setQ3, quests.quest3Content),
      ])
    }
    if (quests.quest4) {
      resp.push([
        quests.quest4Title,
        keys[quests.quest4Type](setQ4, quests.quest4Content),
      ])
    }
    if (quests.quest5) {
      resp.push([
        quests.quest5Title,
        keys[quests.quest5Type](setQ5, quests.quest5Content),
      ])
    }
    if (quests.quest6) {
      resp.push([
        quests.quest6Title,
        keys[quests.quest6Type](setQ6, quests.quest6Content),
      ])
    }
    if (quests.quest7) {
      resp.push([
        quests.quest7Title,
        keys[quests.quest7Type](setQ7, quests.quest7Content),
      ])
    }
    if (quests.quest8) {
      resp.push([
        quests.quest8Title,
        keys[quests.quest8Type](setQ8, quests.quest8Content),
      ])
    }
    if (quests.quest9) {
      resp.push([
        quests.quest9Title,
        keys[quests.quest9Type](setQ9, quests.quest9Content),
      ])
    }
  }
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          {resp.map(item => {
            return (
              <>
                <div className='quest'>
                  <p className='h4-postManagement'>{item[0]}</p>
                  {item[1]}
                </div>
              </>
            )
          })}
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </>
  )
}
