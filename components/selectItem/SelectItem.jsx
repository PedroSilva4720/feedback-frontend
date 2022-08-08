import React from 'react'

import styles from './SelectItem.module.css'

export default ({ func, options }) => {
  return (
    <>
      <div className={styles.box}>
        <select
          className={styles.select}
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
