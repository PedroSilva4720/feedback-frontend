import React, { useState } from 'react'

import './style.css'

export default ({ func }) => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [selected, setSelected] = useState()

  return (
    <>
      <ul>
        {options.map((item, key) => {
          return (
            <li key={key}>
              <p>{item}</p>
              <input
                type='radio'
                name={item}
                id={item}
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
