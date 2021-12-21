import React from 'react'
import Image from 'next/image'
import drip from '../../../public/drip.svg'

function BgSVG1 () {
  return (
    <div className='w-full h-full overflow-hidden'>
      <div>
        <Image
          src={drip}
          layout='fill'
          priority='true'
          objectFit='cover'
          alt='bg-img1'
        />
      </div>
    </div>
  )
}

export default BgSVG1
