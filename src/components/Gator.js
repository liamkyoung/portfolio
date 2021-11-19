import React from 'react'
import Image from 'next/image'
import GatorPic from '../../public/photos/gator.png'

function Gator ({ height, width }) {
  return (
    <div className='hidden md:inline-flex mx-12'>
      <Image
        src={GatorPic}
        height={height}
        width={width}
        objectFit='contain'
      />
    </div>
  )
}

export default Gator
