import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

function Header () {
  return (
    <div className='relative z-50 flex text-2xl mx-12 items-center'>
      <Logo />
      <Link href='/code'>
        <h1 className='headerBtn'>code</h1>
      </Link>
      <Link href='/photos'>
        <h1 className='headerBtn'>photos</h1>
      </Link>
      <Link href='/resume'>
        <h1 className='headerBtn'>resume</h1>
      </Link>
      <Link href='/about'>
        <h1 className='headerBtn'>about</h1>
      </Link>
    </div>
  )
}

export default Header
