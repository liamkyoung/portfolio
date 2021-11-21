import React from 'react'
import anime from 'animejs'
import Title from './titles/Title'
import SubTitle from './titles/SubTitle'
import Buttons from './titles/Buttons'

function TitlePage () {
  const animationRef = React.useRef(null)

  React.useEffect(() => {
    animationRef.current = anime({
      targets: '#title',
      translateY: ['-10px', '10px'],
      easing: 'easeInOutSine',
      duration: 4000,
      direction: 'alternate',
      loop: true
    })
  }, [])

  return (
    <div className='lg:absolute lg:left-0 md:top-16 relative mb-16 justify-center lg:justify-start z-20 flex items-center'>
      <div className='m-6 md:m-12 lg:m-32'>
        <div id='title'>
          <Title />
          <SubTitle />
        </div>
        <Buttons />
      </div>
    </div>
  )
}

export default TitlePage
