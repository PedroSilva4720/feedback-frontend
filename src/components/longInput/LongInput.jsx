import React from 'react'

import './style.css'

export default ({ func, info, quest }) => {
  return (
    <>
      <div className='page'>
        <label className='field field_v1'>
          <textarea
            wrap='hard'
            type='text'
            name={info}
            className='field__input'
            placeholder={info}
            onChange={e => {
              func(e.target.value)
            }}
          />
          <span className='field__label-wrap'>
            <span className='field__label'>{info}</span>
          </span>
        </label>
      </div>
    </>
  )
}
