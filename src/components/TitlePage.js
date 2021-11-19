import React from 'react'
import Title from './titles/Title'
import SubTitle from './titles/SubTitle'
import Buttons from './titles/Buttons'

function TitlePage () {
  return (
    <div className='mb-16 justify-center lg:justify-start relative z-20 flex items-center'>
      <div className='m-6 md:m-12 lg:m-32'>
        <Title />
        <SubTitle />
        <Buttons />
      </div>
    </div>
  )
}

export default TitlePage
