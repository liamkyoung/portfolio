import React from 'react'
import Image from 'next/image'
import BGSVG from '../../../public/backgrounds/bg1.svg' // bg1

function BgSVG () {
  return (
    <div className='hidden md:block w-full sm:h-full overflow-hidden'>
      <Image
        src={BGSVG}
        layout='fill'
        priority='true'
        objectFit='cover'
        alt='bg-img'
      />
    </div>
  )
}

export default BgSVG
