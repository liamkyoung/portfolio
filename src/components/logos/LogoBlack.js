import React from 'react'
import Image from 'next/image'
import LogoSVG from '../../../public/logo_black.svg'
import Link from 'next/link'

function Logo ({ height, width }) {
  return (
    <div className='cursor-pointer mx-5 flex-shrink-0'>
      <Link href='/' passHref>
        <Image src={LogoSVG} height={height} width={width} />
      </Link>
    </div>
  )
}

export default Logo
