import React from 'react'
import Image from 'next/image'
import LogoSVG from '../../public/logo.svg'
import Link from 'next/link'

function Logo ({ height, width }) {
  return (
    <div className='text-white cursor-pointer mx-5 flex-shrink-0'>
      <Link href='/'>
        <Image src={LogoSVG} height={height} width={width} />
      </Link>
    </div>
  )
}

export default Logo
