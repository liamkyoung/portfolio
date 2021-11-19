import React from 'react'
import Image from 'next/image'
import BGSVG from '../../../public/bg1.svg' // bg1

function BgSVG () {
  return (
    <div className='hidden md:block w-full sm:h-full overflow-hidden'>
      <Image
        src={BGSVG}
        layout='fill'
        priority='true'
        objectFit='cover'
      />
    </div>
  )
}

export default BgSVG
