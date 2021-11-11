import React from 'react'
import Image from 'next/image'

function Project ({ image, title, frameworks, desc, code, site, video }) {
  return (
    <div className='bg-portfolio flex max-h-96 max-w-screen-lg border-2 border-portfolio-pink m-2 rounded-3xl my-8 hover:border-portfolio-red'>
      <div className='hover:border-portfolio-red border-portfolio-pink border-4 rounded-3xl w-1/2'>
        <h1 className='text-3xl m-6 font-paytone'>{title}</h1>
        <h2 className='text-2xl m-6 font-reem'>{frameworks}</h2>
        <h3 className='font-reem text-xl m-6 max-w-full overflow-hidden overflow-ellipsis overflow-y-hidden'>{desc}</h3>
        <div className='flex justify-center'>
          <h1 className='button' a={code}>{'<Code>'}</h1>
          <h1 className='button' a={site}>{'<Site>'}</h1>
          <h1 className='button' a={video}>{'<Video>'}</h1>
        </div>
      </div>
      <div className='flex align-center justify-center border-2 border-portfolio rounded-3xl overflow-hidden w-1/2'>
        <Image
          src={image}
          alt='project-image'
          layout='intrinsic'
          objectFit='contain'
        />
      </div>
    </div>
  )
}

export default Project
