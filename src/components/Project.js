import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Project ({ image, title, frameworks, desc, code, site, video }) {
  return (
    <div className='flex-grow bg-transparent bg-portfolio flex max-w-screen-lg border-2 border-portfolio-pink m-2 rounded-3xl my-8 hover:border-portfolio-red project'>
      {/*  */}
      <div className='w-1/2 h-full m-2 my-8 flex-grow'>
        <div className='border-portfolio-pink border-4 rounded-3xl'>
          <h1 className='text-center lg:text-left text-xl lg:text-3xl m-3 md:m-6 font-paytone'>{title}</h1>
          <h2 className='text-center lg:text-left text-md lg:text-2xl m-3 md:m-6 font-reem'>{frameworks}</h2>
          <h3 className='text-center lg:text-left text-sm lg:text-xl m-3 md:m-6 max-w-full font-reem overflow-ellipsis overflow-y-hidden'>{desc}</h3>
        </div>
        <div className='hidden lg:block justify-center my-4 min-w-full border-portfolio-red border-2 rounded-3xl'>
          <Image
            src={image}
            alt='project-image'
            layout='responsive'
            objectFit='contain'
            className='rounded-3xl'
          />
        </div>
        <div className='flex flex-col lg:flex-row justify-center m-auto align-center overflow-hidden w-1/2'>
          <Link href={code}><h1 className='button' passHref>code</h1></Link>
          <Link href={site}><h1 className='button' passHref>site</h1></Link>
          <Link href={video}><h1 className='button' passHref>video</h1></Link>
        </div>
      </div>

    </div>
  )
}

export default Project
