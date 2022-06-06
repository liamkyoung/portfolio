import React from 'react'
import Logo from '../logos/Logo'
import Link from 'next/link'

function Header () {
  return (
    <div className='hidden absolute top-0 left-0 z-50 md:flex font-paytone text-3xl mx-6 items-center my-5 h-24 overflow-hidden'>
      <Logo height={100} width={100} />
      <Link href='/code' passHref>
        <h1 className='headerBtn'>code</h1>
      </Link>
      <Link href='/photos' passHref>
        <h1 className='headerBtn'>photos</h1>
      </Link>
      <Link href='/resume' passHref>
        <h1 className='headerBtn'>resume</h1>
      </Link>
      <Link href='/about' passHref>
        <h1 className='headerBtn'>about</h1>
      </Link>
    </div>
  )
}

export default Header
