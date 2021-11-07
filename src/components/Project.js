import React from 'react'
import Image from 'next/image'

function Project ({ image, title, frameworks, desc, code, site, video }) {
  return (
    <div className='flex max-h-96'>
      <Image
        src={image}
        alt='project-image'
        layout='intrinsic'
        objectFit='contain'
      />
      <div>
        <h1 className='font-bold text-3xl mb-3 text-center'>{title}</h1>
        <h2 className='font-thin text-2xl mb-5'>{frameworks}</h2>
        <h3 className='font-normal text-xl m-2'>{desc}</h3>
        <div className='flex justify-center'>
          <h1 className='button' a={code}>Code</h1>
          <h1 className='button' a={site}>Site</h1>
          <h1 className='button' a={video}>Video</h1>
        </div>
      </div>
    </div>
  )
}

export default Project
