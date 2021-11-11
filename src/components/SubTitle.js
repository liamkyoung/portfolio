import React from 'react'

function SubTitle () {
  return (
    <div className=''>
      <div className='flex align-bottom'>
        <hr className='m-6 w-1/2 stroke-1' />
      </div>
      <div className='text-3xl flex font-notable'>
        <div>
          <h1 className='mx-5'>PASSION FOR</h1>
          <h1 className='mx-5'>EYE FOR</h1>
          <h1 className='mx-5'>HUNGER FOR</h1>
        </div>
        <div className=''>
          <h1 className='text-portfolio-pink'>TECH</h1>
          <h1 className='text-portfolio-red'>DESIGN</h1>
          <h1 className='text-portfolio-orange'>CHALLENGE</h1>
        </div>
      </div>
      <div className='flex align-bottom'>
        <hr className='m-6 w-1/2 stroke-1' />
      </div>
    </div>
  )
}

export default SubTitle
