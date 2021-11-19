import React from 'react'
import LeftFooter from './footer/LeftFooter'
import RightFooter from './footer/RightFooter'

function Footer () {
  return (
    <div className='bg-portfolio-ivory text-black text-bold min-h-full'>
      <h1 className='font-paytone text-4xl py-8 px-16'>Contact Me</h1>
      <div className='flex items-center'>
        <LeftFooter />
        <div className='border-l-4 border-portfolio-orange flex-auto'>
          <RightFooter />
        </div>
      </div>
    </div>
  )
}

export default Footer
