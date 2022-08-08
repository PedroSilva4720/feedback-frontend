import React, { useState } from 'react'

import styles from './Rate.module.css'

export default function Rate({ func, unique }) {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [selected, setSelected] = useState('')

  return (
    <>
      <ul className={styles.rate} id={unique}>
        {options.map(item => {
          const item2 = item + unique
          return (
            <li className={styles.list} key={`${item2}`}>
              <p className={styles.title}>{item}</p>
              <input
                className={styles.radio}
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
              <span className={styles.design}></span>
            </li>
          )
        })}
      </ul>
    </>
  )
}
