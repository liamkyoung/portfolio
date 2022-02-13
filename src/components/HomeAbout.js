import React from 'react'
import Gator from '../../public/cartoon_gator.png'
import anime from 'animejs'
import Image from 'next/image'

function HomeAbout () {
  const animationRef = React.useRef(null)

  React.useEffect(() => {
    animationRef.current = anime({
      targets: '#home_about_div',
      translateY: ['-10px', '10px'],
      easing: 'easeInOutSine',
      duration: 6000,
      direction: 'alternate',
      loop: true,
    })
  }, [])

  return (
    <div className='relative z-100'>
      <div className='absolute top-0 left-0 bottom-0 right-0 m-auto w-full flex justify-center'>
        <div className='max-w-3/4 flex flex-col md:flex-row h-52 items-center animate-fade-in-down'>
          <div className='md:inline-flex m-12 rounded-3xl'>
            <Image
              src={Gator}
              objectFit='responsive'
            />
          </div>
          <div id='home_about_div' className='relative max-w-xl font-reem text-xl mx-10 text-center md:text-left bg-portfolio bg-opacity-75 p-4 rounded-md'>
            <div className='speechTriangle' />
            <h1 className='mb-3'>Hello! My name is <b>Liam Kingston Young</b> and I am a Computer Science student at the University of Florida.
              I&apos;m a self-taught web developer and have been programming for 4 years, and can&apos;t wait to start my career as
              a Software Engineer.
            </h1>
            <h1>My current interests involve soccer, skateboarding, programming, and photography. I am always ready for a challenge and I love to learn new things every day.</h1>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
