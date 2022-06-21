import React from 'react'
import LeftFooter from './footer/LeftFooter'
import RightFooter from './footer/RightFooter'

function Footer () {
  return (
    <div className='bg-portfolio-ivory text-black text-bold min-h-full pb-10'>
      <h1 className='text-center lg:text-left font-paytone text-4xl py-8 px-16'>Contact Me</h1>
      <div className='xl:flex items-center'>
        <LeftFooter />
        <div className='border-t-4 xl:border-l-4 xl:border-t-0 border-portfolio-orange flex-auto'>
          <RightFooter />
        </div>
      </div>
    </div>
  )
}

export default Footer
