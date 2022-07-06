import React, { useState } from 'react'

import './style.css'

export default ({ message, type }) => {
  const [display, setDisplay] = useState(true)

  const Positive = ({ message }) => (
    <>
      {display ? (
        <>
          <div className='positive alert'>
            <span className='closebtn' onClick={() => setDisplay(false)}>
              &times;
            </span>
            {message}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )

  const Negative = ({ message }) => (
    <>
      {display ? (
        <>
          <div className='negative alert'>
            <span className='closebtn' onClick={() => setDisplay(false)}>
              &times;
            </span>
            {message}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )

  const Markdown = ({ message }) => (
    <>
      <div className='markdown'>
        <p className='p-icons'>under development</p>
      </div>
    </>
  )

  const types = {
    positive: message => <Positive message={message} />,
    negative: message => <Negative message={message} />,
    markdown: message => <Markdown message={message} />,
    '': () => <></>,
  }

  return <>{types[type](message, display, setDisplay)}</>
}
