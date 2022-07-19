import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useLocation, useParams } from 'react-router-dom'

import NavBar from '../dashboard/components/NavBar'
import LongInput from '../../components/longInput/LongInput'
import Auth from '../../modules/Auth'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { getConfigsDefaultState, setMarkdownStatus } from '../../services'

import './style.css'

export default () => {
  const [data, setData] = useState()

  const location = useLocation()

  const { companyid } = useParams()

  const jwt = localStorage.getItem('auth')

  useEffect(() => {
    console.log('renderizou')
    getConfigsDefaultState(companyid, jwt).then(setData)
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

  const [useMarkdownChecked, setUseMarkdownChecked] = useState(
    localStorage.getItem('useMarkdown') == 'true'
  )
  const [useTokenChecked, setUseTokenChecked] = useState(
    localStorage.getItem('useToken') == 'true'
  )
  const [text, setText] = useState()

  const handleMarkdownStatusChange = () => {
    setUseMarkdownChecked(!useMarkdownChecked)
    localStorage.setItem('useMarkdown', !useMarkdownChecked)
    setMarkdownStatus(!useMarkdownChecked, companyid, jwt)
    notify()
  }

  const handleTokenStatusChange = () => {
    setUseTokenChecked(!useMarkdownChecked)
    localStorage.setItem('useToken', !useTokenChecked)
    setTokenStatus(!useTokenChecked, companyid, jwt)
    notify()
  }

  return (
    <>
      <Auth>
        <NavBar />
        <div className='container'>
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
                        defaultChecked={
                          localStorage.getItem('useMarkdown') == 'true'
                        }
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
                        defaultChecked={
                          localStorage.getItem('useToken') == 'true'
                        }
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
