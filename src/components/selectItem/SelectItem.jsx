import React from 'react'

import './style.css'

export default ({ func, options, quest }) => {
  return (
    <>
      <div className='box'>
        <select
          name=''
          id=''
          onChange={e => {
            e.preventDefault()
            func(e.target.value)
          }}
          defaultValue=''
        >
          <option value='' disabled></option>
          {options.map((item, key) => {
            return (
              <option key={key} value={item}>
                {item}
              </option>
            )
          })}
        </select>
      </div>
    </>
  )
}
