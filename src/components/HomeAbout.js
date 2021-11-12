import React from 'react'
import Gator from './Gator'

function HomeAbout () {
  return (
    <div className='flex justify-center mb-16'>
      <div className='max-w-3/4'>
        <div className='font-reem'>
          <h1 className='text-center max-w-xl'>I am currently a student at the University of Florida in my Junior Year of Computer Science I am currently working as an intern for a company called Atlas Networks in Sarasota But am looking for opprotunities during summer 2022.</h1>
        </div>
        <div className='flex justify-center'>
          <Gator height={200} width={200} />
        </div>
        <div className='flex justify-center font-reem'>
          <h1 className='max-w-xs text-center mx-0 my-auto'>Some other stuff lorem blah blah blah lorem blah blah blah lorem blah blah blah</h1>
        </div>
      </div>
    </div>
    
  )
}

export default HomeAbout
