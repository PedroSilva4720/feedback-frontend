import React from 'react'

export default ({ func, info }) => {
  return (
    <>
      <div className='page'>
        <label className='field field_v1'>
          <input
            type='password'
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
