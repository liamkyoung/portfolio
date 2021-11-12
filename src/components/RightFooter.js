import React from 'react'
import Image from 'next/image'
import Headshot from '../../public/headshot.jpeg'
import Logo from './Logo'

function RightFooter () {
  return (
    <div>
      <div className='flex justify-center'>
        <div>
          <Image
            height={200}
            width={200}
            src={Headshot}
            objectFit='contain'
            className='rounded-full'
          />
          <h1 className='font-reem text-xl mt-5 mx-0 text-center max-w-xs'>Random Text here xd u8gufousgfdsgf</h1>
        </div>
      </div>
        <div className='m-8'>
          <h1 className='mx-5'>Check out my other media here</h1>
          <div className='flex items-center'>
            <div className='flex max-w-sm max-h-20 items-center'>
              <h1 className='button'>gh</h1>
              <h1 className='button'>insta</h1>
              <h1 className='button'>link</h1>
            </div>
            <div className='border-portfolio-orange border-l-4 items-center ml-5'>
              <Logo height={300} width={500}/>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default RightFooter
