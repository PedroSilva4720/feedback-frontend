import React, { useState } from 'react'

export default ({ func, options }) => {
  const [selected, setSelected] = useState('')
  return (
    <>
      <select
        name=''
        id=''
        onChange={e => {
          e.preventDefault()
          setSelected(e.target.value)
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
    </>
  )
}
