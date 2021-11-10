import React from 'react'
import Image from 'next/image'
import BGSVG from '../../public/bg1.svg'

function BgSVG () {
  return (
    <div className='w-full h-full overflow-hidden'>
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
