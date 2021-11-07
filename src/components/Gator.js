import React from 'react'
import Image from 'next/image'
import GatorPic from '../../public/gator.png'

function Gator () {
  return (
    <div className='hidden md:inline-flex mx-12'>
      <Image
        src={GatorPic}
        height={500}
        width={500}
        objectFit='contain'
      />
    </div>
  )
}

export default Gator
