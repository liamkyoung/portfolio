import React from 'react'
import Image from 'next/image'
import LogoSVG from '../../public/logo.svg'
import Link from 'next/link'

function Logo () {
  return (
    <div className='text-white cursor-pointer'>
      <Link href='/'>
        <Image src={LogoSVG} height={100} width={100} />
      </Link>
    </div>
  )
}

export default Logo
