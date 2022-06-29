import React, { useEffect } from 'react'
import Circle from './Circle'
import chroma from 'chroma-js'

export default ({ list, quests }) => {
  const colors = chroma.scale(['#f55f5f', '#91f55f']).mode('lch').colors(100)

  let arr = [
    [[], 0, ''],
    [[], 0, ''],
    [[], 0, ''],
    [[], 0, ''],
    [[], 0, ''],
    [[], 0, ''],
    [[], 0, ''],
    [[], 0, ''],
    [[], 0, ''],
    [[], 0, ''],
  ]

  if (list) {
    if (quests.quest0Type == 'rate') {
      list.forEach(item => {
        if (item) {
          arr[0][0].push(parseInt(item.quest0))
        }
      })
      for (let i of arr[0][0]) {
        arr[0][1] += i
      }
      arr[0][2] = (
        <>
          <div className='average-item'>
            <Circle
              label={quests.quest0}
              percentage={(arr[0][1] / arr[0][0].length).toFixed(2) * 10}
              colour={colors[(arr[0][1] / arr[0][0].length).toFixed()]}
            />
          </div>
        </>
      )
    }

    if (quests.quest1Type == 'rate') {
      list.forEach(item => {
        if (item) {
          arr[1][0].push(parseInt(item.quest1))
        }
      })

      for (let i of arr[1][0]) {
        arr[1][1] += i
      }
      arr[1][2] = (
        <>
          <div className='average-item'>
            <Circle
              label={quests.quest1}
              percentage={(arr[1][1] / arr[1][0].length).toFixed(2) * 10}
              colour={colors[(arr[1][1] / arr[1][0].length).toFixed(1) * 10]}
            />
          </div>
        </>
      )
    }
    if (quests.quest2Type == 'rate') {
      list.forEach(item => {
        if (item) {
          arr[2][0].push(parseInt(item.quest2))
        }
      })
      for (let i of arr[2][0]) {
        arr[2][1] += i
        arr[2][2] = (
          <>
            <div className='average-item'>
              <Circle
                label={quests.quest2}
                percentage={(arr[2][1] / arr[2][0].length).toFixed(2) * 10}
                colour={colors[(arr[2][1] / arr[2][0].length).toFixed(1) * 10]}
              />
            </div>
          </>
        )
      }
    }

    if (quests.quest3Type == 'rate') {
      list.forEach(item => {
        if (item) {
          arr[3][0].push(parseInt(item.quest3))
        }
      })
      for (let i of arr[3][0]) {
        arr[3][1] += i
        arr[3][2] = (
          <>
            <div className='average-item'>
              <Circle
                label={quests.quest3}
                percentage={(arr[3][1] / arr[3][0].length).toFixed(2) * 10}
                colour={colors[(arr[3][1] / arr[3][0].length).toFixed(1) * 10]}
              />
            </div>
          </>
        )
      }
    }
    if (quests.quest4Type == 'rate') {
      list.forEach(item => {
        if (item) {
          arr[4][0].push(parseInt(item.quest4))
        }
      })
      for (let i of arr[4][0]) {
        arr[4][1] += i
        arr[4][2] = (
          <>
            <div className='average-item'>
              <Circle
                label={quests.quest4}
                percentage={(arr[4][1] / arr[4][0].length).toFixed(2) * 10}
                colour={colors[(arr[4][1] / arr[4][0].length).toFixed(1) * 10]}
              />
            </div>
          </>
        )
      }
    }
    if (quests.quest5Type == 'rate') {
      list.forEach(item => {
        if (item) {
          arr[5][0].push(parseInt(item.quest5))
        }
      })
      for (let i of arr[5][0]) {
        arr[5][1] += i
        arr[5][2] = (
          <>
            <div className='average-item'>
              <Circle
                label={quests.quest5}
                percentage={(arr[5][1] / arr[5][0].length).toFixed(2) * 10}
                colour={colors[(arr[5][1] / arr[5][0].length).toFixed(1) * 10]}
              />
            </div>
          </>
        )
      }
    }

    if (quests.quest6Type == 'rate') {
      list.forEach(item => {
        if (item) {
          arr[6][0].push(parseInt(item.quest6))
        }
      })
      for (let i of arr[6][0]) {
        arr[6][1] += i
        arr[6][2] = (
          <>
            <div className='average-item'>
              <Circle
                label={quests.quest6}
                percentage={(arr[6][1] / arr[6][0].length).toFixed(2) * 10}
                colour={colors[(arr[6][1] / arr[6][0].length).toFixed(1) * 10]}
              />
            </div>
          </>
        )
      }
    }
    if (quests.quest7Type == 'rate') {
      list.forEach(item => {
        if (item) {
          arr[7][0].push(parseInt(item.quest7))
        }
      })
      for (let i of arr[7][0]) {
        arr[7][1] += i
        arr[7][2] = (
          <>
            <div className='average-item'>
              <Circle
                label={quests.quest7}
                percentage={(arr[7][1] / arr[7][0].length).toFixed(2) * 10}
                colour={colors[(arr[7][1] / arr[7][0].length).toFixed(1) * 10]}
              />
            </div>
          </>
        )
      }
    }

    if (quests.quest8Type == 'rate') {
      list.forEach(item => {
        if (item) {
          arr[8][0].push(parseInt(item.quest8))
        }
      })
      for (let i of arr[8][0]) {
        arr[8][1] += i
        arr[8][2] = (
          <>
            <div className='average-item'>
              <Circle
                label={quests.quest8}
                percentage={(arr[8][1] / arr[8][0].length).toFixed(2) * 10}
                colour={colors[(arr[8][1] / arr[8][0].length).toFixed(1) * 10]}
              />
            </div>
          </>
        )
      }
    }
    if (quests.quest9Type == 'rate') {
      list.forEach(item => {
        if (item) {
          arr[9][0].push(parseInt(item.quest9))
        }
      })
      for (let i of arr[9][0]) {
        arr[9][1] += i
        arr[9][2] = (
          <>
            <div className='average-item'>
              <Circle
                label={quests.quest9}
                percentage={(arr[9][1] / arr[9][0].length).toFixed(2) * 10}
                colour={colors[(arr[9][1] / arr[9][0].length).toFixed(1) * 10]}
              />
            </div>
          </>
        )
      }
    }
  }

  return (
    <>
      <div className='average'>
        {arr[0][2] ? arr[0][2] : <></>}
        {arr[1][2] ? arr[1][2] : <></>}
        {arr[2][2] ? arr[2][2] : <></>}
        {arr[3][2] ? arr[3][2] : <></>}
        {arr[4][2] ? arr[4][2] : <></>}
        {arr[5][2] ? arr[5][2] : <></>}
        {arr[6][2] ? arr[6][2] : <></>}
        {arr[7][2] ? arr[7][2] : <></>}
        {arr[8][2] ? arr[8][2] : <></>}
        {arr[9][2] ? arr[9][2] : <></>}
      </div>
    </>
  )
}
