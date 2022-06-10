import React, { useState } from 'react'

import './style.css'

export default ({ func, unique }) => {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [selected, setSelected] = useState('')

  return (
    <>
      <ul className='rate' id={unique}>
        {options.map(item => {
          const item2 = item + unique
          return (
            <li className='list' key={`${item2}`}>
              <p>{item}</p>
              <input
                className='radio'
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
              <span class='design'></span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
