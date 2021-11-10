import React from 'react'
import Link from 'next/link'

function Buttons () {
  return (
    <div className='flex text-black items-start'>
      <Link href='/photos'>
        <h1 className='button'>All Photos</h1>
      </Link>
      <Link href='/code'>
        <h1 className='button'>All Projects</h1>
      </Link>
      <div>
        <Link href='/contact'>
          <h1 className='button hover:font-bold'>Contact</h1>
        </Link>
        <h2 className='text-portfolio-red text-sm font-bold'>*looking for work!</h2>
      </div>
    </div>
  )
}

export default Buttons
