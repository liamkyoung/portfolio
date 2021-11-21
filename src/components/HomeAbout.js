import React from 'react'
import Gator from './Gator'
import HomeAboutSVG from './backgrounds/svgs/HomeAboutSVG'

function HomeAbout () {
  return (
    <div className='relative z-100'>
      <div className='absolute top-0 left-0 bottom-0 right-0 m-auto w-full flex justify-center mb-12'>
        <div className='max-w-3/4'>
          <div className='font-reem'>
            <h1 className='text-center max-w-xl my-6 text-2xl'>I am currently a student at the University of Florida in my Junior Year of Computer Science.</h1>
          </div>
          <div className='flex justify-center m-5'>
            <Gator height={200} width={200} />
          </div>
          <div className='flex justify-center font-reem overflow-hidden'>
            <h1 className='max-w-md text-center mx-0 my-auto text-xl'>Working as an intern for a company called Atlas Networks, but looking for internship opprotunities during summer 2022.</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
