import React from 'react'
import Link from 'next/link'

const smoothScroll = (element) => {
  let elmntToView = document.getElementById(element);
  elmntToView.scrollIntoView({ behavior: 'smooth'}); 
}

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
        <div onClick={() => smoothScroll('footer')}>
          <h1 className='button hover:font-bold'>Contact Me</h1>
        </div>
      </div>
    </div>
  )
}

export default Buttons
