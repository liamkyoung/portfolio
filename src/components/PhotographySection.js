import React from 'react'
import Link from 'next/link'
import Carousel from './photos/Carousel'

function PhotographySection() {
  return (
    <div className='flex justify-center'>
      <div id='photos' className='w-3/4'>
        <hr className='sectionHR' />
        <h1 className='sectionHeading text-center'>Featured Photography</h1>
        <hr className='sectionHR' />
        <div className='m-10'>
          <Carousel />
        </div>
        <hr className='sectionHR' />
        <div className='flex justify-center m-5'>
          <Link href='/photos' passHref>
            <h1 className='button text-center'>See All Photos</h1>
          </Link>
        </div>
        <hr className='sectionHR' />
      </div>
    </div>
  )
}

export default PhotographySection
