import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

import NavBar from '../../components/dashboardComponents/NavBar'
import LongInput from '../../components/longInput/LongInput'
import Auth from '../../modules/Auth'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  getConfigsDefaultState,
  setMarkdownStatus,
  setTokenStatus,
} from '../../services'

import styles from './Configs.module.css'
import e from 'express'

//TODO update this page to work with nextJs

export default function Configs() {
  const [data, setData] = useState()

  const router = useRouter()
  const { companyid } = router.query

  let jwt = ''

  useEffect(() => {
    jwt = localStorage.getItem('auth')
    getConfigsDefaultState(companyid, jwt).then(response => {
      if (response.error) {
        return
      }
      setData(response)
    })
  }, [])

  useEffect(() => {
    if (data) {
      const { useMarkdown, useToken } = data
      localStorage.setItem('useMarkdown', useMarkdown)
      localStorage.setItem('useToken', useToken)
    }
  }, [data])

  const notify = () => {
    toast.success('Salvo com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  const [useMarkdownChecked, setUseMarkdownChecked] = useState(false)
  const [useTokenChecked, setUseTokenChecked] = useState(false)
  const [text, setText] = useState()

  useEffect(() => {
    setUseMarkdownChecked(localStorage.getItem('useMarkdown') == 'true')
    setUseTokenChecked(localStorage.getItem('useToken') == 'true')
  }, [])

  const handleMarkdownStatusChange = () => {
    setUseMarkdownChecked(!useMarkdownChecked)
    localStorage.setItem('useMarkdown', !useMarkdownChecked)
    setMarkdownStatus(!useMarkdownChecked, companyid, jwt).then(response => {
      if (response.error) {
        return
      } else {
        notify()
      }
    })
  }

  const handleTokenStatusChange = () => {
    setUseTokenChecked(!useMarkdownChecked)
    localStorage.setItem('useToken', !useTokenChecked)
    setTokenStatus(!useTokenChecked, companyid, jwt).then(response => {
      if (response.error) {
        return
      } else {
        notify()
      }
    })
  }

  return (
    <>
      {/* TODO updtade className to nextJs format */}
      <Auth>
        <NavBar />
        <div className={styles.container}>
          <div className='mark-page'>
            <form style={{ marginBottom: '50px' }}>
              <div className='select-area'>
                <div className='select-area-flex'>
                  <div className='select-area-text'>
                    <p>Usar Markdown de apresentação?</p>
                    <p>Usar Token?</p>
                  </div>
                  <div className='label-select-area'>
                    <div className='input'>
                      <input
                        type='checkbox'
                        id='toggle_checkbox1'
                        defaultChecked={useMarkdownChecked}
                        onChange={() => handleMarkdownStatusChange()}
                      />
                      <label
                        className='label'
                        htmlFor='toggle_checkbox1'
                      ></label>
                    </div>
                    <div className='input'>
                      <input
                        type='checkbox'
                        id='toggle_checkbox2'
                        defaultChecked={useTokenChecked}
                        onChange={() => handleTokenStatusChange()}
                      />
                      <label
                        className='label'
                        htmlFor='toggle_checkbox2'
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <form>
              <LongInput className='markdown' func={setText} info='Markdown' />
              <br />
              <p>preview</p> <br />
              <br />
              <div
                style={
                  text
                    ? { border: '1px solid #125488', padding: '5px' }
                    : { border: 'none' }
                }
              >
                <ReactMarkdown>{text}</ReactMarkdown>
              </div>
              <br />
              <br />
              <button className='save-button' type='submit'>
                Salvar
              </button>
            </form>
          </div>
        </div>
      </Auth>
      <ToastContainer />
    </>
  )
}
