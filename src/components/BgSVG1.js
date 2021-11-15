import React from 'react'
import Image from 'next/image'
import left1 from '../../public/left1.svg'
import right1 from '../../public/right1.svg'
import drip from '../../public/drip.svg'

function BgSVG1 () {
  return (
    <div className='w-full h-full overflow-hidden'>
      <div>
        <Image
          src={drip}
          layout='fill'
          priority='true'
          objectFit='cover'
        />
      </div>
    </div>
  )
}

export default BgSVG1
