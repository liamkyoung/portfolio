import React from 'react'
import Link from 'next/link'
import Pumpkin from '../../public/photos/me_and_pumpkin_crop.png'
import Image from 'next/image'

function AboutPic() {
  return (
    <div className='flex justify-center rounded-full'>
    <Link href='https://www.linkedin.com/in/liamkyoung/' passHref>
      <Image
        height={200}
        width={200}
        src={Pumpkin}
        objectFit='contain'
        className='rounded-full drop-shadow-2xl cursor-pointer'
        alt='linkedin-img'
      />
    </Link>
  </div>
  )
}

export default AboutPic
