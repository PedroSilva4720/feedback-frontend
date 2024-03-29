import React from 'react'

import styles from './LongInput.module.css'

export default function LongInput({ func, info, quest }) {
  return (
    <>
      <div className={styles.page}>
        <label className={styles.field}>
          <textarea
            wrap='hard'
            type='text'
            name={info}
            className={styles.field__input}
            placeholder={info}
            onChange={e => {
              func(e.target.value)
            }}
          />
          <span className={styles.field__label_wrap}>
            <span className={styles.field__label}>{info}</span>
          </span>
        </label>
      </div>
    </>
  )
}
