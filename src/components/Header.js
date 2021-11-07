import React from 'react'
import Logo from './Logo'
import Image from 'next/image'

function Header () {
  return (
    <div className='flex text-2xl mx-12 items-center z-20'>
      <Logo />
      <h1 className='headerBtn'>code</h1>
      <h1 className='headerBtn'>photos</h1>
      <h1 className='headerBtn'>resume</h1>
      <h1 className='headerBtn'>about</h1>
    </div>
  )
}

export default Header
