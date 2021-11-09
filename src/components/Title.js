import React from 'react'

function Title () {
  return (
    <div>
      <div className='font-monsterrat'>
        <h1 className='text-6xl mx-5 my-2'>LIAM KINGSTON YOUNG</h1>
        <h3 className='text-xl mx-8 -my-2'>is a really cool guy with a </h3>
      </div>
      <div className='mt-24 text-3xl flex font-bold'>
        <div>
          <h1 className='mx-5'>PASSION FOR</h1>
          <h1 className='mx-5'>EYE FOR</h1>
          <h1 className='mx-5'>HUNGER FOR</h1>
        </div>
        <div>
          <h1 className='text-portfolio-pink'>TECH</h1>
          <h1 className='text-portfolio-red'>DESIGN</h1>
          <h1 className='text-portfolio-orange'>CHALLENGE</h1>
        </div>
      </div>
    </div>
  )
}

export default Title
