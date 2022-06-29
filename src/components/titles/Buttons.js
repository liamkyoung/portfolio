import React from 'react'
import Link from 'next/link'

const smoothScroll = (element) => {
  let elmntToView = document.getElementById(element);
  elmntToView.scrollIntoView({ behavior: 'smooth'}); 
}

function Buttons () {
  return (
    <div className='flex text-black items-start md:justify-start justify-center animate-fade-in-down'>
      <Link href='/code' passHref>
        <h1 className='button'>All Projects</h1>
      </Link>
      <Link href='/photos' passHref>
        <h1 className='button'>All Photos</h1>
      </Link>
      <div>
        <div className='' onClick={() => smoothScroll('footer')}>
          <h1 className='button hover:font-bold'>Contact Me</h1>
          {/* <h1 className='absolute top-0 -right-28 font-secular text-portfolio-red'>*Open for work!</h1> */}
        </div>
      </div>
    </div>
  )
}

export default Buttons
