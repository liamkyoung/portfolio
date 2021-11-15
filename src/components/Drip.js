import React from 'react'
import Image from 'next/image'
import drip from '../../public/drip.svg'

function Drip () {
  return (
    <div>
      <div className='max-h-80 z-0 -mt-4'>
        <Image
          src={drip}
          objectFit='cover'
        />
      </div>
    </div>
  )
}

export default Drip
