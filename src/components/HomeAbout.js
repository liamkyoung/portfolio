import React from 'react'
import Gator from './Gator'
import Image from 'next/image'
import left1 from '../../public/backgrounds/left1.svg'
import right1 from '../../public/backgrounds/right1.svg'

function HomeAbout () {
  return (
    <div className='relative flex justify-center 2xl:mt-14 mb-8'>
      <div className='max-h-80 z-0 hidden md:block'>
        <Image
          src={left1}
          objectFit='cover'
        />
      </div>
      <div className='max-w-3/4'>
        <div className='font-reem'>
          <h1 className='text-center max-w-xl my-6 text-2xl'>I am currently a student at the University of Florida in my Junior Year of Computer Science.</h1>
        </div>
        <div className='flex justify-center m-5'>
          <Gator height={200} width={200} />
        </div>
        <div className='flex justify-center font-reem overflow-hidden'>
          <h1 className='max-w-md text-center mx-0 my-auto text-xl'> I am currently working as an intern for a company called Atlas Networks, but am looking for opprotunities during summer 2022.</h1>
        </div>
      </div>
      <div className='hidden md:block'>
        <Image
          src={right1}
          objectFit='cover'
        />
      </div>
    </div>
  )
}

export default HomeAbout
