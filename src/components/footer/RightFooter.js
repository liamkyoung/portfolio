import React from 'react'
import Image from 'next/image'
import Headshot from '../Headshot'
import LogoBlack from '../logos/LogoBlack'
import SocialButtons from './SocialButtons'

function RightFooter () {
  return (
    <div className='pt-10 xl:pt-0'>
      <Headshot />
      <SocialButtons />
    </div>
  )
}

export default RightFooter
