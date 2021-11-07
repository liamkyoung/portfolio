import React from 'react'
import Image from 'next/image'
import BGSVG from '../../public/bg.svg'

function BgSVG () {
  return (
    <div className='z-10'>
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
