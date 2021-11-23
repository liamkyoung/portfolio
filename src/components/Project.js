import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Project ({ image, title, frameworks, desc, code, site, video }) {
  return (
    <div className='absolute left-0 top-0 bg-transparent md:bg-portfolio flex h-full max-w-screen-lg md:border-2 md:border-portfolio-pink m-2 rounded-3xl my-8 hover:border-portfolio-red project'>
      <div className=' border-portfolio-pink bg-portfolio border-4 rounded-3xl w-1/2 h-full m-2 my-8 flex-grow'>
        <h1 className='text-xl md:text-3xl m-3 md:m-6 font-paytone'>{title}</h1>
        <h2 className='text-md md:text-2xl m-3 md:m-6 font-reem'>{frameworks}</h2>
        <h3 className='text-sm md:text-xl m-3 md:m-6 max-w-full font-reem overflow-ellipsis overflow-y-hidden'>{desc}</h3>
        <div className='flex flex-col md:flex-row justify-center m-auto align-center overflow-hidden w-3/4'>
          <Link href={code}><h1 className='button'>code</h1></Link>
          <Link href={site}><h1 className='button'>site</h1></Link>
          <Link href={video}><h1 className='button'>video</h1></Link>
        </div>
      </div>
      <div className='flex flex-grow-0 flex-shrink align-center justify-center border-2 border-portfolio rounded-3xl w-0 md:w-1/2'>
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
