import React from 'react'
import anime from 'animejs'
import Title from './titles/Title'
import SubTitle from './titles/SubTitle'
import Buttons from './titles/Buttons'

function TitlePage() {
  const animationRef = React.useRef(null)

  React.useEffect(() => {
    animationRef.current = anime({
      targets: '#title',
      translateY: ['-10px', '10px'],
      easing: 'easeInOutSine',
      duration: 4000,
      direction: 'alternate',
      loop: true,
    })
  }, [])

  return (
    <div className='flex items-center'>
      <div className='sm:my-24 md:my-32 md:mx-16 lg:mx-24 lg:my-48 xl:mx-24 xl:my-48 2xl:mx-28 2xl:my-48 relative z-30'>
        <div id='title' className='animate-fade-in-down'>
          <Title />
          <SubTitle />
        </div>
        <Buttons />
      </div>
    </div>
  )
}

export default TitlePage
