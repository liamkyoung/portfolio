import React from 'react'
import Image from 'next/image'
import Headshot from '../../../public/photos/headshot.jpeg'
import LogoBlack from '../LogoBlack'
import Link from 'next/link'

function RightFooter () {
  return (
    <div>
      <div className='flex justify-center'>
        <div>
          <Image
            height={200}
            width={200}
            src={Headshot}
            objectFit='contain'
            className='rounded-full'
          />
        </div>
      </div>
      <div className='m-8'>
        <h1 className='mx-5 font-reem'>Check out my other media here</h1>
        <div className='flex items-center'>
          <div className='flex max-w-sm max-h-20 items-center'>
            <Link href='https://github.com/liamkyoung'>
              <h1 className='button'>gh</h1>
            </Link>
            <Link href='https://instagram.com/liamkyoung'>
              <h1 className='button'>insta</h1>
            </Link>
            <Link href='https://www.linkedin.com/in/liamkyoung/'>
              <h1 className='button'>link</h1>
            </Link>
          </div>
          <div className='border-portfolio-orange border-l-4 items-center ml-5'>
            <LogoBlack height={150} width={300} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightFooter
