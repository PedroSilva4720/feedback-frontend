import React from 'react'

export default ({ list, quests }) => {
  const tags = quests
    ? [
        quests.quest0,
        quests.quest1,
        quests.quest2,
        quests.quest3,
        quests.quest4,
        quests.quest5,
        quests.quest6,
        quests.quest7,
        quests.quest8,
        quests.quest9,
      ]
    : null

  return (
    <>
      <ul className='ul-dashboard'>
        {list.map((item, index) => {
          return item ? (
            <li key={`${item.id}${index}${item.id}`} className='li-dashboard'>
              {item.quest0 ? (
                <React.Fragment key={`${item.id}${index}${tags[0]}`}>
                  <h4 className='h4-dashboard'>{tags[0]}</h4>
                  <p>{item.quest0}</p>
                </React.Fragment>
              ) : (
                <></>
              )}
              {item.quest1 ? (
                <React.Fragment key={`${item.id}${index}${tags[1]}`}>
                  <h4 className='h4-dashboard'>{tags[1]}</h4>
                  <p>{item.quest1}</p>
                </React.Fragment>
              ) : (
                <></>
              )}
              {item.quest2 ? (
                <React.Fragment key={`${item.id}${index}${tags[2]}`}>
                  <h4 className='h4-dashboard'>{tags[2]}</h4>
                  <p>{item.quest2}</p>
                </React.Fragment>
              ) : (
                <></>
              )}
              {item.quest3 ? (
                <React.Fragment key={`${item.id}${index}${tags[3]}`}>
                  <h4 className='h4-dashboard'>{tags[3]}</h4>
                  <p>{item.quest3}</p>
                </React.Fragment>
              ) : (
                <></>
              )}
              {item.quest4 ? (
                <React.Fragment key={`${item.id}${index}${tags[4]}`}>
                  <h4 className='h4-dashboard'>{tags[4]}</h4>
                  <p>{item.quest4}</p>
                </React.Fragment>
              ) : (
                <></>
              )}
              {item.quest5 ? (
                <React.Fragment key={`${item.id}${index}${tags[5]}`}>
                  <h4 className='h4-dashboard'>{tags[5]}</h4>
                  <p>{item.quest5}</p>
                </React.Fragment>
              ) : (
                <></>
              )}
              {item.quest6 ? (
                <React.Fragment key={`${item.id}${index}${tags[6]}`}>
                  <h4 className='h4-dashboard'>{tags[6]}</h4>
                  <p>{item.quest6}</p>
                </React.Fragment>
              ) : (
                <></>
              )}
              {item.quest7 ? (
                <React.Fragment key={`${item.id}${index}${tags[7]}`}>
                  <h4 className='h4-dashboard'>{tags[7]}</h4>
                  <p>{item.quest7}</p>
                </React.Fragment>
              ) : (
                <></>
              )}
              {item.quest8 ? (
                <React.Fragment key={`${item.id}${index}${tags[8]}`}>
                  <h4 className='h4-dashboard'>{tags[8]}</h4>
                  <p>{item.quest8}</p>
                </React.Fragment>
              ) : (
                <></>
              )}
              {item.quest9 ? (
                <React.Fragment key={`${item.id}${index}${tags[9]}`}>
                  <h4 className='h4-dashboard'>{tags[9]}</h4>
                  <p>{item.quest9}</p>
                </React.Fragment>
              ) : (
                <></>
              )}
            </li>
          ) : (
            <></>
          )
        })}
      </ul>
    </>
  )
}
