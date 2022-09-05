import React from 'react'
import Link from 'next/link'
import ScrollButton from '../contact/ScrollButton'

function SmallHeaderLinks() {
  return (
    <div className='absolute -bottom-92 -left-32 animate-fade-in-down bg-portfolio opacity-100 rounded-lg z-50 w-96 p-4'>
      <Link href='/code'>
        <ul className='headerBtn my-5'>code</ul>
      </Link>
      <Link href='/photos'>
        <ul className='headerBtn my-5'>photos</ul>
      </Link>
      <Link href='/resume'>
        <ul className='headerBtn my-5'>resume</ul>
      </Link>
      <Link href='/about'>
        <ul className='headerBtn my-5'>about</ul>
      </Link>
      <ScrollButton text='Contact Me' element='footer' />
    </div>
  )
}

export default SmallHeaderLinks
