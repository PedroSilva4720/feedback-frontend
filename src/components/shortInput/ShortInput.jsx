import React from 'react'

export default ({ func }) => {
  return (
    <>
      <input
        type='text'
        name=''
        id=''
        onChange={e => {
          func(e.target.value)
        }}
      />
    </>
  )
}
