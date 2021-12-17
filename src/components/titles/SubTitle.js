import React from 'react'

function SubTitle () {
  return (
    <div className=''>
      <div className='flex align-bottom'>
        <hr className='sectionHR w-1/2' />
      </div>
      <div className='flex font-notable'>
        <div className='text-xl md:text-2xl lg:3xl'>
          <h1 className='mx-5 my-1 md:my-0'>PASSION FOR</h1>
          <h1 className='mx-5 my-2 md:my-2'>EYE FOR</h1>
          <h1 className='mx-5 my-1 md:my-0'>HUNGER FOR</h1>
        </div>
        <div className='text-3xl'>
          <h1 className='text-portfolio-pink'>TECH</h1>
          <h1 className='text-portfolio-red'>DESIGN</h1>
          <h1 className='text-portfolio-orange md:my-1'>CHALLENGE</h1>
        </div>
      </div>
      <div className='flex align-bottom'>
        <hr className='sectionHR w-1/2' />
      </div>
    </div>
  )
}

export default SubTitle
