import React from 'react'
import Carousel from './Carousel'

function PhotographySection () {
  return (
    <div className='flex justify-center'>
      <div className='w-3/4'>
        <h1 className='m-7 font-bold'>Featured Photography:</h1>
        <Carousel />
        <hr />
        <h1 className='button text-center'>See all Photos</h1>
        <hr />
      </div>
    </div>
  )
}

export default PhotographySection
