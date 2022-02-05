import React from 'react'
import Image from 'next/image'
import GatorPic from '../../public/photos/gator.png'

function Gator ({ height, width }) {
  return (
    <div className='md:inline-flex ml-12 rounded-3xl'>
      <Image
        src={GatorPic}
        height={height}
        width={width}
        objectFit='responsive'
      />
    </div>
  )
}

export default Gator
