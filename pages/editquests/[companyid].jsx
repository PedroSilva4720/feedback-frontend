import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { useRouter } from 'next/router'

import SelectItem from '../../components/selectItem/SelectItem'
import ShortInput from '../../components/shortInput/ShortInput'
import NavBar from '../../components/dashboardComponents/NavBar'
import Auth from '../../modules/Auth'

import { sendQuestsConfigs } from '../../services'
import { negativeNotify } from '../../modules/Alerts'

import styles from './EditQuests.module.css'
import { Card, CardsContainer, Container } from './style'

export default function EditQuests() {
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
    [setQ90, setQ91, setQ92, setQ93],
  ]
  const router = useRouter()
  const { companyid } = router.query

  for (let i = 0; i <= 9; i++) {
    resp.push(
      <>
        <h3>Pergunta {i + 1}</h3>
        <p>Digite a palavra-chave da pergunta</p>
        <ShortInput func={questsFunc[i][0]} info='Palavra-chave' />
        <p>Selecione o tipo</p>
        <SelectItem
          func={questsFunc[i][1]}
          options={['selectItem', 'shortInput', 'longInput', 'rate']}
        />
        {quests[i] == 'selectItem' && (
          <>
            <p>Digite as opções separadas por vírgula</p>
            <ShortInput func={questsFunc[i][2]} info='Opções' />
          </>
        )}
        <p>Digite o título da pergunta</p>
        <ShortInput func={questsFunc[i][3]} info='Título' />
      </>
    )
  }

  const handleSubmit = e => {
    const auth = localStorage.getItem('auth')
    if (companyid == undefined) {
      negativeNotify('Falha ao salvar.')
    }
    sendQuestsConfigs(companyid, auth, {
      quest0: quest00,
      quest0Type: quest01,
      quest0Content: quest01 == 'selectItem' ? quest02 : quest00,
      quest0Title: quest03,
      quest1: quest10,
      quest1Type: quest11,
      quest1Content: quest11 == 'selectItem' ? quest12 : quest10,
      quest1Title: quest13,
      quest2: quest20,
      quest2Type: quest21,
      quest2Content: quest21 == 'selectItem' ? quest22 : quest20,
      quest2Title: quest23,
      quest3: quest30,
      quest3Type: quest31,
      quest3Content: quest31 == 'selectItem' ? quest32 : quest30,
      quest3Title: quest33,
      quest4: quest40,
      quest4Type: quest41,
      quest4Content: quest41 == 'selectItem' ? quest42 : quest40,
      quest4Title: quest43,
      quest5: quest50,
      quest5Type: quest51,
      quest5Content: quest51 == 'selectItem' ? quest52 : quest50,
      quest5Title: quest53,
      quest6: quest60,
      quest6Type: quest61,
      quest6Content: quest61 == 'selectItem' ? quest62 : quest60,
      quest6Title: quest63,
      quest7: quest70,
      quest7Type: quest71,
      quest7Content: quest71 == 'selectItem' ? quest72 : quest70,
      quest7Title: quest73,
      quest8: quest80,
      quest8Type: quest81,
      quest8Content: quest81 == 'selectItem' ? quest82 : quest80,
      quest8Title: quest83,
      quest9: quest90,
      quest9Type: quest91,
      quest9Content: quest91 == 'selectItem' ? quest92 : quest90,
      quest9Title: quest93,
    })
    router.push(`/editquests/${companyid}`)
  }

  return (
    <>
      <Auth>
        <NavBar companyid={companyid} />
        <form className={styles.form} onSubmit={handleSubmit}>
          <Container>
            <CardsContainer>
              {resp.map(item => (
                <Card>{item}</Card>
              ))}
            </CardsContainer>
            <button className={styles.btn_submit} type='submit'>
              Salvar
            </button>
          </Container>
        </form>
      </Auth>
      <ToastContainer />
    </>
  )
}
