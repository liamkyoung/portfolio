import React from 'react'

function SubTitle () {
  return (
    <div className=''>
      <div className='flex align-bottom justify-center md:justify-start'>
        <hr className='sectionHR md:w-1/2 w-3/4' />
      </div>
      <div className='flex font-notable justify-center md:justify-start'>
        <div className='text-lg md:text-2xl lg:text-3xl bg-opacity-25'>
          <h1 className='mx-5 my-1 md:my-0'>PASSION FOR</h1>
          <h1 className='mx-5 my-2 md:my-2'>EYE FOR</h1>
          <h1 className='mx-5 my-1 md:my-0'>HUNGER FOR</h1>
        </div>
        <div className='text-lg md:text-3xl bg-opacity-25 text-right md:text-left'>
          <h1 className='text-portfolio-pink my-1 sm:my-1 md:my-0'>TECH</h1>
          <h1 className='text-portfolio-red my-2 sm:my-2 md:my-0 lg:my-2'>DESIGN</h1>
          <h1 className='text-portfolio-orange md:my-1'>CHALLENGE</h1>
        </div>
      </div>
      <div className='flex align-bottom justify-center md:justify-start'>
        <hr className='sectionHR md:w-1/2 w-3/4' />
      </div>
    </div>
  )
}

export default SubTitle
