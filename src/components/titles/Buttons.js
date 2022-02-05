import React from 'react'
import Link from 'next/link'

function Buttons () {
  return (
    <div className='flex text-black items-start md:justify-start justify-center animate-fade-in-down'>
      <Link href='/photos'>
        <h1 className='button'>All Photos</h1>
      </Link>
      <Link href='/code'>
        <h1 className='button'>All Projects</h1>
      </Link>
      <div>
        <Link href='/contact'>
          <h1 className='button hover:font-bold'>Contact Me</h1>
        </Link>
      </div>
    </div>
  )
}

export default Buttons
