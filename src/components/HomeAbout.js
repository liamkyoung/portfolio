import React from 'react'
import Gator from './Gator'
import HomeAboutSVG from './backgrounds/svgs/HomeAboutSVG'

function HomeAbout () {
  return (
    <div className='relative z-100'>
      <div className='absolute top-0 left-0 bottom-0 right-0 m-auto w-full flex justify-center'>
        <div className='max-w-3/4 flex flex-col md:flex-row h-52 items-center animate-fade-in-down'>
          <Gator height={300} width={300} />
          <div className='max-w-xl font-reem text-xl mx-10 text-center md:text-left'>
            <h1 className='mb-3'>Hello! My name is Kingston Young and I am a Computer Science student at the University of Florida.
              I'm a self-taught web developer and have been programming for 4 years, and can't wait to start my career as
              a Software Engineer.
            </h1>
            <h1>My current interests involve soccer, skateboarding, programming, and cooking. I am always ready for a challenge and I love to learn new things every day.</h1>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
