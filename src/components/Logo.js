import React from 'react'
import Image from 'next/image'
import LogoSVG from '../../public/logo.svg'

function Logo () {
  return (
    <div className='text-white cursor-pointer'>
      <Image src={LogoSVG} height={100} width={100} />
    </div>
  )
}

export default Logo
