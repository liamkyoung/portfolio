import React from 'react'
import { useState } from 'react'
import Logo from '../logos/Logo'
import Menu from '@mui/icons-material/Menu'
import SmallHeaderLinks from './SmallHeaderLinks'

function SmallHeader () {
  const [opened, setOpen] = useState(false)

  return (
    <div className='relative w-full text-center flex justify-center md:hidden text-3xl font-paytone'>
      <nav className='relative min-w-min'>
        <Logo height={100} width={100} />
        <Menu onClick={() => setOpen(!opened)} />
        {opened ? <SmallHeaderLinks /> : null }
      </nav>
    </div>
  )
}

export default SmallHeader
