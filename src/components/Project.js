import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Project ({ image, title, frameworks, desc, code, site, video }) {
  return (
    <div className='bg-portfolio max-w-5xl rounded-3xl flex border-white border-2 align-center my-5 min-w-min'>
      <div className='px-6 text-center md:text-left'>
          <h1 className='text-4xl font-paytone pt-8 pb-4'>{title}</h1>
          <h2 className='text-xl font-reem hover:text-portfolio-red text-portfolio-orange'>{frameworks}</h2>
          <p className='text-lg font-reem pt-6 pb-6'>{desc}</p>
          <div className='flex justify-center pb-5'>
            <Link href={code}><h1 className='button' passHref>{"<code>"}</h1></Link>
            <Link href={site}><h1 className='button' passHref>{"<site>"}</h1></Link>
            <Link href={video}><h1 className='button' passHref>{"<video>"}</h1></Link>
          </div>
      </div>
      <div className='hidden md:flex cursor-pointer m-4'>
        <Link href={video}>
          <Image
              src={image}
              alt='project-image'
              objectFit='contain'
              className='rounded-3xl'
            />
        </Link>

      </div>
    </div>
  )
}

export default Project
