import React, { useState } from 'react'

import './style.css'

export default ({ func, unique }) => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [selected, setSelected] = useState('')

  return (
    <>
      <ul id={unique}>
        {options.map(item => {
          const item2 = item + unique
          return (
            <li key={`${item2}`}>
              <p>{item}</p>
              <input
                type='radio'
                name={item2}
                id={item2}
                checked={selected == item}
                onChange={e => {
                  setSelected(item)
                  func(item)
                }}
                value={selected}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}