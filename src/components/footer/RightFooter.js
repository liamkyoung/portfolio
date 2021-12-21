import React from 'react'
import Image from 'next/image'
import Headshot from '../../../public/photos/headshot.jpeg'
import LogoBlack from '../LogoBlack'
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

function RightFooter () {
  return (
    <div className='pt-10 lg:pt-0'>
      <div className='flex justify-center'>
        <Link href='https://www.linkedin.com/in/liamkyoung/'>
          <Image
            height={200}
            width={200}
            src={Headshot}
            objectFit='contain'
            className='rounded-full drop-shadow-2xl cursor-pointer'
          />
        </Link>
      </div>
      <div className='m-8'>
        <div className='flex items-center justify-center'>
          <div className='flex max-w-sm max-h-20 items-center'>
            <Link href='https://github.com/liamkyoung'>
              <div className='button hover:text-portfolio-yellow'>
                <GitHubIcon />
              </div>
            </Link>
            <Link href='https://instagram.com/liamkyoung'>
              <div className='button hover:text-portfolio-yellow'>
                <InstagramIcon />
              </div>
            </Link>
            <Link href='https://www.linkedin.com/in/liamkyoung/'>
              <div className='button hover:text-portfolio-yellow'>
                <LinkedInIcon />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightFooter
