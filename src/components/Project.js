import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Project ({ image, title, frameworks, desc, code, site, video }) {
  return (
    <div className='bg-portfolio flex max-h-96 max-w-screen-lg border-2 border-portfolio-pink m-2 rounded-3xl my-8 hover:border-portfolio-red'>
      <div className=' border-portfolio-pink border-4 rounded-3xl w-1/2'>
        <h1 className='text-3xl m-6 font-paytone'>{title}</h1>
        <h2 className='text-2xl m-6 font-reem'>{frameworks}</h2>
        <h3 className='font-reem text-xl m-6 max-w-full overflow-ellipsis overflow-y-hidden'>{desc}</h3>
        <div className='flex justify-center'>
          <Link href={code}><h1 className='button'>code</h1></Link>
          <Link href={site}><h1 className='button'>site</h1></Link>
          <Link href={video}><h1 className='button'>video</h1></Link>
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
