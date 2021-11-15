import React from 'react'
import Link from 'next/link'
import Carousel from './Carousel'

function PhotographySection () {
  return (
    <div className='flex justify-center'>
      <div className='w-3/4'>
        <hr />
        <h1 className='sectionHeading text-center'>Featured Photography</h1>
        <hr />
        <div className='m-10'>
          <Carousel />
        </div>
        <hr />
        <div className='flex justify-center m-5'>
          <Link href='/photos'>
            <h1 className='button text-center'>See All Photos</h1>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default PhotographySection
