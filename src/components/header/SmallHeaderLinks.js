import React from 'react'
import Link from 'next/link'

function SmallHeaderLinks() {
  return (
    <div className='animate-fade-in-down'>
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
    </div>
  )
}

export default SmallHeaderLinks
