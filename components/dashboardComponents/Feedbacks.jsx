import React from 'react'
import { Card, Cards, Content, UserInfo, LabelText } from './styles'

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
      <Cards>
        {/* <ul className='ul-dashboard'> */}
        {list.map((item, index) => {
          return (
            <>
              <Card>
                <UserInfo>
                  <p>Nome</p>
                </UserInfo>
                <Content>
                  {item && (
                    <li
                      key={`${item.id}${index}${item.id}`}
                      className='li-dashboard'
                    >
                      {item.quest0 && (
                        <React.Fragment key={`${item.id}${index}${tags[0]}`}>
                          <LabelText className='LabelText-dashboard'>
                            {tags[0]}
                          </LabelText>
                          <p>{item.quest0}</p>
                        </React.Fragment>
                      )}
                      {item.quest1 && (
                        <React.Fragment key={`${item.id}${index}${tags[1]}`}>
                          <LabelText className='LabelText-dashboard'>
                            {tags[1]}
                          </LabelText>
                          <p>{item.quest1}</p>
                        </React.Fragment>
                      )}
                      {item.quest2 && (
                        <React.Fragment key={`${item.id}${index}${tags[2]}`}>
                          <LabelText className='LabelText-dashboard'>
                            {tags[2]}
                          </LabelText>
                          <p>{item.quest2}</p>
                        </React.Fragment>
                      )}
                      {item.quest3 && (
                        <React.Fragment key={`${item.id}${index}${tags[3]}`}>
                          <LabelText className='LabelText-dashboard'>
                            {tags[3]}
                          </LabelText>
                          <p>{item.quest3}</p>
                        </React.Fragment>
                      )}
                      {item.quest4 && (
                        <React.Fragment key={`${item.id}${index}${tags[4]}`}>
                          <LabelText className='LabelText-dashboard'>
                            {tags[4]}
                          </LabelText>
                          <p>{item.quest4}</p>
                        </React.Fragment>
                      )}
                      {item.quest5 && (
                        <React.Fragment key={`${item.id}${index}${tags[5]}`}>
                          <LabelText className='LabelText-dashboard'>
                            {tags[5]}
                          </LabelText>
                          <p>{item.quest5}</p>
                        </React.Fragment>
                      )}
                      {item.quest6 && (
                        <React.Fragment key={`${item.id}${index}${tags[6]}`}>
                          <LabelText className='LabelText-dashboard'>
                            {tags[6]}
                          </LabelText>
                          <p>{item.quest6}</p>
                        </React.Fragment>
                      )}
                      {item.quest7 && (
                        <React.Fragment key={`${item.id}${index}${tags[7]}`}>
                          <LabelText className='LabelText-dashboard'>
                            {tags[7]}
                          </LabelText>
                          <p>{item.quest7}</p>
                        </React.Fragment>
                      )}
                      {item.quest8 && (
                        <React.Fragment key={`${item.id}${index}${tags[8]}`}>
                          <LabelText className='LabelText-dashboard'>
                            {tags[8]}
                          </LabelText>
                          <p>{item.quest8}</p>
                        </React.Fragment>
                      )}
                      {item.quest9 && (
                        <React.Fragment key={`${item.id}${index}${tags[9]}`}>
                          <LabelText className='LabelText-dashboard'>
                            {tags[9]}
                          </LabelText>
                          <p>{item.quest9}</p>
                        </React.Fragment>
                      )}
                    </li>
                  )}
                </Content>
              </Card>
            </>
          )
        })}
        {/* </ul> */}
      </Cards>
    </>
  )
}
